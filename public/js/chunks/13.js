(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{128:function(t,n,e){e(61),e(129),t.exports=e(17).Array.from},129:function(t,n,e){"use strict";var i=e(69),o=e(24),s=e(68),a=e(149),c=e(150),r=e(110),l=e(130),u=e(81);o(o.S+o.F*!e(151)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,f,p=s(t),v="function"==typeof this?this:Array,h=arguments.length,d=h>1?arguments[1]:void 0,g=void 0!==d,y=0,m=u(p);if(g&&(d=i(d,h>2?arguments[2]:void 0,2)),null==m||v==Array&&c(m))for(e=new v(n=r(p.length));n>y;y++)l(e,y,g?d(p[y],y):p[y]);else for(f=m.call(p),e=new v;!(o=f.next()).done;y++)l(e,y,g?a(f,d,[o.value,y],!0):o.value);return e.length=y,e}})},130:function(t,n,e){"use strict";var i=e(29),o=e(57);t.exports=function(t,n,e){n in t?i.f(t,n,o(0,e)):t[n]=e}},131:function(t,n,e){e(80),e(61),t.exports=e(132)},132:function(t,n,e){var i=e(111),o=e(26)("iterator"),s=e(63);t.exports=e(17).isIterable=function(t){var n=Object(t);return void 0!==n[o]||"@@iterator"in n||s.hasOwnProperty(i(n))}},191:function(t,n,e){"use strict";e(97)},192:function(t,n,e){(t.exports=e(7)(!1)).push([t.i,".notifications-page[data-v-2aa35ae4] .vs-textarea{height:200px}",""])},448:function(t,n,e){"use strict";e.r(n);var i=e(46),o=e.n(i),s=e(47),a=e.n(s),c=e(3),r=e.n(c),l=e(1),u=e.n(l),f=e(4);function p(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(a()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(t){return function(){var n=this,e=arguments;return new r.a((function(i,o){var s=t.apply(n,e);function a(t,n){try{var e=s[t](n),a=e.value}catch(t){return void o(t)}e.done?i(a):r.a.resolve(a).then(c,l)}function c(t){a("next",t)}function l(t){a("throw",t)}c()}))}}var h,d,g={mixins:[{methods:{successMessage:function(t){var n=t.title,e=t.message;this.$vs.dialog({color:"success",title:n,text:e,type:"alert"})},failMessage:function(t){var n=t.title,e=t.message;this.$vs.dialog({color:"danger",title:n,text:e,type:"alert"})}}}],data:function(){return{activePopup:!1,content:"",title:"",categoryOption:null,categoryContentOption:null,categoryContentOptions:[],type:"notification"}},computed:{pageTitle:function(){return this.$t("notifications.title")},categoryOptions:function(){var t=[];return this.$hasRole("admin")&&t.push({id:"teachers",title:this.$t("notifications.teachers")}),t.concat([{id:"levels",title:this.$t("notifications.levels")},{id:"students",title:this.$t("notifications.students")}])}},watch:{categoryOption:function(t){this.getCategoryContent(t),this.categoryContentOption=null}},mounted:function(){this.getCategoryContent({id:"teachers"})},methods:{getCategoryContent:(d=v(u.a.mark((function t(n){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,f.a.get("".concat(n.id));case 4:e=t.sent,this.categoryContentOptions=[{id:-1,name:this.$t("notifications.all")}].concat(p(e.data.data));case 6:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)}),sendNotification:(h=v(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$vs.loading(),t.prev=1,t.next=4,f.a.post("notifications",{content:this.content,group:this.categoryOption.id,member:this.categoryContentOption.id,type:this.type,title:this.title});case 4:this.$vs.loading.close(),this.successMessage({title:this.$t("notifications.success_title"),message:this.$t("notifications.success_message")}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),this.$vs.loading.close(),this.failMessage({title:this.$t("notifications.failed_title"),message:this.$t("notifications.failed_message")});case 12:case"end":return t.stop()}}),t,this,[[1,8]])}))),function(){return h.apply(this,arguments)})}},y=(e(191),e(0)),m=Object(y.a)(g,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("vx-card",{staticClass:"notifications-page",attrs:{title:t.pageTitle}},[e("div",{staticClass:"inline-block w-full mr-6 lg:w-1/3"},[e("h6",[t._v(t._s(t.$t("notifications.select_category")))]),t._v(" "),e("v-select",{attrs:{label:"title",options:t.categoryOptions},model:{value:t.categoryOption,callback:function(n){t.categoryOption=n},expression:"categoryOption"}})],1),t._v(" "),e("div",{staticClass:"inline-block w-full lg:w-1/3"},[e("h6",[t._v(t._s(t.$t("notifications.select_one")))]),t._v(" "),e("v-select",{attrs:{label:"name",options:t.categoryContentOptions},model:{value:t.categoryContentOption,callback:function(n){t.categoryContentOption=n},expression:"categoryContentOption"}})],1),t._v(" "),e("div",{staticClass:"inline-block w-full lg:w-1/3"},[e("h6",[t._v(t._s(t.$t("notifications.type_title")))]),t._v(" "),e("div",{staticClass:"mt-4"},[e("vs-radio",{staticClass:"mr-4",attrs:{"vs-value":"notification"},model:{value:t.type,callback:function(n){t.type=n},expression:"type"}},[t._v("\n                    "+t._s(t.$t("notifications.type_notification"))+"\n                ")]),t._v(" "),e("vs-radio",{staticClass:"mr-4",attrs:{"vs-value":"email"},model:{value:t.type,callback:function(n){t.type=n},expression:"type"}},[t._v("\n                    "+t._s(t.$t("notifications.type_email"))+"\n                ")])],1)]),t._v(" "),e("div",{staticClass:"w-full mt-6"},[e("h6",[t._v(t._s(t.$t("notifications.notification_title")))]),t._v(" "),e("vs-input",{staticClass:"w-full",model:{value:t.title,callback:function(n){t.title=n},expression:"title"}})],1),t._v(" "),e("div",{staticClass:"w-full mt-6"},[e("h6",[t._v(t._s(t.$t("notifications.content")))]),t._v(" "),e("vs-textarea",{model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1),t._v(" "),e("vs-button",{staticClass:"mr-4",on:{click:t.sendNotification}},[t._v(t._s(t.$t("notifications.send")))])],1)],1)}),[],!1,null,"2aa35ae4",null);n.default=m.exports},46:function(t,n,e){t.exports=e(128)},47:function(t,n,e){t.exports=e(131)},97:function(t,n,e){var i=e(192);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(8)(i,o);i.locals&&(t.exports=i.locals)}}]);