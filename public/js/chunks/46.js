(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{434:function(e,t,a){"use strict";a.r(t);var n=a(11),s=a(3),i=a.n(s),r=a(1),l=a.n(r),o=a(4);var u,c,m={methods:{startExam:(u=l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("students/exams/".concat(this.params.data.id,"/start"));case 2:this.$router.push({name:"student-exam",params:{id:this.params.data.id}}).catch();case 3:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,t=arguments;return new i.a((function(a,n){var s=u.apply(e,t);function r(e,t){try{var r=s[e](t),u=r.value}catch(e){return void n(e)}r.done?a(u):i.a.resolve(u).then(l,o)}function l(e){r("next",e)}function o(e){r("throw",e)}l()}))},function(){return c.apply(this,arguments)})}},d=a(0),h=Object(d.a)(m,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a",{staticClass:"router-link-exact-active router-link-active",on:{click:function(t){return t.preventDefault(),e.startExam(t)}}},[e._v("\n        "+e._s(e.$t("general.start_exam"))+"\n    ")])])}),[],!1,null,"1a9fab70",null).exports,p={},f=Object(d.a)(p,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("router-link",{attrs:{to:{name:this.params.routeName,params:{id:this.params.data.id}}}},[this._v(this._s(this.$t("general.exam_results")))])],1)}),[],!1,null,"770663a9",null).exports,_=a(6),x=Object(_.a)(Object(_.b)("students/exams/upcoming")),b=Object(_.a)(Object(_.b)("students/exams/finished")),g={components:{AgTable:n.a,examTableActionColumnCell:h,examProfileTableActionColumnCell:f},data:function(){return{agUpcomingFilters:{name:null},agUpcomingOptions:{dataSource:x},agFinishedFilters:{name:null},agFinishedOptions:{dataSource:b}}},computed:{agUpcomingColumns:function(){return[{headerName:this.$t("student_exams.upcoming_list.column_name"),field:"label",minWidth:170,sortable:!0},{headerName:this.$t("student_exams.upcoming_list.column_actions"),minWidth:170,cellRendererParams:{routeName:"student-course.profile"},cellRendererFramework:"examTableActionColumnCell"}]},agFinishedColumns:function(){return[{headerName:this.$t("student_exams.finished_list.column_name"),field:"label",minWidth:170,sortable:!0},{headerName:this.$t("student_exams.finished_list.column_actions"),minWidth:170,cellRendererParams:{routeName:"student-exam-profile"},cellRendererFramework:"examProfileTableActionColumnCell"}]}}},v=Object(d.a)(g,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[a("div",{staticClass:"content-area__heading"},[a("h2",{staticClass:"mb-1"},[e._v(e._s(e.$t("student_exams.title")))])])]),e._v(" "),a("vx-card",{attrs:{title:e.$t("student_exams.all_exams")}},[a("vs-tabs",{attrs:{alignment:"fixed"}},[a("vs-tab",{attrs:{label:e.$t("student_exams.upcoming_exams")}},[a("ag-table",{ref:"agUpcomingTable",attrs:{filters:e.agUpcomingFilters,columns:e.agUpcomingColumns,options:e.agUpcomingOptions}})],1),e._v(" "),a("vs-tab",{attrs:{label:e.$t("student_exams.finished_exams")}},[a("ag-table",{ref:"agFinishedTable",attrs:{filters:e.agFinishedFilters,columns:e.agFinishedColumns,options:e.agFinishedOptions}})],1)],1)],1)],1)}),[],!1,null,"87bd9a50",null);t.default=v.exports}}]);