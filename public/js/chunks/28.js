(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{218:function(s,t){s.exports="/images/reset-password.png?965156dace52dc1b319d6363d3040ff2"},488:function(s,t,e){"use strict";e.r(t);var a=e(2),r=e.n(a),o=e(0),l=e.n(o);var n,i,c={data:function(){return{email:this.$route.query.email||"",password:"",confirmPassword:""}},methods:{reset:(n=l.a.mark((function s(){return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,this.$store.dispatch("Authentication/resetPassword",{token:this.$route.query.token||this.$route.query["amp;token"]||"",email:this.email,password:this.password,password_confirmation:this.confirmPassword});case 3:this.$router.push({name:"dashboard"}).catch(),s.next=9;break;case 6:s.prev=6,s.t0=s.catch(0),this.$vs.notify({title:this.$t("general.error_title"),text:422===s.t0.response.status?this.$t("reset_password.failed_auth_message"):s.t0.message,iconPack:"feather",icon:"icon-alert-circle",color:"danger"});case 9:case"end":return s.stop()}}),s,this,[[0,6]])})),i=function(){var s=this,t=arguments;return new r.a((function(e,a){var o=n.apply(s,t);function l(s,t){try{var l=o[s](t),n=l.value}catch(s){return void a(s)}l.done?e(n):r.a.resolve(n).then(i,c)}function i(s){l("next",s)}function c(s){l("throw",s)}i()}))},function(){return i.apply(this,arguments)})}},d=e(1),u=Object(d.a)(c,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"h-screen flex w-full bg-img"},[a("div",{staticClass:"vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center"},[a("vx-card",[a("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"},[a("img",{staticClass:"mx-auto",attrs:{src:e(218),alt:"login"}})]),s._v(" "),a("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"},[a("div",{staticClass:"p-8"},[a("div",{staticClass:"vx-card__title mb-8"},[a("h4",{staticClass:"mb-4"},[s._v("\n                                    "+s._s(s.$t("reset_password.title"))+"\n                                ")]),s._v(" "),a("p",[s._v("\n                                    "+s._s(s.$t("reset_password.sub_title"))+"\n                                ")])]),s._v(" "),a("vs-input",{staticClass:"w-full mb-6",attrs:{type:"email","label-placeholder":s.$t("reset_password.inputs.email")},model:{value:s.email,callback:function(t){s.email=t},expression:"email"}}),s._v(" "),a("vs-input",{staticClass:"w-full mb-6",attrs:{type:"password","label-placeholder":s.$t("reset_password.inputs.password")},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),s._v(" "),a("vs-input",{staticClass:"w-full mb-8",attrs:{type:"password","label-placeholder":s.$t("reset_password.inputs.confirm")},model:{value:s.confirmPassword,callback:function(t){s.confirmPassword=t},expression:"confirmPassword"}}),s._v(" "),a("div",{staticClass:"flex flex-wrap justify-between flex-col-reverse sm:flex-row"},[a("vs-button",{staticClass:"w-full sm:w-auto mb-8 sm:mb-auto mt-3 sm:mt-auto",attrs:{type:"border",to:{name:"login"}}},[s._v("\n                                    "+s._s(s.$t("reset_password.links.login"))+"\n                                ")]),s._v(" "),a("vs-button",{staticClass:"w-full sm:w-auto",on:{click:s.reset}},[s._v("\n                                    "+s._s(s.$t("reset_password.links.reset"))+"\n                                ")])],1)],1)])])])])],1)])}),[],!1,null,null,null);t.default=u.exports}}]);