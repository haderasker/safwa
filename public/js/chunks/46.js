(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{508:function(e,t,s){"use strict";s.r(t);var n=s(56),o=s(21),a={components:{Steps:n.a},data:function(){return{lesson:{media:[],quiz:{questions:[]}}}},beforeMount:function(){var e=o.a.getters["Authentication/getRoles"],t=o.a.getters["Authentication/getProfile"];e.indexOf("teacher")>-1&&!t.upload_lessons&&this.$router.push({name:"dashboard"})}},i=s(1),r=Object(i.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("steps",{attrs:{lesson:this.lesson}})}),[],!1,null,"54a74996",null);t.default=r.exports}}]);