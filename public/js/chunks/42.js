(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{439:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),s=r(1),c=r.n(s),i=r(55),u=r(4);var o,d,p={components:{Steps:i.a},data:function(){return{academicYear:{semesters:[{levels:[{course_ids:[]},{course_ids:[]},{course_ids:[]},{course_ids:[]}]},{levels:[{course_ids:[]},{course_ids:[]},{course_ids:[]},{course_ids:[]}]}]}}},mounted:function(){this.getYear()},methods:{getYear:(o=c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("academic-years/".concat(this.$route.params.id));case 2:if(t=e.sent,r=t.data){e.next=6;break}return e.abrupt("return");case 6:this.academicYear=r;case 7:case"end":return e.stop()}}),e,this)})),d=function(){var e=this,t=arguments;return new a.a((function(r,n){var s=o.apply(e,t);function c(e,t){try{var c=s[e](t),o=c.value}catch(e){return void n(e)}c.done?r(o):a.a.resolve(o).then(i,u)}function i(e){c("next",e)}function u(e){c("throw",e)}i()}))},function(){return d.apply(this,arguments)})}},f=r(0),h=Object(f.a)(p,(function(){var e=this.$createElement;return(this._self._c||e)("steps",{attrs:{year:this.academicYear}})}),[],!1,null,"237dbadd",null);t.default=h.exports}}]);