(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{458:function(e,t,s){"use strict";s.r(t);var l=s(13),a=s.n(l),i=s(6),n=s.n(i),r=s(8),o=s.n(r),c=s(11),u=s.n(c),d=s(14),m=s(7),v=Object(m.a)(Object(m.b)("courses/list")),f={},h=s(1),_=Object(h.a)(f,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("vs-button",{staticClass:"mr-4",attrs:{to:{name:"courses.edit",params:{id:e.params.data.id}},color:"primary",type:"filled"}},[e._v("\n        "+e._s(e.$t("general.edit"))+"\n    ")]),e._v(" "),s("vs-button",{attrs:{to:{name:"lessons.list",query:{course_id:e.params.data.id}},color:"success",type:"filled"}},[e._v("\n        "+e._s(e.$t("general.lessons"))+"\n    ")])],1)}),[],!1,null,"829cd1f0",null).exports,p=s(12);function b(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},l=o()(s);"function"==typeof n.a&&(l=l.concat(n()(s).filter((function(e){return a()(s,e).enumerable})))),l.forEach((function(t){g(e,t,s[t])}))}return e}function g(e,t,s){return t in e?u()(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var w={components:{AgTable:d.a,tableActionColumnCell:_},data:function(){return{filters:!1,agFilters:{name:null,teacher:null,level:null},agOptions:{dataSource:v}}},mounted:function(){this.loadTeachers(),this.loadLevels()},computed:b({},Object(p.c)({getTeachers:"Teachers/getTeachers"}),{getLevels:function(){var e=this;return this.$store.getters["Levels/getLevels"].map((function(t){return{id:t.id,name:e.$t("levels.".concat(t.name))}}))},agColumns:function(){var e=this,t=[{headerName:this.$t("courses.list.column_name"),field:"name",minWidth:170,sortable:!0},{headerName:this.$t("courses.list.column_lessons_number"),field:"lessons_count",minWidth:170},{headerName:this.$t("courses.list.column_level"),minWidth:170,valueGetter:function(t){return window._.get(t,"data.level_names",[]).map((function(t){return e.$t("levels."+t)})).join(", ")}},{headerName:this.$t("courses.list.column_students_success_number"),field:"passed_students",minWidth:170},{headerName:this.$t("courses.list.column_students_failed_number"),field:"failed_students",minWidth:170},{headerName:this.$t("courses.list.column_students_number"),field:"students_count",minWidth:170},{headerName:this.$t("courses.list.column_actions"),minWidth:220,cellRendererFramework:"tableActionColumnCell"}];return this.$hasRole("admin")&&t.splice(1,0,{headerName:this.$t("courses.list.column_teacher"),minWidth:170,valueGetter:function(e){return window._.get(e,"data.teacher.name")}}),t}}),methods:b({},Object(p.b)({loadTeachers:"Teachers/loadTeachers",loadLevels:"Levels/loadLevels"}),{showFilters:function(){this.filters=!this.filters},applyFilters:function(){this.$refs.allCoursesTable.applyFilters()}})},C=Object(h.a)(w,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[s("div",{staticClass:"content-area__heading"},[s("h2",{staticClass:"mb-1"},[e._v(e._s(e.$t("courses.title")))])]),e._v(" "),e.$hasRole("admin")?s("vx-tooltip",{staticClass:"ml-auto md:block hidden cursor-pointer",attrs:{position:"right",text:e.$t("courses.create_course_tooltip")}},[s("vs-button",{attrs:{size:"large",icon:"icon-settings","icon-pack":"feather",to:{name:"courses.create"}}})],1):e._e()],1),e._v(" "),s("vx-card",{attrs:{title:e.$t("courses.all_courses")}},[s("template",{slot:"actions"},[s("vx-tooltip",{staticClass:"ml-auto md:block hidden cursor-pointer",attrs:{position:"right",text:e.$t("courses.filter_tooltip")}},[s("vs-button",{attrs:{icon:"icon-settings","icon-pack":"feather"},on:{click:e.showFilters}})],1)],1),e._v(" "),e.filters?s("div",{staticClass:"mb-5"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full md:w-1/3 mb-5"},[s("div",{staticClass:"vx-col w-full"},[s("span",[e._v(e._s(e.$t("courses.filter.name")))])]),e._v(" "),s("div",{staticClass:"vx-col w-full"},[s("vs-input",{staticClass:"w-full",model:{value:e.agFilters.name,callback:function(t){e.$set(e.agFilters,"name",t)},expression:"agFilters.name"}})],1)]),e._v(" "),s("div",{staticClass:"vx-col w-full md:w-1/3 mb-5"},[s("div",{staticClass:"vx-col w-full"},[s("span",[e._v(e._s(e.$t("courses.filter.teacher")))])]),e._v(" "),s("div",{staticClass:"vx-col w-full"},[s("v-select",{staticClass:"w-full",attrs:{label:"name",reduce:function(e){return e.id},options:e.getTeachers},model:{value:e.agFilters.teacher,callback:function(t){e.$set(e.agFilters,"teacher",t)},expression:"agFilters.teacher"}})],1)]),e._v(" "),s("div",{staticClass:"vx-col w-full md:w-1/3 mb-5"},[s("div",{staticClass:"vx-col w-full"},[s("span",[e._v(e._s(e.$t("courses.filter.level")))])]),e._v(" "),s("div",{staticClass:"vx-col w-full"},[s("v-select",{staticClass:"w-full",attrs:{label:"name",reduce:function(e){return e.id},options:e.getLevels},model:{value:e.agFilters.level,callback:function(t){e.$set(e.agFilters,"level",t)},expression:"agFilters.level"}})],1)]),e._v(" "),s("div",{staticClass:"vx-col w-1/3"},[s("vs-button",{staticClass:"mr-3 mt-5",on:{click:e.applyFilters}},[e._v(e._s(e.$t("courses.filter.title")))])],1)])]):e._e(),e._v(" "),s("ag-table",{ref:"allCoursesTable",attrs:{filters:e.agFilters,columns:e.agColumns,options:e.agOptions}})],2)],1)}),[],!1,null,"ef910dfc",null);t.default=C.exports}}]);