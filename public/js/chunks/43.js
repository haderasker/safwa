(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{454:function(n,t,e){"use strict";e.r(t);var s=e(3),a=e.n(s),o=e(1),r=e.n(o),u=e(55),i=e(4);var c,l,p={components:{Steps:u.a},data:function(){return{lesson:{quiz:{questions:[]}}}},mounted:function(){this.loadLesson()},methods:{loadLesson:(c=r.a.mark((function n(){var t;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.get("lessons/".concat(this.$route.params.id));case 2:(t=n.sent).data.quiz||(t.data.quiz={questions:[]}),this.lesson=t.data;case 5:case"end":return n.stop()}}),n,this)})),l=function(){var n=this,t=arguments;return new a.a((function(e,s){var o=c.apply(n,t);function r(n,t){try{var r=o[n](t),c=r.value}catch(n){return void s(n)}r.done?e(c):a.a.resolve(c).then(u,i)}function u(n){r("next",n)}function i(n){r("throw",n)}u()}))},function(){return l.apply(this,arguments)})}},d=e(0),f=Object(d.a)(p,(function(){var n=this.$createElement;return(this._self._c||n)("steps",{attrs:{lesson:this.lesson}})}),[],!1,null,"41e94c66",null);t.default=f.exports}}]);