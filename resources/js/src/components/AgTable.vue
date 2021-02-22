<template>
    <div class="w-full clearfix">
        <ag-grid-vue
            :key="key"
            :style="{height}"
            class="ag-theme-alpine"
            :gridOptions="gridOptions"
            :modules="modules"
            @grid-ready="onGridReady"
            @modelUpdated="calculateHeight"
            @selectionChanged="handleSelectionChanged"
            @sortChanged="handleSortChanged"
            @paginationChanged="paginationChanged">
        </ag-grid-vue>
        <div class="pagination-bar" v-if="pager.totalItems > (perPageDefault || 10)">
            <div class="page-sizes clearfix">
                <span>Show rows</span>
                <v-select class="page-sizes-menu" :options="pageSizes" v-model="perPage"></v-select>
            </div>

            <div class="links clearfix">
                <button @click="setPage(1)" class="first" :class="{'disabled': pager.currentPage === 1}">
                    <span class="feather icon-arrow-right"></span>
                </button>
                <ul class="page-numbers">
                    <li class="page-item previous" :class="{'disabled': pager.currentPage === 1}">
                        <a class="page-link" @click="setPage(pager.currentPage - 1)">
                            <span class="feather icon-skip-forward"></span>
                        </a>
                    </li>

                    <li v-for="page in pager.pages" :key="page" class="page-item page-number"
                        :class="{'active': pager.currentPage === page}">
                        <a class="page-link" @click="setPage(page)">{{ page }}</a>
                    </li>

                    <li class="page-item next" :class="{'disabled': pager.currentPage === pager.totalPages}">
                        <a class="page-link" @click="setPage(pager.currentPage + 1)">
                            <span class="feather icon-skip-back"></span>
                        </a>
                    </li>
                </ul>
                <button @click="setPage(pager.totalPages)" class="last"
                        :class="{'disabled': pager.currentPage === pager.totalPages}">
                    <span class="feather icon-arrow-left"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import '@assets/css/ag-grid.css'
import '@assets/css/ag-theme-alpine.css'
import {AgGridVue} from 'ag-grid-vue'
import AllModules from 'ag-grid-enterprise'
import paginate from 'jw-paginate'

export default {
    name: 'ag-table',
    data () {
        return {
            key: Math.random(),
            pageSizes: [10, 25, 50, 100],
            pager: {},
            perPage: 10,
            maxPages: 10,
            totalItems: 100,
            currentPage: 1,
            modules: AllModules,
            api: null,
            columnsApi: null,
            calculatedHeight: 120
        }
    },
    components: {
        AgGridVue
    },
    props: {
        filters: {
            required: false,
            type: Object,
            default () {
                return {}
            }
        },
        columns: {
            required: true,
            type: Array
        },
        perPageDefault: {
            type: Number,
            required: false
        },
        options: {
            required: false,
            type: Object,
            default () {
                return {}
            }
        }
    },
    created () {
        if (this.perPageDefault) {
            this.perPage = this.perPageDefault
        }
    },
    computed: {
        height () {
            return `${this.calculatedHeight}px`
        },
        gridOptions () {
            // merge default Options with user options
            return Object.assign({
                enableRtl: this.$i18n.locale === 'ar',
                suppressRowClickSelection: true,
                suppressColumnVirtualisation: true,
                suppressMultiSort: true,
                suppressPaginationPanel: true,
                suppressContextMenu: true,
                suppressHorizontalScroll: true,
                suppressCellSelection: true,
                rowBuffer: 100,

                overlayNoRowsTemplate: this.overlayNoRowsTemplate(),
                enableCellChangeFlash: true,
                defaultColDef: {
                    flex: 1,
                    resizable: true,
                    suppressMenu: true,
                    unSortIcon: true,
                    suppressMovable: true,
                },
                columnDefs: this.columns,
                rowModelType: 'serverSide',
                paginationPageSize: this.perPage,
                cacheBlockSize: 10,
                pagination: true,
                animateRows: true,
                headerHeight: 60,
                rowHeight: 56,
            }, this.options)
        }
    },
    watch: {
        totalItems () {
            this.initPager()
        },
        perPage () {
            if (this.api) {
                this.options = {
                    ...this.options,
                    cacheBlockSize: this.perPage || this.perPageDefault || 10,
                    paginationPageSize: this.perPage || this.perPageDefault || 10
                }

                this.reloadGrid()
                this.initPager()
            }
        }
    },
    methods: {
        handleSelectionChanged (params) {
            this.$emit('selectionChanged', params.api.getSelectedNodes().map((node) => {
                return node.data
            }))
        },

        handleSortChanged ($event) {
            this.$emit('sortChanged', $event.api.getSortModel())
        },

        clearSelection () {
            if (this.api) {
                this.api.deselectAll()
            }
        },

        overlayNoRowsTemplate () {
            return '<span class="table-empty-state ag-overlay-loading-center" style="margin-top: 65px !important; padding: 6px 20px;">No Results Found</span>'
        },

        setupResponsive () {
            this.initColumnResponsive()
            window.matchMedia('(max-width: 767px)').addEventListener('change', this.initColumnResponsive)
            window.matchMedia('(min-width: 768px)').addEventListener('change', this.resetColumnsState)
            window.matchMedia('(min-width: 1024px)').addEventListener('change', this.resetColumnsState)
            window.matchMedia('(min-width: 1280px)').addEventListener('change', this.resetColumnsState)
        },

        initColumnResponsive () {
            const screenWidth = screen.width
            if (screenWidth < 768) {
                this.unPinColumns()
            }
        },

        unPinColumns () {
            const columns = this.columnsApi.getColumnState()
            const pinnedColumnsIds = columns.filter(column => column.pinned).map(column => column.colId)
            this.columnsApi.setColumnsPinned(pinnedColumnsIds, null)
        },

        resetColumnsState (event) {
            if (!event.matches) {
                return
            }

            this.columnsApi.resetColumnState()
        },

        onGridReady (params) {
            this.api = params.api

            this.columnsApi = params.columnApi

            this.api.setServerSideDatasource(this.gridOptions.dataSource(this.filters))

            this.initPager(1)

            this.setupResponsive()
        },

        initPager (pageNum) {
            this.pager = paginate(this.totalItems, pageNum || this.currentPage, this.perPage, this.maxPages)
        },

        setPage (pageNumber, force = false) {
            if (!force && this.currentPage === pageNumber) {
                return
            }

            this.currentPage = pageNumber
            this.api.paginationGoToPage(this.currentPage - 1)
            this.pager = paginate(this.totalItems, this.currentPage, this.perPage, this.maxPages)
        },

        paginationChanged (params) {
            this.$emit('paginationChanged')
            this.calculateHeight(params)
            // clear any selected data
            this.clearSelection()
        },

        calculateHeight (params) {
            // set height = header + row * row_num
            // if not last page then rows_number = this.pageSizes
            // if last page then rows_number = totalItems % pageSize
            this.totalItems = params.api.paginationGetRowCount()

            const isLastPage = (params.api.paginationGetTotalPages() - 1) === params.api.paginationGetCurrentPage()
            const lastPageRows = this.totalItems % params.api.paginationGetPageSize()
            const dynamicRowsNumber = isLastPage ? (lastPageRows === 0 ? params.api.paginationGetPageSize() : lastPageRows) : this.totalItems ? params.api.paginationGetPageSize() : 0
            const pinnedRows = params.api.getPinnedTopRowCount()
            const calculatedRowNumber = dynamicRowsNumber + pinnedRows
            const displayedChildRowsWithoutPagination = 'paginateChildRows' in this.gridOptions && this.gridOptions.paginateChildRows === false ? params.api.getDisplayedRowCount() - calculatedRowNumber : 0
            const rowsNumber = calculatedRowNumber + displayedChildRowsWithoutPagination

            if (rowsNumber) {
                this.calculatedHeight = 80 + (56 * rowsNumber)
            } else {
                this.calculatedHeight = 120
            }

            this.$emit('dataChange', {totalItems: this.totalItems})
        },

        setColumnDefs (columns) {
            this.api.setColumnDefs(columns)
        },

        refreshGrid () {
            this.api.purgeServerSideCache([])
        },

        applyFilters () {
            this.refreshGrid()
            this.setPage(1, true)
            this.setupResponsive()
        },

        reloadGrid () {
            this.key = Math.random()
        },

        getTotalRows () {
            return this.api.getDisplayedRowCount()
        }
    }
}
</script>

<style lang="scss" scoped>
$border-color: rgba(0, 0, 0, 0);

.pagination-bar {
    width: 100%;
}

.links,
.page-sizes {
    width: 100%;
}

.links {
    margin-top: 30px;

    span {
        color: black;
        width: 20px;
        height: 20px;
        display: inline-block;
        font-size: 16px;
        vertical-align: middle;
        font-weight: bold;
    }
}

.page-sizes span {
    display: inline-block;
    width: 90px;
}

.page-sizes .page-sizes-menu {
    display: inline-block;
    width: 100%;
}

.page-sizes::v-deep .vs__dropdown-toggle {
    height: 40px;
    border-radius: 20px;
}

.page-sizes::v-deep .vs__clear {
    display: none !important;
}

.pagination-bar {
    margin-top: 30px;
}

.first-last {
    border: 0;
    background: rgba(57, 176, 222, 0.1);
    border-radius: 20px;
    width: calc(25% - 10px);
    height: 40px;
    cursor: pointer;
    float: left;
}

.first {
    @extend .first-last;
    margin-right: 20px;
}

.last {
    @extend .first-last;
    margin-left: 20px;
}

.page-numbers {
    margin: 0;
    padding: 0;
    background: rgba(57, 176, 222, 0.1);
    float: left;
    border-radius: 20px;
    width: calc(50% - 20px);
}

.page-item {
    display: inline-block;

    a {
        width: 100%;
    }
}

.page-link {
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    display: block;
}

.page-number {
    display: none;
}

.previous-next {
    width: 48%;
}

.previous {
    @extend .previous-next;
    border-radius: 20px;
}

.next {
    @extend .previous-next;
    border-radius: 20px;
}

.page-item a {
    color: #000000;
}

.active {
    border-radius: 50%;
    background: #4492E7;
}

.active a {
    color: #ffffff;
}

.disabled {
    background: #f5f5f5;
}

.ag-theme-alpine {
    width: 100%;
    max-height: calc(100vh - 275px);
}

.ag-theme-alpine::v-deep .ag-value-change-value-highlight {
    background: #DEF5E3 !important;
}

.ag-theme-alpine::v-deep .ag-cell-data-changed {
    background: #DEF5E3 !important;
}

.ag-theme-alpine::v-deep .ag-header {
    background-color: #f0f8fd;
    border-bottom-color: $border-color;
}

.ag-theme-alpine::v-deep .ag-root-wrapper {
    border-color: $border-color;
}

.ag-theme-alpine::v-deep .ag-side-bar-left,
.ag-theme-alpine::v-deep .ag-side-bar-right {
    border-color: $border-color;
    background-color: #e3f4ff;
}

.ag-theme-alpine::v-deep .ag-row {
    border-color: $border-color;
}

.ag-theme-alpine::v-deep .ag-row:nth-child(odd) {
    background: #ffffff;
}

.ag-theme-alpine::v-deep .ag-row:nth-child(even) {
    background: #f9fcfe;
}

.ag-theme-alpine::v-deep .ag-paging-panel {
    border-top-color: $border-color;
}

.ag-theme-alpine::v-deep .ag-row-hover {
    background: #f0f8fdde !important;
}

.ag-theme-alpine::v-deep .ag-cell {
    line-height: 56px;
}

.ag-theme-alpine::v-deep .ag-cell-wrapper > *:not(.ag-cell-value):not(.ag-group-value) {
    height: 56px;
}

.ag-theme-alpine::v-deep .ag-header-cell-text {
    font-size: 16px;
    font-weight: 600;
}

.ag-theme-alpine::v-deep .ag-overlay-loading-center {
    border: none;
    border-color: none;
    background: transparent;
    box-shadow: none;
    padding: 6px;
    outline:none;
    font-size:14px;
    color:#707070;
    font-weight:500;
}

// medium version
@media (min-width: 768px) {
    .ag-theme-alpine {
        max-height: calc(100vh - 220px);
    }
    .links {
        width: calc(60% - 10px);
        float: right;
        margin: 21px 0 0 0;
    }
    .page-sizes {
        width: calc(40% - 10px);
        float: left;
    }
}

// large version
@media (min-width: 1024px) {
    .links {
        width: auto;
        max-width: 600px;
        margin-left: 30px
    }
    .page-sizes {
        width: calc(20% - 10px);
    }
    .first-last {
        width: 40px;
    }
    .page-number {
        display: inline-block;
        width: 40px;
    }
    .previous-next {
        width: 40px;
    }
    .page-numbers {
        width: auto;
        max-width: 480px;
    }
}

// extra large version
@media (min-width: 1280px) {
    .pagination-bar {
        width: auto;
        max-width: 805px !important;
        float: right;
    }
    .page-sizes {
        width: 175px;
    }
}

@media (max-width: 576px) {
    .ag-theme-alpine::v-deep .ag-tool-panel-wrapper{
        width:200px !important;
    }
}
</style>
