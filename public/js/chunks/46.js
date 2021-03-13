(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{454:function(t,e,s){"use strict";s.r(e);var l=s(2),a=s.n(l),i=s(13),r=s.n(i),n=s(6),u=s.n(n),o=s(8),c=s.n(o),d=s(9),m=s.n(d),v=s(1),f=s.n(v),h=s(14),p=s(7),_=Object(p.a)(Object(p.b)("results/list")),x=s(12),b={},w=s(0),g=Object(w.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:function(e){return t.params.context.showEditResult(t.params.data.id)}}},[t._v("\n        "+t._s(t.$t("general.edit"))+"\n    ")])],1)}),[],!1,null,"73e1c3aa",null).exports,$=s(4);function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},l=c()(s);"function"==typeof u.a&&(l=l.concat(u()(s).filter((function(t){return r()(s,t).enumerable})))),l.forEach((function(e){R(t,e,s[e])}))}return t}function R(t,e,s){return e in t?m()(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var F,k,y={components:{AgTable:h.a,tableActionColumnCell:g},data:function(){return{filters:!1,showEditResultPopup:!1,extraResult:0,resultId:null,agFilters:{search:null,level:null,semester:null,exam_id:null},agOptions:{dataSource:_,context:this}}},mounted:function(){this.agFilters.exam_id=this.$route.query.exam_id||null,this.loadLevels(),this.loadSemesters()},computed:C({},Object(x.c)({getSemesters:"Semesters/getSemesters"}),{getLevels:function(){var t=this;return this.$store.getters["Levels/getLevels"].map((function(e){return{id:e.id,name:t.$t("levels.".concat(e.name))}}))},agColumns:function(){var t=this;return[{headerName:this.$t("results.list.column_student_name"),field:"student.name",minWidth:170},{headerName:this.$t("results.list.column_student_email"),field:"student.email",minWidth:170},{headerName:this.$t("results.list.column_exam_name"),field:"exam.label",minWidth:170},{headerName:this.$t("results.list.column_total_score"),field:"exam.score",minWidth:170},{headerName:this.$t("results.list.column_student_score"),field:"score",minWidth:170,valueGetter:function(t){if(t.data)return t.data.score+t.data.extra}},{headerName:this.$t("results.list.column_student_extra_score"),field:"extra",minWidth:170},{headerName:this.$t("results.list.column_status"),minWidth:170,valueGetter:function(e){if(e.data)return e.data.passed?t.$t("results.list.column_passed"):t.$t("results.list.column_failed")}},{headerName:this.$t("results.list.column_actions"),minWidth:170,cellRendererFramework:"tableActionColumnCell"}]}}),methods:C({},Object(x.b)({loadLevels:"Levels/loadLevels",loadSemesters:"Semesters/loadSemesters"}),{showFilters:function(){this.filters=!this.filters},applyFilters:function(){this.$refs.allResultsTable.applyFilters()},showEditResult:function(t){this.extraResult=0,this.resultId=t,this.showEditResultPopup=!0},hidePopup:function(){this.showEditResultPopup=!1,this.extraResult=0,this.resultId=null},saveResult:(F=f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resultId){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,$.a.post("results/extra/".concat(this.resultId),{extra:this.extraResult||0});case 4:this.hidePopup(),this.$refs.allResultsTable.refreshGrid();case 6:case"end":return t.stop()}}),t,this)})),k=function(){var t=this,e=arguments;return new a.a((function(s,l){var i=F.apply(t,e);function r(t,e){try{var r=i[t](e),o=r.value}catch(t){return void l(t)}r.done?s(o):a.a.resolve(o).then(n,u)}function n(t){r("next",t)}function u(t){r("throw",t)}n()}))},function(){return k.apply(this,arguments)})})},E=Object(w.a)(y,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[s("div",{staticClass:"content-area__heading"},[s("h2",{staticClass:"mb-1"},[t._v(t._s(t.$t("results.title")))])])]),t._v(" "),s("vx-card",{attrs:{title:t.$t("results.all_results")}},[s("template",{slot:"actions"},[s("vx-tooltip",{staticClass:"ml-auto md:block hidden cursor-pointer",attrs:{position:"right",text:t.$t("results.filter.tooltip")}},[s("vs-button",{attrs:{icon:"icon-settings","icon-pack":"feather"},on:{click:t.showFilters}})],1)],1),t._v(" "),t.filters?s("div",{staticClass:"mb-5"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full md:w-1/3 mb-5"},[s("div",{staticClass:"vx-col w-full"},[s("span",[t._v(t._s(t.$t("results.filter.name_email")))])]),t._v(" "),s("div",{staticClass:"vx-col w-full"},[s("vs-input",{staticClass:"w-full",model:{value:t.agFilters.search,callback:function(e){t.$set(t.agFilters,"search",e)},expression:"agFilters.search"}})],1)]),t._v(" "),s("div",{staticClass:"vx-col w-full md:w-1/3 mb-5"},[s("div",{staticClass:"vx-col w-full"},[s("span",[t._v(t._s(t.$t("results.filter.level")))])]),t._v(" "),s("div",{staticClass:"vx-col w-full"},[s("v-select",{staticClass:"w-full",attrs:{label:"name",reduce:function(t){return t.id},options:t.getLevels},model:{value:t.agFilters.level,callback:function(e){t.$set(t.agFilters,"level",e)},expression:"agFilters.level"}})],1)]),t._v(" "),s("div",{staticClass:"vx-col w-full md:w-1/3 mb-5"},[s("div",{staticClass:"vx-col w-full"},[s("span",[t._v(t._s(t.$t("results.filter.semester")))])]),t._v(" "),s("div",{staticClass:"vx-col w-full"},[s("v-select",{staticClass:"w-full",attrs:{label:"label",reduce:function(t){return t.id},options:t.getSemesters},model:{value:t.agFilters.semester,callback:function(e){t.$set(t.agFilters,"semester",e)},expression:"agFilters.semester"}})],1)]),t._v(" "),s("div",{staticClass:"vx-col w-1/2"},[s("vs-button",{staticClass:"mr-3 mt-5",on:{click:t.applyFilters}},[t._v("\n                        "+t._s(t.$t("results.filter.title"))+"\n                    ")])],1)])]):t._e(),t._v(" "),s("ag-table",{ref:"allResultsTable",attrs:{filters:t.agFilters,columns:t.agColumns,options:t.agOptions}})],2),t._v(" "),s("vs-prompt",{attrs:{title:t.$t("results.edit_result"),active:t.showEditResultPopup},on:{cancel:t.hidePopup,accept:t.saveResult,close:t.hidePopup,"update:active":function(e){t.showEditResultPopup=e}}},[s("div",[s("vs-input",{staticClass:"w-full",attrs:{type:"number"},model:{value:t.extraResult,callback:function(e){t.extraResult=e},expression:"extraResult"}})],1)])],1)}),[],!1,null,"1cf1bd51",null);e.default=E.exports}}]);