(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{201:function(t,e){t.exports="/images/forgot-password.png?f1d8d23e3a5361ef98e93de1c2e314c1"},459:function(t,e,s){"use strict";s.r(e);var a=s(3),l=s.n(a),o=s(1),n=s.n(o);var i,r,c={data:function(){return{email:""}},methods:{recover:(i=n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("Authentication/forgetPassword",{email:this.email});case 2:this.$router.push({name:"login"}).catch((function(){}));case 3:case"end":return t.stop()}}),t,this)})),r=function(){var t=this,e=arguments;return new l.a((function(s,a){var o=i.apply(t,e);function n(t,e){try{var n=o[t](e),i=n.value}catch(t){return void a(t)}n.done?s(i):l.a.resolve(i).then(r,c)}function r(t){n("next",t)}function c(t){n("throw",t)}r()}))},function(){return r.apply(this,arguments)})}},u=s(0),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-screen flex w-full bg-img"},[a("div",{staticClass:"vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center"},[a("vx-card",[a("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"},[a("img",{staticClass:"mx-auto",attrs:{src:s(201),alt:"login"}})]),t._v(" "),a("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg"},[a("div",{staticClass:"p-8"},[a("div",{staticClass:"vx-card__title mb-8"},[a("h4",{staticClass:"mb-4"},[t._v("Recover your password")]),t._v(" "),a("p",[t._v("Please enter your email address and we'll send you instructions on how to reset your password.")])]),t._v(" "),a("vs-input",{staticClass:"w-full mb-8",attrs:{type:"email","label-placeholder":"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("vs-button",{staticClass:"px-4 w-full md:w-auto",attrs:{type:"border",to:{name:"login"}}},[t._v("Back To Login")]),t._v(" "),a("vs-button",{staticClass:"float-right px-4 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0",on:{click:t.recover}},[t._v("Recover Password")])],1)])])])])],1)])}),[],!1,null,null,null);e.default=d.exports}}]);