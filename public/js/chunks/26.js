(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{498:function(t,e,s){"use strict";s.r(e);var a=s(15),n=s(51),r=s(2),i=s.n(r),l=s(0),o=s.n(l),c=s(4);var u,d,m={methods:{downloadCertificate:(u=o.a.mark((function t(){var e,s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("students/".concat(this.params.data.id,"/certificate"),{responseType:"blob"});case 2:e=t.sent,s=window.URL.createObjectURL(new Blob([e.data])),(a=document.createElement("a")).href=s,a.setAttribute("download","certificate.jpg"),document.body.appendChild(a),a.click(),a.remove();case 10:case"end":return t.stop()}}),t,this)})),d=function(){var t=this,e=arguments;return new i.a((function(s,a){var n=u.apply(t,e);function r(t,e){try{var r=n[t](e),c=r.value}catch(t){return void a(t)}r.done?s(c):i.a.resolve(c).then(l,o)}function l(t){r("next",t)}function o(t){r("throw",t)}l()}))},function(){return d.apply(this,arguments)})}},h=s(1),_=Object(h.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("vs-button",{staticClass:"mr-4",attrs:{to:{name:"student-result.profile",params:{id:this.params.data.id}},color:"primary",type:"filled"}},[this._v("\n        "+this._s(this.$t("general.score_details"))+"\n    ")]),this._v(" "),e("vs-button",{attrs:{color:"success",type:"filled"},on:{click:this.downloadCertificate}},[this._v("\n        Download\n    ")])],1)}),[],!1,null,"44a0449c",null).exports,f={components:{AgTable:a.a,tableActionColumnCell:_},data:function(){return{filters:!1,agFilters:{name:null},agOptions:{dataSource:n.a}}},computed:{agColumns:function(){var t=this;return[{headerName:this.$t("student_results.list.column_level"),minWidth:170,sortable:!0,valueGetter:function(e){return t.$t("levels.".concat(e.data.level.name))}},{headerName:this.$t("student_results.list.column_academic_year"),field:"academic_year.label",minWidth:170,sortable:!0},{headerName:this.$t("student_results.list.column_first_semester"),field:"semester_one_score",minWidth:170,sortable:!0},{headerName:this.$t("student_results.list.column_second_semester"),field:"semester_two_score",minWidth:170,sortable:!0},{headerName:this.$t("student_results.list.column_total"),minWidth:170,sortable:!0,valueGetter:function(t){return t.data.semester_one_score+t.data.semester_two_score}},{headerName:this.$t("student_results.list.column_actions"),minWidth:300,cellRendererFramework:"tableActionColumnCell"}]}},methods:{showFilters:function(){this.filters=!this.filters}}},v=Object(h.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[s("div",{staticClass:"content-area__heading"},[s("h2",{staticClass:"mb-1"},[t._v(t._s(t.$t("student_results.title")))])])]),t._v(" "),s("vx-card",{attrs:{title:t.$t("student_results.all_results")}},[s("template",{slot:"actions"},[s("vx-tooltip",{staticClass:"ml-auto md:block hidden cursor-pointer",attrs:{position:"right",text:t.$t("student_results.filter_tooltip")}},[s("vs-button",{attrs:{icon:"icon-filter","icon-pack":"feather"},on:{click:t.showFilters}})],1)],1),t._v(" "),t.filters?s("div",{staticClass:"mb-5"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"hema"},model:{value:t.agFilters.name,callback:function(e){t.$set(t.agFilters,"name",e)},expression:"agFilters.name"}})],1),t._v(" "),s("div",{staticClass:"vx-col w-1/2"},[s("vs-button",{staticClass:"mr-3 mt-5"},[t._v(t._s(t.$t("student_results.filter")))])],1)])]):t._e(),t._v(" "),s("ag-table",{ref:"agTable",attrs:{filters:t.agFilters,columns:t.agColumns,options:t.agOptions}})],2)],1)}),[],!1,null,"6bb75faf",null);e.default=v.exports},51:function(t,e,s){"use strict";var a=s(9);e.a=Object(a.a)(Object(a.b)("students/results/list"))}}]);