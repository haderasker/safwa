(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{14:function(e,t,a){"use strict";var s={methods:{deleteModel:function(e,t){console.log({deletableId:e,deletableType:t})}}},r=a(0),l=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.params.routeName?a("router-link",{attrs:{to:{name:e.params.routeName,params:{id:e.params.data.id}}}},[e._v(e._s(e.$t("general.edit")))]):e._e(),e._v(" "),e.params.courseRouteName?a("router-link",{attrs:{to:{name:e.params.courseRouteName,params:{id:e.params.data.id}}}},[e._v(e._s(e.$t("general.view")))]):e._e(),e._v(" "),e.params.lessonRouteName?a("router-link",{attrs:{to:{name:e.params.lessonRouteName,query:{course:e.params.data.id}}}},[e._v(e._s(e.$t("general.lessons")))]):e._e(),e._v(" "),e.params.deletableType?a("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.deleteModel(e.params.data.id,e.params.deletableType)}}},[e._v("\n        "+e._s(e.$t("general.delete"))+"\n    ")]):e._e()],1)}),[],!1,null,"c8130596",null);t.a=l.exports},442:function(e,t,a){"use strict";a.r(t);var s=a(11),r=a(6),l=Object(r.a)(Object(r.b)("teachers")),i=a(14),o={components:{AgTable:s.a,tableActionColumnCell:i.a},data:function(){return{filters:!1,agFilters:{name:""},agOptions:{dataSource:l}}},computed:{agColumns:function(){var e=this;return[{headerName:this.$t("teachers.list.column_name"),field:"name",minWidth:170,sortable:!0},{headerName:this.$t("teachers.list.column_add_lessons"),minWidth:170,sortable:!0,valueGetter:function(t){return 1===t.data.upload_lessons?e.$t("teachers.allow_add_lesson"):e.$t("teachers.disallow_add_lesson")}},{headerName:this.$t("teachers.list.column_lessons_number"),field:"teacher_lessons_count",minWidth:170,sortable:!0},{headerName:this.$t("teachers.list.column_created_at"),field:"created_at",minWidth:170,sortable:!0,valueGetter:function(t){return"".concat(e.$moment(t.data.created_at).format("D-M-YYYY")," / ").concat(e.$moment(t.data.created_at).format("iD-iM-iYYYY"))}},{headerName:this.$t("teachers.list.column_actions"),minWidth:170,sortable:!1,cellRendererParams:{routeName:"teachers.edit"},cellRendererFramework:"tableActionColumnCell"}]}},methods:{showFilters:function(){this.filters=!this.filters}}},n=a(0),c=Object(n.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[a("div",{staticClass:"content-area__heading"},[a("h2",{staticClass:"mb-1"},[e._v(e._s(e.$t("teachers.title")))])]),e._v(" "),a("vx-tooltip",{staticClass:"ml-auto md:block hidden cursor-pointer",attrs:{position:"right",text:e.$t("teachers.create_teacher_tooltip")}},[a("vs-button",{attrs:{size:"large",icon:"icon-settings","icon-pack":"feather",to:{name:"teachers.create"}}})],1)],1),e._v(" "),a("vx-card",{attrs:{title:e.$t("teachers.all_teachers")}},[a("template",{slot:"actions"},[a("vx-tooltip",{staticClass:"ml-auto md:block hidden cursor-pointer",attrs:{position:"right",text:e.$t("teachers.filter_tooltip")}},[a("vs-button",{attrs:{icon:"icon-settings","icon-pack":"feather"},on:{click:e.showFilters}})],1)],1),e._v(" "),e.filters?a("div",{staticClass:"mb-5"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-1/2"},[a("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"hema"},model:{value:e.agFilters.name,callback:function(t){e.$set(e.agFilters,"name",t)},expression:"agFilters.name"}})],1),e._v(" "),a("div",{staticClass:"vx-col w-1/2"},[a("vs-button",{staticClass:"mr-3 mt-5"},[e._v(e._s(e.$t("teachers.filter")))])],1)])]):e._e(),e._v(" "),a("ag-table",{ref:"agTable",attrs:{filters:e.agFilters,columns:e.agColumns,options:e.agOptions}})],2)],1)}),[],!1,null,"057375b4",null);t.default=c.exports}}]);