(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{20:function(t,e,s){"use strict";var r=s(21),o=s.n(r),a=s(44),i=s.n(a),n=s(89),l=s.n(n),c={grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}},u={grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}},d=s(24),h={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},chartData:{},color:{type:String,default:"primary"},colorTo:{type:String},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1},hideChart:{type:Boolean,default:!1}},data:function(){return{chartOptions:null}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex(this.color)}}})}},computed:{themePrimaryColor:function(){return this.$store.state.Default.themePrimaryColor}},methods:{getHex:function(t){if(d.a.isColor(t)){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(t));return e=e.split(","),"#".concat(((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1))}return t},gradientToColor:function(t){var e={primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794"};return e[t]?e[t]:e.primary}},components:{VueApexCharts:l.a},created:function(){"area"===this.type?(this.chartOptions=i()({},c),this.chartOptions.theme={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}}):"line"===this.type&&(this.chartOptions=JSON.parse(o()(u)),this.chartOptions.fill.gradient.gradientToColors=[this.gradientToColor(this.colorTo||this.color)],this.chartOptions.colors=[this.getHex(this.color)])}},p=s(0),f=Object(p.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{staticClass:"overflow-hidden"},[s("div",{attrs:{slot:"no-body"},slot:"no-body"},[s("div",{staticClass:"p-6",class:{"flex justify-between flex-row-reverse items-center":t.iconRight,"text-center":!t.iconRight&&t.hideChart,"pb-0":!t.hideChart}},[s("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+t.color,{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-"+t.color+"),.15)"},attrs:{icon:t.icon}}),t._v(" "),s("div",{staticClass:"truncate"},[s("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),t._v(" "),s("span",[t._v(t._s(t.statisticTitle))])])],1),t._v(" "),t.hideChart?t._e():s("div",{staticClass:"line-area-chart"},[s("vue-apex-charts",{ref:"apexChart",attrs:{type:t.type,height:"100",width:"100%",options:t.chartOptions,series:t.chartData}})],1)])])}),[],!1,null,null,null);e.a=f.exports},451:function(t,e,s){"use strict";s.r(e);var r=s(3),o=s.n(r),a=s(2),i=s.n(a),n=s(4);var l,c,u={components:{StatisticsCardLine:s(20).a},data:function(){return{course:{lessons:[]}}},mounted:function(){this.loadCourse()},methods:{loadCourse:(l=i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.get("students/courses/".concat(this.$route.params.id));case 2:e=t.sent,this.course=e.data;case 4:case"end":return t.stop()}}),t,this)})),c=function(){var t=this,e=arguments;return new o.a((function(s,r){var a=l.apply(t,e);function i(t,e){try{var i=a[t](e),l=i.value}catch(t){return void r(t)}i.done?s(l):o.a.resolve(l).then(n,c)}function n(t){i("next",t)}function c(t){i("throw",t)}n()}))},function(){return c.apply(this,arguments)})}},d=s(0),h=Object(d.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{title:t.$t("student_course_profile.course")+" "+t.course.name}},[s("vs-tabs",{attrs:{alignment:"fixed"}},[s("vs-tab",{attrs:{label:t.$t("student_course_profile.info")}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.$t("student_course_profile.description"),statisticTitle:t.course.description}})],1)])]),t._v(" "),s("vs-tab",{attrs:{label:t.$t("student_course_profile.lessons")}},[s("vs-table",{attrs:{data:t.course.lessons},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data;return t._l(r,(function(e,r){return s("vs-tr",{key:r,attrs:{state:null}},[s("vs-td",{attrs:{data:e.label}},[t._v("\n                            "+t._s(e.label)+"\n                        ")]),t._v(" "),s("vs-td",{attrs:{data:e.id}},[s("router-link",{attrs:{to:{name:"student-lesson.profile",params:{id:e.id}}}},[t._v(t._s(t.$t("student_course_profile.view")))])],1)],1)}))}}])},[s("template",{slot:"thead"},[s("vs-th",[t._v(t._s(t.$t("student_course_profile.list.column_label")))]),t._v(" "),s("vs-th",[t._v(t._s(t.$t("student_course_profile.list.column_actions")))])],1)],2)],1)],1)],1)}),[],!1,null,"75faf5ec",null);e.default=h.exports}}]);