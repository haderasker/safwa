(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{417:function(t,e,s){"use strict";s.r(e);var a=s(11),l=s(6),i=Object(l.a)(Object(l.b)("results")),n={components:{AgTable:a.a},data:function(){return{filters:!1,agFilters:{name:""},agOptions:{dataSource:i}}},computed:{agColumns:function(){return[{headerName:this.$t("results.list.column_student_name"),field:"name",minWidth:170,sortable:!0},{headerName:this.$t("results.list.column_student_email"),field:"name",minWidth:170,sortable:!0},{headerName:this.$t("results.list.column_exam_name"),field:"name",minWidth:170,sortable:!0},{headerName:this.$t("results.list.column_total_score"),field:"name",minWidth:170,sortable:!0},{headerName:this.$t("results.list.column_student_score"),field:"name",minWidth:170,sortable:!0},{headerName:this.$t("results.list.column_status"),field:"name",minWidth:170,sortable:!0},{headerName:this.$t("results.list.column_actions"),field:"name",minWidth:170,sortable:!0}]}},methods:{showFilters:function(){this.filters=!this.filters}}},r=s(0),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[s("div",{staticClass:"content-area__heading"},[s("h2",{staticClass:"mb-1"},[t._v(t._s(t.$t("results.title")))])])]),t._v(" "),s("vx-card",{attrs:{title:t.$t("results.all_results")}},[s("template",{slot:"actions"},[s("vx-tooltip",{staticClass:"ml-auto md:block hidden cursor-pointer",attrs:{position:"right",text:t.$t("results.filter_tooltip")}},[s("vs-button",{attrs:{icon:"icon-settings","icon-pack":"feather"},on:{click:t.showFilters}})],1)],1),t._v(" "),t.filters?s("div",{staticClass:"mb-5"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"hema"},model:{value:t.agFilters.name,callback:function(e){t.$set(t.agFilters,"name",e)},expression:"agFilters.name"}})],1),t._v(" "),s("div",{staticClass:"vx-col w-1/2"},[s("vs-button",{staticClass:"mr-3 mt-5"},[t._v(t._s(t.$t("results.filter")))])],1)])]):t._e(),t._v(" "),s("ag-table",{ref:"agTable",attrs:{filters:t.agFilters,columns:t.agColumns,options:t.agOptions}})],2)],1)}),[],!1,null,"569dad41",null);e.default=o.exports}}]);