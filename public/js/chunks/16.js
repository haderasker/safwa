(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{126:function(t,s,a){a(127),t.exports=a(16).Object.assign},127:function(t,s,a){var e=a(23);e(e.S+e.F,"Object",{assign:a(128)})},128:function(t,s,a){"use strict";var e=a(44),n=a(61),r=a(37),i=a(68),u=a(141),c=Object.assign;t.exports=!c||a(46)((function(){var t={},s={},a=Symbol(),e="abcdefghijklmnopqrst";return t[a]=7,e.split("").forEach((function(t){s[t]=t})),7!=c({},t)[a]||Object.keys(c({},s)).join("")!=e}))?function(t,s){for(var a=i(t),c=arguments.length,o=1,l=n.f,d=r.f;c>o;)for(var v,p=u(arguments[o++]),m=l?e(p).concat(l(p)):e(p),f=m.length,x=0;f>x;)d.call(p,v=m[x++])&&(a[v]=p[v]);return a}:c},26:function(t,s,a){t.exports=a(126)},37:function(t,s){s.f={}.propertyIsEnumerable},512:function(t,s,a){"use strict";a.r(s);var e={components:{Student:a(54).a},data:function(){return{studentData:{name:null,email:null,password:null,password_confirmation:null}}}},n=a(1),r=Object(n.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("student",{attrs:{student:this.studentData}})}),[],!1,null,"47a38e5c",null);s.default=r.exports},54:function(t,s,a){"use strict";var e=a(2),n=a.n(e),r=a(0),i=a.n(r),u=a(26),c=a.n(u),o=a(4);var l,d,v={props:["student"],data:function(){return{characters:"a-z,A-Z,0-9,#",size:16}},computed:{getStatus:function(){var t=this;return[1,2,3].map((function(s){return{id:s,name:t.$t("status.".concat(s))}}))},validateForm:function(){return!this.errors.any()}},methods:{generatePassword:function(){var t=this.characters.split(","),s="",a="";t.indexOf("a-z")>=0&&(s+="abcdefghijklmnopqrstuvwxyz"),t.indexOf("A-Z")>=0&&(s+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t.indexOf("0-9")>=0&&(s+="0123456789"),t.indexOf("#")>=0&&(s+="![]{}()%&*$#^<>~@|");for(var e=0;e<this.size;e++)a+=s.charAt(Math.floor(Math.random()*s.length));this.student.password=a,this.student.password_confirmation=a},createStudent:(l=i.a.mark((function t(){var s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$validator.validate();case 2:if(!this.errors.any()){t.next=4;break}return t.abrupt("return");case 4:if((s=c()({},this.student)).status&&(s.status=s.status.id),!this.$route.params.id){t.next=11;break}return t.next=9,o.a.put("students/".concat(this.$route.params.id),s);case 9:t.next=14;break;case 11:return t.next=13,o.a.post("students",s);case 13:this.$router.push({name:"students.list"}).catch();case 14:case"end":return t.stop()}}),t,this)})),d=function(){var t=this,s=arguments;return new n.a((function(a,e){var r=l.apply(t,s);function i(t,s){try{var i=r[t](s),o=i.value}catch(t){return void e(t)}i.done?a(o):n.a.resolve(o).then(u,c)}function u(t){i("next",t)}function c(t){i("throw",t)}u()}))},function(){return d.apply(this,arguments)})}},p=a(1),m=Object(p.a)(v,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[a("div",{staticClass:"content-area__heading"},[a("h2",{staticClass:"mb-1"},[t._v("\n                "+t._s(t.$route.params.id?t.$t("students.edit_title")+t.student.name:t.$t("students.create_title"))+"\n            ")])])]),t._v(" "),a("vx-card",[a("h4",{staticClass:"mb-5"},[t._v("\n            "+t._s(t.$t("students.info"))+"\n        ")]),t._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[t._v(t._s(t.$t("students.name")))])]),t._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"w-full",attrs:{name:"name"},model:{value:t.student.name,callback:function(s){t.$set(t.student,"name",s)},expression:"student.name"}}),t._v(" "),a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("name")))])],1)]),t._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[t._v(t._s(t.$t("students.email")))])]),t._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full",attrs:{name:"email"},model:{value:t.student.email,callback:function(s){t.$set(t.student,"email",s)},expression:"student.email"}}),t._v(" "),a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("email")))])],1)]),t._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[t._v(t._s(t.$t("students.status")))])]),t._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"status",label:"name",options:t.getStatus},model:{value:t.student.status,callback:function(s){t.$set(t.student,"status",s)},expression:"student.status"}}),t._v(" "),a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("status")))])],1)]),t._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[t._v(t._s(t.$t("students.password")))])]),t._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("vx-input-group",{staticClass:"w-full"},[a("vs-input",{model:{value:t.student.password,callback:function(s){t.$set(t.student,"password",s)},expression:"student.password"}}),t._v(" "),a("template",{slot:"append"},[a("div",{staticClass:"append-text bg-primary"},[a("vs-button",{on:{click:function(s){return t.generatePassword()}}},[t._v("Generate")])],1)])],2)],1)]),t._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[t._v(t._s(t.$t("students.password_confirmation")))])]),t._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("vs-input",{staticClass:"w-full",model:{value:t.student.password_confirmation,callback:function(s){t.$set(t.student,"password_confirmation",s)},expression:"student.password_confirmation"}})],1)]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("vs-button",{attrs:{color:"primary",type:"filled",disabled:!t.validateForm},on:{click:t.createStudent}},[t._v("\n                    "+t._s(t.$route.params.id?t.$t("students.update"):t.$t("students.save"))+"\n                ")])],1)])])],1)}),[],!1,null,"d6256cb2",null);s.a=m.exports},61:function(t,s){s.f=Object.getOwnPropertySymbols}}]);