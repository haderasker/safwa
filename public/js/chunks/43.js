(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{458:function(t,e,s){"use strict";s.r(e);var n=s(55),o=s(22),a={components:{Steps:n.a},data:function(){return{lesson:{quiz:{questions:[]}}}},beforeMount:function(){var t=o.a.getters["Authentication/getRoles"],e=o.a.getters["Authentication/getProfile"];t.indexOf("teacher")>-1&&!e.upload_lessons&&this.$router.push({name:"dashboard"})}},r=s(0),i=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("steps",{attrs:{lesson:this.lesson}})}),[],!1,null,"60666348",null);e.default=i.exports}}]);