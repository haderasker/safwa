(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{482:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s.n(r),a=s(0),c=s.n(a),i=s(57),u=s(4);var o,d,l={components:{Steps:i.a},data:function(){return{academicYear:{semesters:[{levels:[{course_ids:[]},{course_ids:[]},{course_ids:[]},{course_ids:[]}]},{levels:[{course_ids:[]},{course_ids:[]},{course_ids:[]},{course_ids:[]}]}]}}},mounted:function(){this.getYear()},methods:{getYear:(o=c.a.mark((function e(){var t,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("academic-years/".concat(this.$route.params.id));case 2:if(t=e.sent,s=t.data){e.next=6;break}return e.abrupt("return");case 6:s.semesters.forEach((function(e){e.levels.length||(e.levels=[{course_ids:[]},{course_ids:[]},{course_ids:[]},{course_ids:[]}])})),this.academicYear=s;case 8:case"end":return e.stop()}}),e,this)})),d=function(){var e=this,t=arguments;return new n.a((function(s,r){var a=o.apply(e,t);function c(e,t){try{var c=a[e](t),o=c.value}catch(e){return void r(e)}c.done?s(o):n.a.resolve(o).then(i,u)}function i(e){c("next",e)}function u(e){c("throw",e)}i()}))},function(){return d.apply(this,arguments)})}},f=s(1),p=Object(f.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("steps",{attrs:{year:this.academicYear}})}),[],!1,null,"8a0b6668",null);t.default=p.exports}}]);