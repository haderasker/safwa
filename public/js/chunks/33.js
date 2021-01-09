(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{19:function(t,e,s){"use strict";var i=s(27),a=s.n(i),n=s(44),c=s.n(n),o=s(89),r=s.n(o),l={grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}},d={grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}},h=s(23),u={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},chartData:{},color:{type:String,default:"primary"},colorTo:{type:String},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1},hideChart:{type:Boolean,default:!1}},data:function(){return{chartOptions:null}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex(this.color)}}})}},computed:{themePrimaryColor:function(){return this.$store.state.Default.themePrimaryColor}},methods:{getHex:function(t){if(h.a.isColor(t)){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(t));return e=e.split(","),"#".concat(((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1))}return t},gradientToColor:function(t){var e={primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794"};return e[t]?e[t]:e.primary}},components:{VueApexCharts:r.a},created:function(){"area"===this.type?(this.chartOptions=c()({},l),this.chartOptions.theme={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}}):"line"===this.type&&(this.chartOptions=JSON.parse(a()(d)),this.chartOptions.fill.gradient.gradientToColors=[this.gradientToColor(this.colorTo||this.color)],this.chartOptions.colors=[this.getHex(this.color)])}},b=s(0),v=Object(b.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{staticClass:"overflow-hidden"},[s("div",{attrs:{slot:"no-body"},slot:"no-body"},[s("div",{staticClass:"p-6",class:{"flex justify-between flex-row-reverse items-center":t.iconRight,"text-center":!t.iconRight&&t.hideChart,"pb-0":!t.hideChart}},[s("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+t.color,{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-"+t.color+"),.15)"},attrs:{icon:t.icon}}),t._v(" "),s("div",{staticClass:"truncate"},[s("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),t._v(" "),s("span",[t._v(t._s(t.statisticTitle))])])],1),t._v(" "),t.hideChart?t._e():s("div",{staticClass:"line-area-chart"},[s("vue-apex-charts",{ref:"apexChart",attrs:{type:t.type,height:"100",width:"100%",options:t.chartOptions,series:t.chartData}})],1)])])}),[],!1,null,null,null);e.a=v.exports},411:function(t,e,s){"use strict";s.r(e);var i=s(19),a={components:{StatisticsCardLine:i.a},data:function(){return{totalStudents:100,totalGraduates:50,levelOneStudents:10,levelTwoStudents:10,levelThreeStudents:10,levelFourStudents:10,doctrineShafi:30,doctrineMaliki:30,doctrineHanafi:30,doctrineHanbali:30}}},n=s(0),c=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-1/2"},[s("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.totalStudents,statisticTitle:t.$t("dashboard.total_students")}})],1),t._v(" "),s("div",{staticClass:"vx-col w-1/2"},[s("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.totalGraduates,statisticTitle:t.$t("dashboard.total_graduates")}})],1)]),t._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-1/4"},[s("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.levelOneStudents,statisticTitle:t.$t("dashboard.level_one_students")}})],1),t._v(" "),s("div",{staticClass:"vx-col w-1/4"},[s("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.levelTwoStudents,statisticTitle:t.$t("dashboard.level_two_students")}})],1),t._v(" "),s("div",{staticClass:"vx-col w-1/4"},[s("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.levelThreeStudents,statisticTitle:t.$t("dashboard.level_three_students")}})],1),t._v(" "),s("div",{staticClass:"vx-col w-1/4"},[s("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.levelFourStudents,statisticTitle:t.$t("dashboard.level_four_students")}})],1)]),t._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-1/4"},[s("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.doctrineShafi,statisticTitle:t.$t("dashboard.doctrine_shafi")}})],1),t._v(" "),s("div",{staticClass:"vx-col w-1/4"},[s("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.doctrineMaliki,statisticTitle:t.$t("dashboard.doctrine_maliki")}})],1),t._v(" "),s("div",{staticClass:"vx-col w-1/4"},[s("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.doctrineHanafi,statisticTitle:t.$t("dashboard.doctrine_hanafi")}})],1),t._v(" "),s("div",{staticClass:"vx-col w-1/4"},[s("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.doctrineHanbali,statisticTitle:t.$t("dashboard.doctrine_hanbali")}})],1)])])}),[],!1,null,"e343de24",null).exports,o={components:{StatisticsCardLine:i.a},data:function(){return{subjects:[],lessons:[]}},mounted:function(){this.getStudentSubjects(),this.getStudentLessons()},methods:{getStudentSubjects:function(){this.subjects=[{name:"Subject one",percentage:50},{name:"Subject Two",percentage:30},{name:"Subject Three",percentage:70},{name:"Subject Four",percentage:60},{name:"Subject Five",percentage:40},{name:"Subject Six",percentage:90}]},getStudentLessons:function(){this.lessons=[{name:"Lesson One",subject:"Subject One"},{name:"Lesson Two",subject:"Subject Two"},{name:"Lesson Three",subject:"Subject Three"},{name:"Lesson Four",subject:"Subject Four"}]}}},r=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"vx-row"},this._l(this.lessons,(function(t){return e("div",{staticClass:"vx-col w-1/3"},[e("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"remove-red-eye",statistic:t.name,statisticTitle:t.subject}})],1)})),0),this._v(" "),e("div",{staticClass:"vx-row"},this._l(this.subjects,(function(t){return e("div",{staticClass:"vx-col w-1/3"},[e("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.percentage,statisticTitle:t.name}})],1)})),0)])}),[],!1,null,"2084cef0",null).exports,l={components:{StatisticsCardLine:i.a},data:function(){return{subjects:[]}},mounted:function(){this.getTeacherSubjects()},methods:{getTeacherSubjects:function(){this.subjects=[{name:"subject one",lessons:"15"},{name:"subject two",lessons:"20"},{name:"subject three",lessons:"25"},{name:"subject four",lessons:"30"}]}}},d={components:{Admin:c,Student:r,Teacher:Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vx-row"},this._l(this.subjects,(function(t){return e("div",{staticClass:"vx-col w-1/3"},[e("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.lessons,statisticTitle:t.name}})],1)})),0)}),[],!1,null,"d5fd3a42",null).exports}},h=Object(n.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.$hasRole("admin")?s("admin"):t._e(),t._v(" "),t.$hasRole("teacher")?s("teacher"):t._e(),t._v(" "),t.$hasRole("student")?s("student"):t._e()],1)}),[],!1,null,null,null);e.default=h.exports}}]);