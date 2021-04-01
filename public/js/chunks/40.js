(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{466:function(t,e,a){"use strict";a.r(e);var n=a(2),s=a.n(n),o=a(0),i=a.n(o),r=a(14),l=a(7),p=Object(l.a)(Object(l.b)("comments/list")),c=a(4);function u(t){return function(){var e=this,a=arguments;return new s.a((function(n,o){var i=t.apply(e,a);function r(t,e){try{var a=i[t](e),r=a.value}catch(t){return void o(t)}a.done?n(r):s.a.resolve(r).then(l,p)}function l(t){r("next",t)}function p(t){r("throw",t)}l()}))}}var m,d,h={methods:{deleteModel:(d=u(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.delete("comments/".concat(this.params.data.id));case 2:this.params.api.purgeServerSideCache([]);case 3:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)}),toogleApprove:(m=u(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.patch("comments/".concat(this.params.data.id));case 2:this.params.api.purgeServerSideCache([]);case 3:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)})}},v=a(1),f=Object(v.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:function(e){t.params.context.showPopup(t.params.data.id,t.params.data.body,0,t.params.data.commentable_id,t.params.data.commentable_type,t.$t("comments.edit_comment"))}}},[t._v("\n        "+t._s(t.$t("general.edit"))+"\n    ")]),t._v(" "),a("vs-button",{attrs:{color:"success",type:"filled"},on:{click:function(e){t.params.context.showPopup(null,"",t.params.data.id,t.params.data.commentable_id,t.params.data.commentable_type,t.$t("comments.replay_to_comment"))}}},[t._v("\n        "+t._s(t.$t("general.replay"))+"\n    ")]),t._v(" "),a("vs-button",{attrs:{color:t.params.data.approved_at?"warning":"success",type:"filled"},on:{click:t.toogleApprove}},[t._v("\n        "+t._s(t.params.data.approved_at?t.$t("general.disapprove"):t.$t("general.approve"))+"\n    ")]),t._v(" "),a("vs-button",{attrs:{color:"danger",type:"filled"},on:{click:t.deleteModel}},[t._v("\n        "+t._s(t.$t("general.delete"))+"\n    ")])],1)}),[],!1,null,"a9b10dd8",null).exports,b={data:function(){return{}},computed:{base:function(){switch(this.params.data.commentable_type){case"App\\Models\\Lesson":return"lessons.edit";case"App\\Models\\Course":return"courses.edit"}}}},_=Object(v.a)(b,(function(){var t=this.$createElement;return(this._self._c||t)("router-link",{attrs:{to:{name:this.base,params:{id:this.params.data.commentable_id}}}},[this._v("\n    "+this._s(this.params.data.commentable.label)+"\n")])}),[],!1,null,"4e948b91",null).exports,y={computed:{role:function(){return window._.get(this,"params.data.author.roles[0].name")},base:function(){switch(this.role){case"student":return"students.edit";case"teacher":return"teachers.edit"}}}},w=Object(v.a)(y,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return"admin"===t.role?a("span",[t._v("\n    "+t._s(t.params.data.author.name)+"\n")]):a("router-link",{attrs:{to:{name:t.base,params:{id:t.params.data.author.id}}}},[t._v("\n    "+t._s(t.params.data.author.name)+"\n")])}),[],!1,null,"6d77040e",null).exports;var C,x,g={components:{AgTable:r.a,tableActionColumnCell:f,tableAddedOnColumnCell:_,tableAuthorColumnCell:w},data:function(){return{popup:{title:"",display:!1,id:null,parent_id:0,body:"",commentableId:null,commentableType:null},filters:!1,agFilters:{search:null,model_id:null,model_type:null},agOptions:{dataSource:p,context:this}}},mounted:function(){this.agFilters.model_id=this.$route.query.model_id||null,this.agFilters.model_type=this.$route.query.model_type||null},methods:{showFilters:function(){this.filters=!this.filters},applyFilters:function(){this.$refs.allCommentsTable.applyFilters()},showPopup:function(t,e,a,n,s,o){this.popup.title=o,this.popup.id=t,this.popup.parent_id=a,this.popup.body=e,this.popup.commentableId=n,this.popup.commentableType=s,this.popup.display=!0},hidePopup:function(){this.popup.title="",this.popup.id=null,this.popup.parent_id=0,this.popup.body="",this.popup.commentableId=null,this.popup.commentableType=null,this.popup.display=!1},saveComment:(C=i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.popup.id){t.next=5;break}return t.next=3,c.a.put("comments/".concat(this.popup.id),{body:this.popup.body});case 3:t.next=8;break;case 5:return e=this.popup.commentableType.split("\\"),t.next=8,c.a.post("comments/".concat(this.popup.parent_id),{body:this.popup.body,commentable_id:this.popup.commentableId,commentable_type:e[e.length-1].toLowerCase()});case 8:this.hidePopup(),this.$refs.allCommentsTable.refreshGrid();case 10:case"end":return t.stop()}}),t,this)})),x=function(){var t=this,e=arguments;return new s.a((function(a,n){var o=C.apply(t,e);function i(t,e){try{var i=o[t](e),p=i.value}catch(t){return void n(t)}i.done?a(p):s.a.resolve(p).then(r,l)}function r(t){i("next",t)}function l(t){i("throw",t)}r()}))},function(){return x.apply(this,arguments)})},computed:{agColumns:function(){var t=this;return[{headerName:this.$t("comments.list.columns.author"),field:"author.name",minWidth:170,cellRendererFramework:"tableAuthorColumnCell"},{headerName:this.$t("comments.list.columns.comment"),field:"body",minWidth:170},{headerName:this.$t("comments.list.columns.added_on"),minWidth:170,cellRendererFramework:"tableAddedOnColumnCell"},{headerName:this.$t("comments.list.columns.added_at"),minWidth:170,valueGetter:function(e){if(e.data)return t.$moment(e.data.created_at).format("D-M-YYYY")}},{headerName:this.$t("comments.list.columns.actions"),minWidth:350,sortable:!1,cellRendererFramework:"tableActionColumnCell"}]}}},$=Object(v.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[a("div",{staticClass:"content-area__heading"},[a("h2",{staticClass:"mb-1"},[t._v(t._s(t.$t("comments.title")))])])]),t._v(" "),a("vx-card",{attrs:{title:t.$t("comments.all_comments")}},[a("template",{slot:"actions"},[a("vx-tooltip",{staticClass:"ml-auto md:block hidden cursor-pointer",attrs:{position:"right",text:t.$t("comments.filter.tooltip")}},[a("vs-button",{attrs:{icon:"icon-settings","icon-pack":"feather"},on:{click:t.showFilters}})],1)],1),t._v(" "),t.filters?a("div",{staticClass:"mb-5"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-1/3 mb-5"},[a("div",{staticClass:"vx-col w-full"},[a("span",[t._v(t._s(t.$t("comments.filter.search")))])]),t._v(" "),a("div",{staticClass:"vx-col w-full"},[a("vs-input",{staticClass:"w-full",model:{value:t.agFilters.search,callback:function(e){t.$set(t.agFilters,"search",e)},expression:"agFilters.search"}})],1)]),t._v(" "),a("div",{staticClass:"vx-col w-1/2"},[a("vs-button",{staticClass:"mr-3 mt-5",on:{click:t.applyFilters}},[t._v(t._s(t.$t("comments.filter.title")))])],1)])]):t._e(),t._v(" "),a("ag-table",{ref:"allCommentsTable",attrs:{filters:t.agFilters,columns:t.agColumns,options:t.agOptions}})],2),t._v(" "),a("vs-prompt",{attrs:{title:t.popup.title,active:t.popup.display},on:{cancel:t.hidePopup,accept:t.saveComment,close:t.hidePopup,"update:active":function(e){return t.$set(t.popup,"display",e)}}},[a("div",[a("vs-textarea",{attrs:{height:"200px"},model:{value:t.popup.body,callback:function(e){t.$set(t.popup,"body",e)},expression:"popup.body"}})],1)])],1)}),[],!1,null,"5445c153",null);e.default=$.exports}}]);