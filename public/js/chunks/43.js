(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{484:function(t,n,e){"use strict";e.r(n);var a=e(13),r=e.n(a),o=e(6),u=e.n(o),c=e(8),i=e.n(c),s=e(11),f=e.n(s),l=e(2),p=e.n(l),h=e(0),m=e.n(h),d=e(55),v=e(4);function x(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},a=i()(e);"function"==typeof u.a&&(a=a.concat(u()(e).filter((function(t){return r()(e,t).enumerable})))),a.forEach((function(n){w(t,n,e[n])}))}return t}function w(t,n,e){return n in t?f()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var y,b,E={components:{Steps:d.a},data:function(){return{exam:{}}},mounted:function(){this.loadExam()},methods:{loadExam:(y=m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("exams/".concat(this.$route.params.id));case 2:n=t.sent,this.exam=x({},n.data,{type:{id:n.data.type,name:this.$t("exams.types.".concat(n.data.type))}});case 4:case"end":return t.stop()}}),t,this)})),b=function(){var t=this,n=arguments;return new p.a((function(e,a){var r=y.apply(t,n);function o(t,n){try{var o=r[t](n),i=o.value}catch(t){return void a(t)}o.done?e(i):p.a.resolve(i).then(u,c)}function u(t){o("next",t)}function c(t){o("throw",t)}u()}))},function(){return b.apply(this,arguments)})}},g=e(1),k=Object(g.a)(E,(function(){var t=this.$createElement;return(this._self._c||t)("steps",{attrs:{exam:this.exam}})}),[],!1,null,"226f0868",null);n.default=k.exports}}]);