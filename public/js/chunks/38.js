(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{436:function(t,a,e){"use strict";e.r(a);var s={components:{teacher:e(51).a},data:function(){return{teacherData:{}}}},c=e(0),r=Object(c.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("teacher",{attrs:{teacher:this.teacherData}})}),[],!1,null,"76626676",null);a.default=r.exports},51:function(t,a,e){"use strict";var s=e(3),c=e.n(s),r=e(2),i=e.n(r),n=e(4);var l,o,v={name:"teacher",props:["teacher"],data:function(){return{}},methods:{addTeacher:(l=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$route.params.id){t.next=5;break}return t.next=3,n.a.put("teachers/".concat(this.$route.params.id),this.teacher);case 3:t.next=8;break;case 5:return t.next=7,n.a.post("teachers",this.teacher);case 7:this.$router.push({name:"teachers.list"}).catch();case 8:case"end":return t.stop()}}),t,this)})),o=function(){var t=this,a=arguments;return new c.a((function(e,s){var r=l.apply(t,a);function i(t,a){try{var i=r[t](a),l=i.value}catch(t){return void s(t)}i.done?e(l):c.a.resolve(l).then(n,o)}function n(t){i("next",t)}function o(t){i("throw",t)}n()}))},function(){return o.apply(this,arguments)})}},d=e(0),u=Object(d.a)(v,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[e("div",{staticClass:"content-area__heading"},[e("h2",{staticClass:"mb-1"},[t._v("\n                "+t._s(t.$route.params.id?t.$t("teachers.edit_title")+t.teacher.name:t.$t("teachers.create_title"))+"\n            ")])])]),t._v(" "),e("vx-card",[e("h4",{staticClass:"mb-5"},[t._v("\n            "+t._s(t.$t("teachers.info"))+"\n        ")]),t._v(" "),e("div",{staticClass:"vx-row mb-6"},[e("div",{staticClass:"vx-col w-1/4"},[e("span",[t._v(t._s(t.$t("teachers.name")))])]),t._v(" "),e("div",{staticClass:"vx-col w-3/4"},[e("vs-input",{staticClass:"w-full",model:{value:t.teacher.name,callback:function(a){t.$set(t.teacher,"name",a)},expression:"teacher.name"}})],1)]),t._v(" "),e("div",{staticClass:"vx-row mb-6"},[e("div",{staticClass:"vx-col w-1/4"},[e("span",[t._v(t._s(t.$t("teachers.email")))])]),t._v(" "),e("div",{staticClass:"vx-col w-3/4"},[e("vs-input",{staticClass:"w-full",model:{value:t.teacher.email,callback:function(a){t.$set(t.teacher,"email",a)},expression:"teacher.email"}})],1)]),t._v(" "),e("div",{staticClass:"vx-row mb-6"},[e("div",{staticClass:"vx-col w-1/4"},[e("label",{attrs:{for:"add_lessons"}},[t._v(t._s(t.$t("teachers.add_lesson")))])]),t._v(" "),e("div",{staticClass:"vx-col w-3/4"},[e("vs-checkbox",{attrs:{id:"add_lessons"},model:{value:t.teacher.upload_lessons,callback:function(a){t.$set(t.teacher,"upload_lessons",a)},expression:"teacher.upload_lessons"}})],1)]),t._v(" "),e("div",{staticClass:"vx-row mb-6"},[e("div",{staticClass:"vx-col w-1/4"},[e("span",[t._v(t._s(t.$t("teachers.description")))])]),t._v(" "),e("div",{staticClass:"vx-col w-3/4"},[e("vs-textarea",{model:{value:t.teacher.about_me,callback:function(a){t.$set(t.teacher,"about_me",a)},expression:"teacher.about_me"}})],1)]),t._v(" "),e("div",{staticClass:"vx-row mb-6"},[e("div",{staticClass:"vx-col w-1/4"},[e("span",[t._v(t._s(t.$t("teachers.password")))])]),t._v(" "),e("div",{staticClass:"vx-col w-3/4"},[e("vs-input",{staticClass:"w-full",model:{value:t.teacher.password,callback:function(a){t.$set(t.teacher,"password",a)},expression:"teacher.password"}})],1)]),t._v(" "),e("div",{staticClass:"vx-row mb-6"},[e("div",{staticClass:"vx-col w-1/4"},[e("span",[t._v(t._s(t.$t("teachers.password_confirmation")))])]),t._v(" "),e("div",{staticClass:"vx-col w-3/4"},[e("vs-input",{staticClass:"w-full",model:{value:t.teacher.password_confirmation,callback:function(a){t.$set(t.teacher,"password_confirmation",a)},expression:"teacher.password_confirmation"}})],1)]),t._v(" "),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full"},[e("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:t.addTeacher}},[t._v("\n                    "+t._s(t.$route.params.id?t.$t("teachers.update"):t.$t("teachers.save"))+"\n                ")])],1)])])],1)}),[],!1,null,"56d81330",null);a.a=u.exports}}]);