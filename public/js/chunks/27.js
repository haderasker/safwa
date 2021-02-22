(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{14:function(e,t,s){"use strict";var a={methods:{deleteModel:function(e,t){console.log({deletableId:e,deletableType:t})}}},l=s(0),r=Object(l.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.params.routeName?s("router-link",{attrs:{to:{name:e.params.routeName,params:{id:e.params.data.id}}}},[e._v(e._s(e.$t("general.edit")))]):e._e(),e._v(" "),e.params.courseRouteName?s("router-link",{attrs:{to:{name:e.params.courseRouteName,params:{id:e.params.data.id}}}},[e._v(e._s(e.$t("general.view")))]):e._e(),e._v(" "),e.params.lessonRouteName?s("router-link",{attrs:{to:{name:e.params.lessonRouteName,query:{course:e.params.data.id}}}},[e._v(e._s(e.$t("general.lessons")))]):e._e(),e._v(" "),e.params.deletableType?s("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.deleteModel(e.params.data.id,e.params.deletableType)}}},[e._v("\n        "+e._s(e.$t("general.delete"))+"\n    ")]):e._e()],1)}),[],!1,null,"c8130596",null);t.a=r.exports},432:function(e,t,s){"use strict";s.r(t);var a=s(11),l=s(6),r=Object(l.a)(Object(l.b)("courses")),o=s(14),i={components:{AgTable:a.a,tableActionColumnCell:o.a},data:function(){return{filters:!1,agFilters:{name:null},agOptions:{dataSource:r}}},computed:{agColumns:function(){var e=this,t=[{headerName:this.$t("courses.list.column_name"),field:"name",minWidth:170,sortable:!0},{headerName:this.$t("courses.list.column_lessons_number"),field:"lessons_count",minWidth:170,sortable:!0},{headerName:this.$t("courses.list.column_level"),minWidth:170,sortable:!0,valueGetter:function(t){return window._.get(t,"data.level_names",[]).map((function(t){return e.$t("levels."+t)})).join(", ")}},{headerName:this.$t("courses.list.column_students_success_number"),minWidth:170,sortable:!0},{headerName:this.$t("courses.list.column_students_failed_number"),minWidth:170,sortable:!0},{headerName:this.$t("courses.list.column_students_number"),minWidth:170,sortable:!0},{headerName:this.$t("courses.list.column_actions"),minWidth:170,sortable:!0,cellRendererParams:{routeName:this.$hasRole("admin")?"courses.edit":null,courseRouteName:this.$hasRole("teacher")?"teacher-course.profile":null,lessonRouteName:this.$hasRole("teacher")?"lessons.list":null},cellRendererFramework:"tableActionColumnCell"}];return this.$hasRole("admin")&&t.splice(1,0,{headerName:this.$t("courses.list.column_teacher"),minWidth:170,sortable:!0,valueGetter:function(e){return window._.get(e,"data.teacher.name")}}),t}},methods:{showFilters:function(){this.filters=!this.filters}}},n=s(0),c=Object(n.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[s("div",{staticClass:"content-area__heading"},[s("h2",{staticClass:"mb-1"},[e._v(e._s(e.$t("courses.title")))])]),e._v(" "),e.$hasRole("admin")?s("vx-tooltip",{staticClass:"ml-auto md:block hidden cursor-pointer",attrs:{position:"right",text:e.$t("courses.create_course_tooltip")}},[s("vs-button",{attrs:{size:"large",icon:"icon-settings","icon-pack":"feather",to:{name:"courses.create"}}})],1):e._e()],1),e._v(" "),s("vx-card",{attrs:{title:e.$t("courses.all_courses")}},[s("template",{slot:"actions"},[s("vx-tooltip",{staticClass:"ml-auto md:block hidden cursor-pointer",attrs:{position:"right",text:e.$t("courses.filter_tooltip")}},[s("vs-button",{attrs:{icon:"icon-settings","icon-pack":"feather"},on:{click:e.showFilters}})],1)],1),e._v(" "),e.filters?s("div",{staticClass:"mb-5"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"hema"},model:{value:e.agFilters.name,callback:function(t){e.$set(e.agFilters,"name",t)},expression:"agFilters.name"}})],1),e._v(" "),s("div",{staticClass:"vx-col w-1/2"},[s("vs-button",{staticClass:"mr-3 mt-5"},[e._v(e._s(e.$t("courses.filter")))])],1)])]):e._e(),e._v(" "),s("ag-table",{ref:"agTable",attrs:{filters:e.agFilters,columns:e.agColumns,options:e.agOptions}})],2)],1)}),[],!1,null,"05f8bf08",null);t.default=c.exports}}]);