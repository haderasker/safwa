(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{14:function(e,t,s){"use strict";var a={methods:{deleteModel:function(e,t){console.log({deletableId:e,deletableType:t})}}},r=s(0),l=Object(r.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.params.routeName?s("router-link",{attrs:{to:{name:e.params.routeName,params:{id:e.params.data.id}}}},[e._v(e._s(e.$t("general.edit")))]):e._e(),e._v(" "),e.params.courseRouteName?s("router-link",{attrs:{to:{name:e.params.courseRouteName,params:{id:e.params.data.id}}}},[e._v(e._s(e.$t("general.view")))]):e._e(),e._v(" "),e.params.lessonRouteName?s("router-link",{attrs:{to:{name:e.params.lessonRouteName,query:{course:e.params.data.id}}}},[e._v(e._s(e.$t("general.lessons")))]):e._e(),e._v(" "),e.params.deletableType?s("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.deleteModel(e.params.data.id,e.params.deletableType)}}},[e._v("\n        "+e._s(e.$t("general.delete"))+"\n    ")]):e._e()],1)}),[],!1,null,"c8130596",null);t.a=l.exports},437:function(e,t,s){"use strict";s.r(t);var a=s(11),r=s(6),l=Object(r.a)(Object(r.b)("students/courses")),n=s(14),o={components:{AgTable:a.a,tableActionColumnCell:n.a},data:function(){return{filters:!1,agFilters:{name:null},agOptions:{dataSource:l}}},computed:{agColumns:function(){var e=this;return[{headerName:this.$t("student_courses.list.column_name"),field:"name",minWidth:170,sortable:!0},{headerName:this.$t("student_courses.list.column_teacher"),field:"teacher.name",minWidth:170,sortable:!0},{headerName:this.$t("student_courses.list.column_lesson_num"),field:"lessons_count",minWidth:170,sortable:!0},{headerName:this.$t("student_courses.list.column_type"),minWidth:170,sortable:!0,valueGetter:function(t){return e.$t("general.course_type_".concat(t.data.pivot.type))}},{headerName:this.$t("student_courses.list.column_actions"),minWidth:170,cellRendererParams:{routeName:"student-course.profile"},cellRendererFramework:"tableActionColumnCell"}]}},methods:{showFilters:function(){this.filters=!this.filters}}},i=s(0),c=Object(i.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[s("div",{staticClass:"content-area__heading"},[s("h2",{staticClass:"mb-1"},[e._v(e._s(e.$t("student_courses.title")))])])]),e._v(" "),s("vx-card",{attrs:{title:e.$t("student_courses.all_courses")}},[s("template",{slot:"actions"},[s("vx-tooltip",{staticClass:"ml-auto md:block hidden cursor-pointer",attrs:{position:"right",text:e.$t("student_courses.filter_tooltip")}},[s("vs-button",{attrs:{icon:"icon-settings","icon-pack":"feather"},on:{click:e.showFilters}})],1)],1),e._v(" "),e.filters?s("div",{staticClass:"mb-5"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"hema"},model:{value:e.agFilters.name,callback:function(t){e.$set(e.agFilters,"name",t)},expression:"agFilters.name"}})],1),e._v(" "),s("div",{staticClass:"vx-col w-1/2"},[s("vs-button",{staticClass:"mr-3 mt-5"},[e._v(e._s(e.$t("student_courses.filter")))])],1)])]):e._e(),e._v(" "),s("ag-table",{ref:"agTable",attrs:{filters:e.agFilters,columns:e.agColumns,options:e.agOptions}})],2)],1)}),[],!1,null,"5d3448a9",null);t.default=c.exports}}]);