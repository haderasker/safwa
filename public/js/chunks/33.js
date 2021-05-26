(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{510:function(e,a,t){"use strict";t.r(a);var s={components:{teacher:t(53).a},data:function(){return{teacherData:{}}}},r=t(1),c=Object(r.a)(s,(function(){var e=this.$createElement;return(this._self._c||e)("teacher",{attrs:{teacher:this.teacherData}})}),[],!1,null,"76626676",null);a.default=c.exports},53:function(e,a,t){"use strict";var s=t(2),r=t.n(s),c=t(0),i=t.n(c),n=t(4);var l,o,v={name:"teacher",props:["teacher"],data:function(){return{}},computed:{validateForm:function(){return!this.errors.any()}},methods:{addTeacher:(l=i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$validator.validate();case 2:if(!this.errors.any()){e.next=4;break}return e.abrupt("return");case 4:if(!this.$route.params.id){e.next=9;break}return e.next=7,n.a.put("teachers/".concat(this.$route.params.id),this.teacher);case 7:e.next=12;break;case 9:return e.next=11,n.a.post("teachers",this.teacher);case 11:this.$router.push({name:"teachers.list"}).catch();case 12:case"end":return e.stop()}}),e,this)})),o=function(){var e=this,a=arguments;return new r.a((function(t,s){var c=l.apply(e,a);function i(e,a){try{var i=c[e](a),l=i.value}catch(e){return void s(e)}i.done?t(l):r.a.resolve(l).then(n,o)}function n(e){i("next",e)}function o(e){i("throw",e)}n()}))},function(){return o.apply(this,arguments)})}},d=t(1),u=Object(d.a)(v,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[t("div",{staticClass:"content-area__heading"},[t("h2",{staticClass:"mb-1"},[e._v("\n                "+e._s(e.$route.params.id?e.$t("teachers.edit_title")+e.teacher.name:e.$t("teachers.create_title"))+"\n            ")])])]),e._v(" "),t("vx-card",[t("h4",{staticClass:"mb-5"},[e._v("\n            "+e._s(e.$t("teachers.info"))+"\n        ")]),e._v(" "),t("div",{staticClass:"vx-row mb-6"},[t("div",{staticClass:"vx-col w-1/4"},[t("span",[e._v(e._s(e.$t("teachers.name")))])]),e._v(" "),t("div",{staticClass:"vx-col w-3/4"},[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"w-full",attrs:{name:"name"},model:{value:e.teacher.name,callback:function(a){e.$set(e.teacher,"name",a)},expression:"teacher.name"}}),e._v(" "),t("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("name")))])],1)]),e._v(" "),t("div",{staticClass:"vx-row mb-6"},[t("div",{staticClass:"vx-col w-1/4"},[t("span",[e._v(e._s(e.$t("teachers.email")))])]),e._v(" "),t("div",{staticClass:"vx-col w-3/4"},[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full",attrs:{name:"email"},model:{value:e.teacher.email,callback:function(a){e.$set(e.teacher,"email",a)},expression:"teacher.email"}}),e._v(" "),t("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))])],1)]),e._v(" "),t("div",{staticClass:"vx-row mb-6"},[t("div",{staticClass:"vx-col w-1/4"},[t("label",{attrs:{for:"add_lessons"}},[e._v(e._s(e.$t("teachers.add_lesson")))])]),e._v(" "),t("div",{staticClass:"vx-col w-3/4"},[t("vs-checkbox",{attrs:{id:"add_lessons"},model:{value:e.teacher.upload_lessons,callback:function(a){e.$set(e.teacher,"upload_lessons",a)},expression:"teacher.upload_lessons"}})],1)]),e._v(" "),t("div",{staticClass:"vx-row mb-6"},[t("div",{staticClass:"vx-col w-1/4"},[t("span",[e._v(e._s(e.$t("teachers.description")))])]),e._v(" "),t("div",{staticClass:"vx-col w-3/4"},[t("vs-textarea",{model:{value:e.teacher.about_me,callback:function(a){e.$set(e.teacher,"about_me",a)},expression:"teacher.about_me"}})],1)]),e._v(" "),t("div",{staticClass:"vx-row mb-6"},[t("div",{staticClass:"vx-col w-1/4"},[t("span",[e._v(e._s(e.$t("teachers.password")))])]),e._v(" "),t("div",{staticClass:"vx-col w-3/4"},[t("vs-input",{staticClass:"w-full",model:{value:e.teacher.password,callback:function(a){e.$set(e.teacher,"password",a)},expression:"teacher.password"}})],1)]),e._v(" "),t("div",{staticClass:"vx-row mb-6"},[t("div",{staticClass:"vx-col w-1/4"},[t("span",[e._v(e._s(e.$t("teachers.password_confirmation")))])]),e._v(" "),t("div",{staticClass:"vx-col w-3/4"},[t("vs-input",{staticClass:"w-full",model:{value:e.teacher.password_confirmation,callback:function(a){e.$set(e.teacher,"password_confirmation",a)},expression:"teacher.password_confirmation"}})],1)]),e._v(" "),t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full"},[t("vs-button",{attrs:{color:"primary",type:"filled",disabled:!e.validateForm},on:{click:e.addTeacher}},[e._v("\n                    "+e._s(e.$route.params.id?e.$t("teachers.update"):e.$t("teachers.save"))+"\n                ")])],1)])])],1)}),[],!1,null,"20b1f35e",null);a.a=u.exports}}]);