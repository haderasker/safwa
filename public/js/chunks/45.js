(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{439:function(t,s,e){"use strict";e.r(s);var a=e(11),l=e(6),i=Object(l.a)(Object(l.b)("results")),r={components:{AgTable:a.a},data:function(){return{filters:!1,agFilters:{name:""},agOptions:{dataSource:i}}},computed:{agColumns:function(){var t=this;return[{headerName:this.$t("results.list.column_student_name"),field:"student.name",minWidth:170,sortable:!0},{headerName:this.$t("results.list.column_student_email"),field:"student.email",minWidth:170,sortable:!0},{headerName:this.$t("results.list.column_exam_name"),field:"exam.label",minWidth:170,sortable:!0},{headerName:this.$t("results.list.column_total_score"),field:"exam.score",minWidth:170,sortable:!0},{headerName:this.$t("results.list.column_student_score"),field:"score",minWidth:170,sortable:!0},{headerName:this.$t("results.list.column_status"),minWidth:170,sortable:!0,valueGetter:function(s){return s.data.passed?t.$t("results.list.column_passed"):t.$t("results.list.column_failed")}},{headerName:this.$t("results.list.column_actions"),field:"name",minWidth:170,sortable:!0}]}},methods:{showFilters:function(){this.filters=!this.filters}}},n=e(0),o=Object(n.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[e("div",{staticClass:"content-area__heading"},[e("h2",{staticClass:"mb-1"},[t._v(t._s(t.$t("results.title")))])])]),t._v(" "),e("vx-card",{attrs:{title:t.$t("results.all_results")}},[e("template",{slot:"actions"},[e("vx-tooltip",{staticClass:"ml-auto md:block hidden cursor-pointer",attrs:{position:"right",text:t.$t("results.filter_tooltip")}},[e("vs-button",{attrs:{icon:"icon-settings","icon-pack":"feather"},on:{click:t.showFilters}})],1)],1),t._v(" "),t.filters?e("div",{staticClass:"mb-5"},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-1/2"},[e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"hema"},model:{value:t.agFilters.name,callback:function(s){t.$set(t.agFilters,"name",s)},expression:"agFilters.name"}})],1),t._v(" "),e("div",{staticClass:"vx-col w-1/2"},[e("vs-button",{staticClass:"mr-3 mt-5"},[t._v(t._s(t.$t("results.filter")))])],1)])]):t._e(),t._v(" "),e("ag-table",{ref:"agTable",attrs:{filters:t.agFilters,columns:t.agColumns,options:t.agOptions}})],2)],1)}),[],!1,null,"6abdb449",null);s.default=o.exports}}]);