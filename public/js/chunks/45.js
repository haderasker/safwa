(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{440:function(t,e,a){"use strict";a.r(e);var n=a(15),s=a(3),i=a.n(s),r=a(1),l=a.n(r),o=a(4);function m(t){return function(){var e=this,a=arguments;return new i.a((function(n,s){var r=t.apply(e,a);function l(t,e){try{var a=r[t](e),l=a.value}catch(t){return void s(t)}a.done?n(l):i.a.resolve(l).then(o,m)}function o(t){l("next",t)}function m(t){l("throw",t)}o()}))}}var u,c={methods:{startExam:(u=m(l.a.mark((function t(){var e=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$vs.dialog({type:"confirm",color:"warning",title:this.$t("general.start_exam_popup_title"),text:this.$t("general.start_exam_popup_body",{label:this.params.data.label,start_at_date:this.$moment(this.params.data.published_at).format("D-M-YYYY"),start_at_hour:this.$moment(this.params.data.published_at).format("h"),end_at_date:this.$moment(this.params.data.ended_at).format("D-M-YYYY"),end_at_hour:this.$moment(this.params.data.ended_at).format("h"),duration:this.params.data.duration}),accept:function(){var t=m(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("students/exams/".concat(e.params.data.id,"/start"));case 2:e.$router.push({name:"student-exam",params:{id:e.params.data.id}}).catch();case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()});case 1:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})}},d=a(0),h=Object(d.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{staticClass:"router-link-exact-active router-link-active",on:{click:function(e){return e.preventDefault(),t.startExam(e)}}},[t._v("\n        "+t._s(t.$t("general.start_exam"))+"\n    ")])])}),[],!1,null,"7a52c258",null).exports,p={},_=Object(d.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{attrs:{to:{name:this.params.routeName,params:{id:this.params.data.id}}}},[this._v(this._s(this.$t("general.exam_results")))])],1)}),[],!1,null,"770663a9",null).exports,f=a(7),x=Object(f.a)(Object(f.b)("students/exams/upcoming/list")),b=Object(f.a)(Object(f.b)("students/exams/finished/list")),g={components:{AgTable:n.a,examTableActionColumnCell:h,examProfileTableActionColumnCell:_},data:function(){return{agUpcomingFilters:{name:null},agUpcomingOptions:{dataSource:x},agFinishedFilters:{name:null},agFinishedOptions:{dataSource:b}}},computed:{agUpcomingColumns:function(){return[{headerName:this.$t("student_exams.upcoming_list.column_name"),field:"label",minWidth:170,sortable:!0},{headerName:this.$t("student_exams.upcoming_list.column_actions"),minWidth:170,cellRendererParams:{routeName:"student-course.profile"},cellRendererFramework:"examTableActionColumnCell"}]},agFinishedColumns:function(){return[{headerName:this.$t("student_exams.finished_list.column_name"),field:"label",minWidth:170,sortable:!0},{headerName:this.$t("student_exams.finished_list.column_actions"),minWidth:170,cellRendererParams:{routeName:"student-exam-profile"},cellRendererFramework:"examProfileTableActionColumnCell"}]}}},v=Object(d.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[a("div",{staticClass:"content-area__heading"},[a("h2",{staticClass:"mb-1"},[t._v(t._s(t.$t("student_exams.title")))])])]),t._v(" "),a("vx-card",{attrs:{title:t.$t("student_exams.all_exams")}},[a("vs-tabs",{attrs:{alignment:"fixed"}},[a("vs-tab",{attrs:{label:t.$t("student_exams.upcoming_exams")}},[a("ag-table",{ref:"agUpcomingTable",attrs:{filters:t.agUpcomingFilters,columns:t.agUpcomingColumns,options:t.agUpcomingOptions}})],1),t._v(" "),a("vs-tab",{attrs:{label:t.$t("student_exams.finished_exams")}},[a("ag-table",{ref:"agFinishedTable",attrs:{filters:t.agFinishedFilters,columns:t.agFinishedColumns,options:t.agFinishedOptions}})],1)],1)],1)],1)}),[],!1,null,"87bd9a50",null);e.default=v.exports}}]);