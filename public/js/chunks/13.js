(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{143:function(t,e,a){"use strict";a(75)},144:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,".comment-form[data-v-6f2f0fea]{width:100%}[dir] .comment-form[data-v-6f2f0fea]{margin-top:1em}[dir] .comment-form .comment-textarea[data-v-6f2f0fea]{clear:both;margin:0 0 1em}",""])},145:function(t,e,a){"use strict";a(76)},146:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,".comment-wrapper[data-v-a292fa86]{line-height:1.2}[dir] .comment-wrapper[data-v-a292fa86]{margin:.5em 0 0;padding:.5em 0 0;border-style:none}[dir=ltr] .comment-wrapper[data-v-a292fa86]{background:0 0}[dir=rtl] .comment-wrapper[data-v-a292fa86]{background:100% 0}[dir=ltr] .comment-wrapper .comment-wrapper[data-v-a292fa86]{margin:-1.5em 0 -1em 1.25em;padding:3em 0 2em 2.25em;box-shadow:-1px 0 0 rgba(34,36,38,.15)}[dir=rtl] .comment-wrapper .comment-wrapper[data-v-a292fa86]{margin:-1.5em 1.25em -1em 0;padding:3em 2.25em 2em 0;box-shadow:1px 0 0 rgba(34,36,38,.15)}.comment-wrapper .comment-avatar[data-v-a292fa86]{display:block;width:2.5em;height:auto}[dir] .comment-wrapper .comment-avatar[data-v-a292fa86]{margin:.2em 0 0}[dir=ltr] .comment-wrapper .comment-avatar[data-v-a292fa86]{float:left}[dir=rtl] .comment-wrapper .comment-avatar[data-v-a292fa86]{float:right}.comment-wrapper .comment-avatar img[data-v-a292fa86]{display:block;width:100%;height:100%}[dir] .comment-wrapper .comment-avatar img[data-v-a292fa86]{margin:0 auto;border-radius:.25rem}.comment-wrapper .comment-content[data-v-a292fa86]{display:block}[dir=ltr] .comment-wrapper .comment-content[data-v-a292fa86]{margin-left:3.5em}[dir=rtl] .comment-wrapper .comment-content[data-v-a292fa86]{margin-right:3.5em}.comment-wrapper .comment-content .comment-author[data-v-a292fa86]{font-size:1em;color:rgba(0,0,0,.87);font-weight:700}.comment-wrapper .comment-content .comment-metadata[data-v-a292fa86]{display:inline-block;color:rgba(0,0,0,.4);font-size:.875em}[dir=ltr] .comment-wrapper .comment-content .comment-metadata[data-v-a292fa86]{margin-left:.5em}[dir=rtl] .comment-wrapper .comment-content .comment-metadata[data-v-a292fa86]{margin-right:.5em}.comment-wrapper .comment-content .comment-metadata *[data-v-a292fa86]{display:inline-block}[dir=ltr] .comment-wrapper .comment-content .comment-metadata *[data-v-a292fa86]{margin:0 .5em 0 0}[dir=rtl] .comment-wrapper .comment-content .comment-metadata *[data-v-a292fa86]{margin:0 0 0 .5em}.comment-wrapper .comment-content .comment-body[data-v-a292fa86]{font-size:1em;word-wrap:break-word;color:rgba(0,0,0,.87);line-height:1.3}[dir] .comment-wrapper .comment-content .comment-body[data-v-a292fa86]{margin:.25em 0 .5em}.comment-wrapper .comment-content .comment-actions[data-v-a292fa86]{font-size:.875em}.comment-wrapper .comment-content .comment-actions *[data-v-a292fa86]{display:inline-block;color:rgba(0,0,0,.4)}[dir] .comment-wrapper .comment-content .comment-actions *[data-v-a292fa86]{cursor:pointer}[dir=ltr] .comment-wrapper .comment-content .comment-actions *[data-v-a292fa86]{margin:0 .75em 0 0}[dir=rtl] .comment-wrapper .comment-content .comment-actions *[data-v-a292fa86]{margin:0 0 0 .75em}[dir=ltr] .comment-wrapper .comment-content .comment-actions .replay[data-v-a292fa86]{margin-right:0}[dir=rtl] .comment-wrapper .comment-content .comment-actions .replay[data-v-a292fa86]{margin-left:0}",""])},21:function(t,e,a){"use strict";var n=a(19),o=a.n(n),r=a(44),s=a.n(r),i=a(93),c=a.n(i),m={grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}},l={grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}},d=a(24),p={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},chartData:{},color:{type:String,default:"primary"},colorTo:{type:String},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1},hideChart:{type:Boolean,default:!1}},data:function(){return{chartOptions:null}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex(this.color)}}})}},computed:{themePrimaryColor:function(){return this.$store.state.Default.themePrimaryColor}},methods:{getHex:function(t){if(d.a.isColor(t)){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(t));return e=e.split(","),"#".concat(((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1))}return t},gradientToColor:function(t){var e={primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794"};return e[t]?e[t]:e.primary}},components:{VueApexCharts:c.a},created:function(){"area"===this.type?(this.chartOptions=s()({},m),this.chartOptions.theme={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}}):"line"===this.type&&(this.chartOptions=JSON.parse(o()(l)),this.chartOptions.fill.gradient.gradientToColors=[this.gradientToColor(this.colorTo||this.color)],this.chartOptions.colors=[this.getHex(this.color)])}},u=a(0),h=Object(u.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{staticClass:"overflow-hidden"},[a("div",{attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"p-6",class:{"flex justify-between flex-row-reverse items-center":t.iconRight,"text-center":!t.iconRight&&t.hideChart,"pb-0":!t.hideChart}},[a("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+t.color,{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-"+t.color+"),.15)"},attrs:{icon:t.icon}}),t._v(" "),a("div",{staticClass:"truncate"},[a("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),t._v(" "),a("span",[t._v(t._s(t.statisticTitle))])])],1),t._v(" "),t.hideChart?t._e():a("div",{staticClass:"line-area-chart"},[a("vue-apex-charts",{ref:"apexChart",attrs:{type:t.type,height:"100",width:"100%",options:t.chartOptions,series:t.chartData}})],1)])])}),[],!1,null,null,null);e.a=h.exports},460:function(t,e,a){"use strict";a.r(e);var n=a(3),o=a.n(n),r=a(1),s=a.n(r),i=a(4),c=a(21),m=a(49);function l(t){return function(){var e=this,a=arguments;return new o.a((function(n,r){var s=t.apply(e,a);function i(t,e){try{var a=s[t](e),i=a.value}catch(t){return void r(t)}a.done?n(i):o.a.resolve(i).then(c,m)}function c(t){i("next",t)}function m(t){i("throw",t)}c()}))}}var d,p,u={components:{StatisticsCardLine:c.a,CommentsSection:m.a},data:function(){return{commentableType:"lesson",lesson:{course:{},quiz:{}}}},mounted:function(){this.loadLesson()},methods:{loadLesson:(p=l(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("students/lessons/".concat(this.$route.params.id));case 2:(e=t.sent).data.quiz.totalScore=e.data.quiz.questions.reduce((function(t,e){return t+e.score}),0),this.lesson=e.data;case 5:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)}),startQuiz:(d=l(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.lesson.quiz.id,t.next=3,i.a.get("students/exams/".concat(e,"/start"));case 3:this.$router.push({name:"student-exam",params:{id:e}}).catch();case 4:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})}},h=a(0),f=Object(h.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[a("div",{staticClass:"content-area__heading"},[a("h2",{staticClass:"mb-1"},[t._v(t._s(t.$t("student_lesson_profile.lesson")+" "+t.lesson.label))])])]),t._v(" "),a("vx-card",{attrs:{title:null}},[a("vs-tabs",{attrs:{alignment:"fixed"}},[a("vs-tab",{attrs:{label:t.$t("student_lesson_profile.info")}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-1/2"},[a("router-link",{attrs:{to:{name:"student-course.profile",params:{id:t.lesson.course.id}}}},[a("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.$t("student_lesson_profile.course"),statisticTitle:t.lesson.course.name}})],1)],1),t._v(" "),a("div",{staticClass:"vx-col w-1/2"},[a("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:t.$t("student_lesson_profile.published_at"),statisticTitle:t._f("moment")(t.lesson.published_at,"dddd, YYYY MMMM Do h:mm a")}})],1)]),t._v(" "),a("h4",{staticClass:"mb-6"},[t._v(t._s(t.$t("student_lesson_profile.content")))]),t._v(" "),a("div",{staticClass:"vx-row"},[t.lesson.youtube?a("div",{staticClass:"vx-col w-1/3"},[a("a",{attrs:{href:t.lesson.youtube,target:"_blank"}},[a("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"YoutubeIcon",statistic:t.$t("student_lesson_profile.youtube")}})],1)]):t._e(),t._v(" "),t.lesson.soundcloud?a("div",{staticClass:"vx-col w-1/3"},[a("a",{attrs:{href:t.lesson.soundcloud,target:"_blank"}},[a("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"HeadphonesIcon",statistic:t.$t("student_lesson_profile.soundcloud")}})],1)]):t._e(),t._v(" "),t.lesson.pdf?a("div",{staticClass:"vx-col w-1/3"},[a("a",{attrs:{href:t.lesson.pdf,target:"_blank"}},[a("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"FileTextIcon",statistic:t.$t("student_lesson_profile.pdf")}})],1)]):t._e()]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-1/3"},[t.lesson.quiz.id&&t.lesson.quiz.student_exam&&!t.lesson.quiz.student_exam[0].passed?a("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:function(e){return e.preventDefault(),t.startQuiz(e)}}},[t._v("\n                            "+t._s(t.$t("student_lesson_profile.start_quiz"))+"\n                        ")]):t._e()],1),t._v(" "),a("div",{staticClass:"vx-col w-1/3"},[t._v("\n                        "+t._s(t.$t("student_lesson_profile.last_score"))+": "+t._s(t.lesson.quiz.student_exam?t.lesson.quiz.student_exam[0].score:0)+" / "+t._s(t.lesson.quiz.totalScore)+"\n                    ")])])]),t._v(" "),a("vs-tab",{attrs:{label:t.$t("student_lesson_profile.discussion")}},[a("comments-section",{attrs:{commentableId:t.$route.params.id,commentableType:t.commentableType}})],1)],1)],1)],1)}),[],!1,null,"278e8b64",null);e.default=f.exports},49:function(t,e,a){"use strict";var n=a(3),o=a.n(n),r=a(1),s=a.n(r),i=a(4);var c,m,l={props:{parentId:{required:!1,type:Number,default:0},commentableId:{required:!0,type:Number},commentableType:{required:!0,Type:String}},data:function(){return{body:""}},methods:{saveComment:(c=s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("comments/".concat(this.parentId),{body:this.body,commentable_id:this.commentableId,commentable_type:this.commentableType});case 3:e=t.sent,this.body="",this.$emit("saved",e.data),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,this,[[0,8]])})),m=function(){var t=this,e=arguments;return new o.a((function(a,n){var r=c.apply(t,e);function s(t,e){try{var s=r[t](e),c=s.value}catch(t){return void n(t)}s.done?a(c):o.a.resolve(c).then(i,m)}function i(t){s("next",t)}function m(t){s("throw",t)}i()}))},function(){return m.apply(this,arguments)})}},d=(a(143),a(0)),p=Object(d.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"comment-form"},[a("div",{staticClass:"comment-textarea"},[a("vs-textarea",{model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1),t._v(" "),a("div",{staticClass:"comment-replay-button"},[a("vs-button",{attrs:{"icon-pack":"feather",icon:"icon-home",color:"primary",type:"filled",size:"small"},on:{click:function(e){return t.saveComment()}}},[t._v("\n            "+t._s(t.$t("comments.add_reply"))+"\n        ")])],1)])}),[],!1,null,"6f2f0fea",null).exports,u=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"comment-avatar"},[e("img",{attrs:{src:a(73)}})])}];var h,f={name:"comment",props:["data","commentableId","commentableType"],components:{ReplayCommentForm:p},data:function(){return{showReplayForm:!1}},computed:{valueData:{get:function(){return this.data},set:function(t){this.$emit("replyAdded",t)}}},methods:{replySaved:function(t){var e=this.valueData.replies||[];e.unshift(t),this.valueData.replies=e},loadReplies:(h=function(t){return function(){var e=this,a=arguments;return new o.a((function(n,r){var s=t.apply(e,a);function i(t,e){try{var a=s[t](e),i=a.value}catch(t){return void r(t)}a.done?n(i):o.a.resolve(i).then(c,m)}function c(t){i("next",t)}function m(t){i("throw",t)}c()}))}}(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("comments/".concat(this.valueData.id));case 2:(e=t.sent).data.length||this.$set(this.valueData,"noReplies",!0),this.$set(this.valueData,"replies",e.data);case 5:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)})}};a(145);var v,b={props:["commentableId","commentableType"],components:{Comment:Object(d.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-wrapper"},[t._m(0),t._v(" "),a("div",{staticClass:"comment-content"},[a("a",{staticClass:"comment-author"},[t._v(t._s(t.valueData.author.name))]),t._v(" "),a("div",{staticClass:"comment-metadata"},[a("span",{staticClass:"date"},[t._v(t._s(t._f("moment")(t.valueData.created_at,"from","now")))])]),t._v(" "),a("div",{staticClass:"comment-body"},[t._v("\n            "+t._s(t.valueData.body)+"\n        ")]),t._v(" "),a("div",{staticClass:"comment-actions"},[a("a",{staticClass:"reply",on:{click:function(e){e.preventDefault(),t.showReplayForm=!t.showReplayForm}}},[t._v(t._s(t.$t("comments.reply")))]),t._v(" "),a("a",{staticClass:"more-replies",on:{click:t.loadReplies}},[t._v("\n                "+t._s(t.$t("comments.load_replies"))+" "+t._s(this.valueData.noReplies?t.$t("comments.no_replies"):"")+"\n            ")])]),t._v(" "),t.showReplayForm?a("replay-comment-form",{attrs:{parentId:t.valueData.id,commentableId:t.commentableId,commentableType:t.commentableType},on:{saved:t.replySaved}}):t._e()],1),t._v(" "),t._l(t.valueData.replies,(function(e){return t.valueData.replies?a("comment",{key:"comment-"+e.id,attrs:{commentableId:t.commentableId,commentableType:t.commentableType,data:e}}):t._e()}))],2)}),u,!1,null,"a292fa86",null).exports,ReplayCommentForm:p},data:function(){return{replayCommentableId:Number(this.$route.params.id),replayCommentableType:"lesson",comments:{},page:1,perPage:10}},mounted:function(){this.commentsList()},methods:{commentUpdated:function(t){var e=this.comments.data.findIndex((function(e){return e.id===t.id}));this.comments.data[e]=t},replyAdded:function(t){this.comments.data.unshift(t)},nextPage:function(){this.comments.data.length<this.perPage||(this.page++,this.commentsList())},prevPage:function(){this.page<1||(this.page--,this.commentsList())},commentsList:(v=function(t){return function(){var e=this,a=arguments;return new o.a((function(n,r){var s=t.apply(e,a);function i(t,e){try{var a=s[t](e),i=a.value}catch(t){return void r(t)}a.done?n(i):o.a.resolve(i).then(c,m)}function c(t){i("next",t)}function m(t){i("throw",t)}c()}))}}(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("comments/".concat(this.commentableType,"/").concat(this.commentableId,"/"),{params:{perPage:this.perPage,page:this.page}});case 2:e=t.sent,this.comments=e.data;case 4:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)})}},y=Object(d.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("replay-comment-form",{attrs:{commentableId:t.replayCommentableId,commentableType:t.replayCommentableType},on:{saved:t.replyAdded}}),t._v(" "),t._l(t.comments.data,(function(e){return a("comment",{key:"comment-"+e.id,attrs:{data:e,commentableId:t.replayCommentableId,commentableType:t.replayCommentableType},on:{replyAdded:t.commentUpdated}})})),t._v(" "),a("div",{staticClass:"btn-group"},[a("vs-button",{on:{click:t.prevPage}},[t._v(t._s(t.$t("comments.previous")))]),t._v(" "),a("vs-button",{on:{click:t.nextPage}},[t._v(t._s(t.$t("comments.next")))])],1)],2)}),[],!1,null,"df9a61e2",null);e.a=y.exports},73:function(t,e){t.exports="/images/main-logo.png?51fe9134d6ba15d90afefb019684d75d"},75:function(t,e,a){var n=a(144);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(8)(n,o);n.locals&&(t.exports=n.locals)},76:function(t,e,a){var n=a(146);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(8)(n,o);n.locals&&(t.exports=n.locals)}}]);