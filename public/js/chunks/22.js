(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{144:function(e,t,a){"use strict";a(75)},145:function(e,t,a){(e.exports=a(10)(!1)).push([e.i,".answer-li-radio[data-v-6290166e]{display:inline-block!important}[dir=ltr] .answer-li-radio[data-v-6290166e]{float:left;margin:8px 8px 0 0}[dir=rtl] .answer-li-radio[data-v-6290166e]{float:right;margin:8px 0 0 8px}.answer-li-remove[data-v-6290166e]{display:inline-block!important}[dir] .answer-li-remove[data-v-6290166e]{cursor:pointer!important;margin-top:6px}[dir=ltr] .answer-li-remove[data-v-6290166e]{float:right}[dir=rtl] .answer-li-remove[data-v-6290166e]{float:left}.add-new-data-sidebar[data-v-6290166e]  .vs-sidebar--background{z-index:52010}.add-new-data-sidebar[data-v-6290166e]  .vs-sidebar{z-index:52010;width:400px;max-width:90vw}[dir] .add-new-data-sidebar[data-v-6290166e]  .vs-sidebar .img-upload{margin-top:2rem}[dir] .add-new-data-sidebar[data-v-6290166e]  .vs-sidebar .img-upload .con-img-upload{padding:0}.add-new-data-sidebar[data-v-6290166e]  .vs-sidebar .img-upload .con-input-upload{width:100%}[dir] .add-new-data-sidebar[data-v-6290166e]  .vs-sidebar .img-upload .con-input-upload{margin:0}.scroll-area--data-list-add-new[data-v-6290166e]{height:calc(var(--vh, 1vh)*100 - 143px)}.scroll-area--data-list-add-new[data-v-6290166e]:not(.ps){overflow-y:auto}",""])},455:function(e,t,a){"use strict";a.r(t);var s=a(12),n=a.n(s),i=a(6),r=a.n(i),o=a(8),l=a.n(o),c=a(9),u=a.n(c),d=a(3),v=a.n(d),m=a(1),p=a.n(m),x=a(51),b=a(4);function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=l()(a);"function"==typeof r.a&&(s=s.concat(r()(a).filter((function(e){return n()(a,e).enumerable})))),s.forEach((function(t){h(e,t,a[t])}))}return e}function h(e,t,a){return t in e?u()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var _,w,g={components:{Steps:x.a},data:function(){return{exam:{}}},mounted:function(){this.loadExam()},methods:{loadExam:(_=p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("exams/".concat(this.$route.params.id));case 2:t=e.sent,this.exam=f({},t.data,{type:{id:t.data.type,name:this.$t("exams.types.".concat(t.data.type))}});case 4:case"end":return e.stop()}}),e,this)})),w=function(){var e=this,t=arguments;return new v.a((function(a,s){var n=_.apply(e,t);function i(e,t){try{var i=n[e](t),l=i.value}catch(e){return void s(e)}i.done?a(l):v.a.resolve(l).then(r,o)}function r(e){i("next",e)}function o(e){i("throw",e)}r()}))},function(){return w.apply(this,arguments)})}},C=a(0),$=Object(C.a)(g,(function(){var e=this.$createElement;return(this._self._c||e)("steps",{attrs:{exam:this.exam}})}),[],!1,null,"226f0868",null);t.default=$.exports},51:function(e,t,a){"use strict";var s=a(3),n=a.n(s),i=a(12),r=a.n(i),o=a(6),l=a.n(o),c=a(8),u=a.n(c),d=a(9),v=a.n(d),m=a(1),p=a.n(m),x=a(34);function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=u()(a);"function"==typeof l.a&&(s=s.concat(l()(a).filter((function(e){return r()(a,e).enumerable})))),s.forEach((function(t){f(e,t,a[t])}))}return e}function f(e,t,a){return t in e?v()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h,_,w={props:{open:{type:Boolean,required:!0},value:{type:Object,required:!0}},components:{VuePerfectScrollbar:a.n(x).a},data:function(){return{settings:{maxScrollbarLength:60,wheelSpeed:.6}}},computed:{question:{get:function(){return this.value},set:function(){this.$emit("input",this.value)}},isFormValid:function(){return!this.errors.any()},scrollbarTag:function(){return this.$store.getters.scrollbarTag}},methods:{submitData:(h=p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$validator.validateAll();case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:this.question.answers=this.question.answers.map((function(e){return b({},e,{is_correct:!1})})),this.question.answers[this.question.correctAnswer].is_correct=!0,this.closeSidebar(!0);case 7:case"end":return e.stop()}}),e,this)})),_=function(){var e=this,t=arguments;return new n.a((function(a,s){var i=h.apply(e,t);function r(e,t){try{var r=i[e](t),c=r.value}catch(e){return void s(e)}r.done?a(c):n.a.resolve(c).then(o,l)}function o(e){r("next",e)}function l(e){r("throw",e)}o()}))},function(){return _.apply(this,arguments)}),cancel:function(){this.closeSidebar(!1)},addAnswer:function(){5!==this.question.answers.length&&this.question.answers.push({label:"",is_correct:!1})},removeAnswer:function(e){this.question.answers.length<3||this.question.answers.splice(e,1)},closeSidebar:function(e){this.$emit("close",e)}}},g=(a(144),a(0)),C=Object(g.a)(w,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vs-sidebar",{staticClass:"add-new-data-sidebar items-no-padding",attrs:{"click-not-close":"","position-right":"",parent:"body","default-index":"1",color:"primary",spacer:""},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[a("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[a("h4",[e._v("\n            "+e._s(e.$t("exams.add_new_q_title"))+"\n        ")])]),e._v(" "),a("vs-divider",{staticClass:"mb-0"}),e._v(" "),a(e.scrollbarTag,{key:e.$vs.rtl,tag:"component",staticClass:"scroll-area--data-list-add-new",attrs:{settings:e.settings}},[a("div",{staticClass:"p-6"},[a("h4",[e._v(e._s(e.$t("exams.questions")))]),e._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mt-5 w-full",attrs:{label:e.$t("exams.new_q_label"),name:"item-label"},model:{value:e.question.label,callback:function(t){e.$set(e.question,"label",t)},expression:"question.label"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("item-label"),expression:"errors.has('item-label')"}],staticClass:"text-danger text-sm"},[e._v("\n                "+e._s(e.errors.first("item-label"))+"\n            ")]),e._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min_value:1",expression:"'required|min_value:1'"}],staticClass:"mt-5 w-full",attrs:{type:"number",label:e.$t("exams.new_q_score"),name:"item-score"},model:{value:e.question.score,callback:function(t){e.$set(e.question,"score",t)},expression:"question.score"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("item-score"),expression:"errors.has('item-score')"}],staticClass:"text-danger text-sm"},[e._v("\n                "+e._s(e.errors.first("item-score"))+"\n            ")]),e._v(" "),a("vs-divider"),e._v(" "),a("h4",{staticClass:"mt-5 mb-5"},[e._v(e._s(e.$t("exams.answers")))]),e._v(" "),a("ul",{staticClass:"mb-5"},e._l(e.question.answers,(function(t,s){return a("li",{staticClass:"mb-5"},[a("vs-radio",{staticClass:"answer-li-radio",attrs:{"vs-value":s},model:{value:e.question.correctAnswer,callback:function(t){e.$set(e.question,"correctAnswer",t)},expression:"question.correctAnswer"}}),e._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"inline-block",staticStyle:{width:"calc(100% - 55px)"},attrs:{name:"item-answer-"+s},model:{value:t.label,callback:function(a){e.$set(t,"label",a)},expression:"item.label"}}),e._v(" "),a("feather-icon",{staticClass:"answer-li-remove",attrs:{icon:"XIcon"},on:{click:function(t){return t.stopPropagation(),e.removeAnswer(s)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("item-answer-"+s),expression:"errors.has(`item-answer-${index}`)"}],staticClass:"text-danger text-sm"},[e._v("\n                        "+e._s(e.errors.first("item-answer-"+s))+"\n                    ")])],1)})),0),e._v(" "),a("div",[a("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:e.addAnswer}},[e._v("\n                    "+e._s(e.$t("exams.add_answer"))+"\n                ")])],1)],1)]),e._v(" "),a("div",{staticClass:"flex flex-wrap items-center p-6",attrs:{slot:"footer"},slot:"footer"},[a("vs-button",{staticClass:"mr-6",attrs:{disabled:!e.isFormValid},on:{click:e.submitData}},[e._v("\n            "+e._s(e.$t("exams.save_q"))+"\n        ")]),e._v(" "),a("vs-button",{attrs:{type:"border",color:"danger"},on:{click:e.cancel}},[e._v("\n            "+e._s(e.$t("exams.cancel"))+"\n        ")])],1)],1)}),[],!1,null,"6290166e",null).exports,$=a(17),y=(a(39),a(103)),q=a(33),k=a.n(q),S=a(4),A=a(13);function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=u()(a);"function"==typeof l.a&&(s=s.concat(l()(a).filter((function(e){return r()(a,e).enumerable})))),s.forEach((function(t){D(e,t,a[t])}))}return e}function D(e,t,a){return t in e?v()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var E,Q={props:["exam"],components:{FormWizard:$.FormWizard,TabContent:$.TabContent,Datepicker:y.a,draggable:k.a,DataViewSidebar:C},data:function(){return{sidebarOpened:!1,deletedQuestions:[],question:{index:-1,label:"",score:0,correctAnswer:-1,answers:[{label:"",is_correct:!1},{label:"",is_correct:!1}]},dateFormat:"yyyy-MM-dd"}},mounted:function(){this.loadLevels(),this.loadCourses()},computed:O({},Object(A.c)({getCourses:"Courses/getCourses"}),{getLevels:function(){var e=this;return this.$store.getters["Levels/getLevels"].map((function(t){return{id:t.id,name:e.$t("levels.".concat(t.name))}}))},typesOptions:function(){return[{id:"default",name:this.$t("exams.types.default")},{id:"fail",name:this.$t("exams.types.fail")}]}}),methods:O({},Object(A.b)({loadLevels:"Levels/loadLevels",loadCourses:"Courses/loadCourses"}),{openSidebar:function(){this.sidebarOpened=!0},resetQuestion:function(){this.question={index:-1,label:"",score:0,correctAnswer:-1,answers:[{label:"",is_correct:!1},{label:"",is_correct:!1}]}},onSidebarClosed:function(e){e&&(this.question.index>-1?this.exam.questions[this.question.index]=this.question:this.exam.questions.push(this.question)),this.resetQuestion(),this.sidebarOpened=!1},createExam:(E=function(e){return function(){var t=this,a=arguments;return new n.a((function(s,i){var r=e.apply(t,a);function o(e,t){try{var a=r[e](t),o=a.value}catch(e){return void i(e)}a.done?s(o):n.a.resolve(o).then(l,c)}function l(e){o("next",e)}function c(e){o("throw",e)}l()}))}}(p.a.mark((function e(){var t,a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=this.$moment(this.exam.published_at)).locale("en"),(a=this.$moment(this.exam.ended_at)).locale("en"),s={published_at:t.format("YYYY-MM-DD"),ended_at:a.format("YYYY-MM-DD"),testable_type:"course",testable_id:window._.get(this,"exam.testable.id",null),duration:this.exam.duration,label:this.exam.label,level_id:window._.get(this,"exam.level.id",null),type:window._.get(this,"exam.type.id",null),questions:this.exam.questions.map((function(e,t){return{score:e.score,label:e.label,answers:e.answers,order:t+1,id:e.id||null}}))},!this.$route.params.id){e.next=10;break}return e.next=8,S.a.put("exams/".concat(this.$route.params.id),{exam:s,deletedQuestions:this.deletedQuestions});case 8:e.next=13;break;case 10:return e.next=12,S.a.post("exams",{exam:s});case 12:this.$router.push({name:"exams.list"}).catch();case 13:case"end":return e.stop()}}),e,this)}))),function(){return E.apply(this,arguments)}),validateStep:function(e,t){},editQuestion:function(e,t){var a=t.answers.findIndex((function(e){return!!e.is_correct}));this.question=O({},t,{correctAnswer:a,index:e}),this.openSidebar()},removeQuestion:function(e,t){t.id&&this.deletedQuestions.push(t.id),this.exam.questions.splice(e,1)}})},L=Object(g.a)(Q,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("data-view-sidebar",{attrs:{open:e.sidebarOpened},on:{close:e.onSidebarClosed},model:{value:e.question,callback:function(t){e.question=t},expression:"question"}}),e._v(" "),a("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[a("div",{staticClass:"content-area__heading"},[a("h2",{staticClass:"mb-1"},[e._v(e._s(e.$route.params.id?e.$t("exams.edit_exam_title")+e.exam.label:e.$t("exams.create_exam_title")))])])]),e._v(" "),a("vx-card",[a("form-wizard",{attrs:{startIndex:0,color:"rgba(var(--vs-primary), 1)",errorColor:"rgba(var(--vs-danger), 1)",title:null,subtitle:null,finishButtonText:e.$route.params.id?e.$t("exams.edit"):e.$t("exams.create"),nextButtonText:e.$t("exams.next"),backButtonText:e.$t("exams.back")},on:{"on-complete":e.createExam,"on-change":e.validateStep}},[a("tab-content",{staticClass:"mb-5",attrs:{lazy:!0,title:e.$t("exams.step1.title")}},[a("vs-divider"),e._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[e._v(e._s(e.$t("exams.label")))])]),e._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("vs-input",{staticClass:"w-full",model:{value:e.exam.label,callback:function(t){e.$set(e.exam,"label",t)},expression:"exam.label"}})],1)]),e._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[e._v(e._s(e.$t("exams.select_subject")))])]),e._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("v-select",{attrs:{label:"name",options:e.getCourses},model:{value:e.exam.testable,callback:function(t){e.$set(e.exam,"testable",t)},expression:"exam.testable"}})],1)]),e._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[e._v(e._s(e.$t("exams.select_level")))])]),e._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("v-select",{attrs:{label:"name",options:e.getLevels},model:{value:e.exam.level,callback:function(t){e.$set(e.exam,"level",t)},expression:"exam.level"}})],1)]),e._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[e._v(e._s(e.$t("exams.exam_type")))])]),e._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("v-select",{attrs:{label:"name",options:e.typesOptions},model:{value:e.exam.type,callback:function(t){e.$set(e.exam,"type",t)},expression:"exam.type"}})],1)]),e._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[e._v(e._s(e.$t("exams.exam_start_date")))])]),e._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("datepicker",{attrs:{format:e.dateFormat,placeholder:"Select Date"},model:{value:e.exam.published_at,callback:function(t){e.$set(e.exam,"published_at",t)},expression:"exam.published_at"}})],1)]),e._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[e._v(e._s(e.$t("exams.exam_end_date")))])]),e._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("datepicker",{attrs:{format:e.dateFormat,placeholder:"Select Date"},model:{value:e.exam.ended_at,callback:function(t){e.$set(e.exam,"ended_at",t)},expression:"exam.ended_at"}})],1)]),e._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[e._v(e._s(e.$t("exams.exam_duration")))])]),e._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("vs-input",{staticClass:"w-full",attrs:{type:"number"},model:{value:e.exam.duration,callback:function(t){e.$set(e.exam,"duration",t)},expression:"exam.duration"}})],1)])],1),e._v(" "),a("tab-content",{staticClass:"mb-5",attrs:{lazy:!0,title:e.$t("exams.step2.title")}},[a("vs-divider"),e._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-full"},[a("vs-button",{attrs:{color:"primary",type:"filled",size:"small"},on:{click:e.openSidebar}},[e._v("\n                            "+e._s(e.$t("exams.add_q"))+"\n                        ")])],1)]),e._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("vs-list",[a("vs-list-header",{attrs:{title:e.$t("exams.q_list"),color:"primary"}}),e._v(" "),a("draggable",{attrs:{list:e.exam.questions}},[a("transition-group",e._l(e.exam.questions,(function(t,s){return a("vs-list-item",{key:"listItem-"+s,staticClass:"list-item",attrs:{title:t.label,subtitle:t.score.toString()}},[a("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(a){return e.editQuestion(s,t)}}},[e._v("\n                                        "+e._s(e.$t("exams.edit_q"))+"\n                                    ")]),e._v(" "),a("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(a){return e.removeQuestion(s,t)}}},[e._v("\n                                        "+e._s(e.$t("exams.remove_q"))+"\n                                    ")])],1)})),1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"5c8d9ec0",null);t.a=L.exports},75:function(e,t,a){var s=a(145);"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(11)(s,n);s.locals&&(e.exports=s.locals)}}]);