(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{202:function(s,t){s.exports="/images/reset-password.png?965156dace52dc1b319d6363d3040ff2"},460:function(s,t,a){"use strict";a.r(t);var e=a(3),o=a.n(e),l=a(1),r=a.n(l);var n,i,c={data:function(){return{email:this.$route.query.email||"",password:"",confirmPassword:""}},methods:{reset:(n=r.a.mark((function s(){return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.$store.dispatch("Authentication/resetPassword",{token:this.$route.query.token||this.$route.query["amp;token"]||"",email:this.email,password:this.password,password_confirmation:this.confirmPassword});case 2:this.$router.push({name:"dashboard"}).catch((function(){}));case 3:case"end":return s.stop()}}),s,this)})),i=function(){var s=this,t=arguments;return new o.a((function(a,e){var l=n.apply(s,t);function r(s,t){try{var r=l[s](t),n=r.value}catch(s){return void e(s)}r.done?a(n):o.a.resolve(n).then(i,c)}function i(s){r("next",s)}function c(s){r("throw",s)}i()}))},function(){return i.apply(this,arguments)})}},u=a(0),d=Object(u.a)(c,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"h-screen flex w-full bg-img"},[e("div",{staticClass:"vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center"},[e("vx-card",[e("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"},[e("img",{staticClass:"mx-auto",attrs:{src:a(202),alt:"login"}})]),s._v(" "),e("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"},[e("div",{staticClass:"p-8"},[e("div",{staticClass:"vx-card__title mb-8"},[e("h4",{staticClass:"mb-4"},[s._v("Reset Password")]),s._v(" "),e("p",[s._v("Please enter your new password.")])]),s._v(" "),e("vs-input",{staticClass:"w-full mb-6",attrs:{type:"email","label-placeholder":"Email"},model:{value:s.email,callback:function(t){s.email=t},expression:"email"}}),s._v(" "),e("vs-input",{staticClass:"w-full mb-6",attrs:{type:"password","label-placeholder":"Password"},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),s._v(" "),e("vs-input",{staticClass:"w-full mb-8",attrs:{type:"password","label-placeholder":"Confirm Password"},model:{value:s.confirmPassword,callback:function(t){s.confirmPassword=t},expression:"confirmPassword"}}),s._v(" "),e("div",{staticClass:"flex flex-wrap justify-between flex-col-reverse sm:flex-row"},[e("vs-button",{staticClass:"w-full sm:w-auto mb-8 sm:mb-auto mt-3 sm:mt-auto",attrs:{type:"border",to:{name:"login"}}},[s._v("Go Back To Login\n                                ")]),s._v(" "),e("vs-button",{staticClass:"w-full sm:w-auto",on:{click:s.reset}},[s._v("Reset")])],1)],1)])])])])],1)])}),[],!1,null,null,null);t.default=d.exports}}]);