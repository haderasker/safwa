(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{102:function(t,e,n){t.exports=n(175)},103:function(t,e,n){t.exports=n(178)},175:function(t,e,n){n(59),n(176),t.exports=n(16).Array.from},176:function(t,e,n){"use strict";var i=n(66),a=n(22),o=n(65),s=n(196),r=n(197),c=n(107),l=n(177),u=n(98);a(a.S+a.F*!n(198)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,a,f,p=o(t),v="function"==typeof this?this:Array,h=arguments.length,d=h>1?arguments[1]:void 0,g=void 0!==d,m=0,y=u(p);if(g&&(d=i(d,h>2?arguments[2]:void 0,2)),null==y||v==Array&&r(y))for(n=new v(e=c(p.length));e>m;m++)l(n,m,g?d(p[m],m):p[m]);else for(f=y.call(p),n=new v;!(a=f.next()).done;m++)l(n,m,g?s(f,d,[a.value,m],!0):a.value);return n.length=m,n}})},177:function(t,e,n){"use strict";var i=n(29),a=n(55);t.exports=function(t,e,n){e in t?i.f(t,e,a(0,n)):t[e]=n}},178:function(t,e,n){n(97),n(59),t.exports=n(179)},179:function(t,e,n){var i=n(108),a=n(24)("iterator"),o=n(60);t.exports=n(16).isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||o.hasOwnProperty(i(e))}},180:function(t,e,n){"use strict";n(92)},181:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,".notifications-page[data-v-65a3403e] .vs-textarea{height:200px}",""])},419:function(t,e,n){"use strict";n.r(e);var i=n(102),a=n.n(i),o=n(103),s=n.n(o),r=n(3),c=n.n(r),l=n(2),u=n.n(l),f=n(5);function p(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(s()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return a()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(t){return function(){var e=this,n=arguments;return new c.a((function(i,a){var o=t.apply(e,n);function s(t,e){try{var n=o[t](e),s=n.value}catch(t){return void a(t)}n.done?i(s):c.a.resolve(s).then(r,l)}function r(t){s("next",t)}function l(t){s("throw",t)}r()}))}}var h,d,g={mixins:[{methods:{successMessage:function(t){var e=t.title,n=t.message;this.$vs.dialog({color:"success",title:e,text:n,type:"alert"})},failMessage:function(t){var e=t.title,n=t.message;this.$vs.dialog({color:"danger",title:e,text:n,type:"alert"})}}}],data:function(){return{activePopup:!1,emailContent:"",categoryOption:null,categoryContentOption:null,categoryContentOptions:[]}},computed:{pageTitle:function(){return this.$t("notifications.title")},categoryOptions:function(){var t=[];return this.$hasRole("admin")&&t.push({id:"teachers",title:this.$t("notifications.teachers")}),t.concat([{id:"levels",title:this.$t("notifications.levels")},{id:"students",title:this.$t("notifications.students")}])}},watch:{categoryOption:function(t){this.getCategoryContent(t)}},mounted:function(){this.getCategoryContent({id:"teachers"})},methods:{getCategoryContent:(d=v(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:t.next=9;break;case 6:return t.abrupt("return",this.categoryContentOptions=[{id:-1,name:this.$t("notifications.all")},{id:1,name:"teacher 1"},{id:2,name:"teacher 2"}]);case 7:return t.abrupt("return",this.categoryContentOptions=[{id:-1,name:this.$t("notifications.all")},{id:1,name:"level 1"},{id:2,name:"level 2"}]);case 8:return t.abrupt("return",this.categoryContentOptions=[{id:-1,name:this.$t("notifications.all")},{id:1,name:"student 1"},{id:2,name:"student 2"}]);case 9:n=f.a.get("".concat(e.id)),this.categoryContentOptions=[{id:-1,name:this.$t("notifications.all")}].concat(p(n.data));case 11:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)}),sendEmail:(h=v(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$vs.loading(),t.prev=1,t.next=4;break;case 4:return t.next=6,f.a.post("notifications/email",{content:this.emailContent});case 6:this.$vs.loading.close(),this.successMessage({title:this.$t("notifications.success_title"),message:this.$t("notifications.success_message")}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),this.$vs.loading.close(),this.failMessage({title:this.$t("notifications.failed_title"),message:this.$t("notifications.failed_message")});case 14:case"end":return t.stop()}}),t,this,[[1,10]])}))),function(){return h.apply(this,arguments)})}},m=(n(180),n(0)),y=Object(m.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vx-card",{staticClass:"notifications-page",attrs:{title:t.pageTitle}},[n("div",{staticClass:"inline-block w-full mr-6 lg:w-1/3"},[n("h6",[t._v(t._s(t.$t("notifications.select_category")))]),t._v(" "),n("v-select",{attrs:{label:"title",options:t.categoryOptions},model:{value:t.categoryOption,callback:function(e){t.categoryOption=e},expression:"categoryOption"}})],1),t._v(" "),n("div",{staticClass:"inline-block w-full lg:w-1/3"},[n("h6",[t._v(t._s(t.$t("notifications.select_one")))]),t._v(" "),n("v-select",{attrs:{label:"name",options:t.categoryContentOptions},model:{value:t.categoryContentOption,callback:function(e){t.categoryContentOption=e},expression:"categoryContentOption"}})],1),t._v(" "),n("div",{staticClass:"w-full mt-6"},[n("h6",[t._v(t._s(t.$t("notifications.email_content")))]),t._v(" "),n("vs-textarea",{model:{value:t.emailContent,callback:function(e){t.emailContent=e},expression:"emailContent"}})],1),t._v(" "),n("vs-button",{staticClass:"mr-4",on:{click:t.sendEmail}},[t._v(t._s(t.$t("notifications.send")))])],1)],1)}),[],!1,null,"65a3403e",null);e.default=y.exports},92:function(t,e,n){var i=n(181);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(8)(i,a);i.locals&&(t.exports=i.locals)}}]);