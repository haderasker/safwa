(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{125:function(t,s,a){a(126),t.exports=a(16).Object.assign},126:function(t,s,a){var n=a(23);n(n.S+n.F,"Object",{assign:a(127)})},127:function(t,s,a){"use strict";var n=a(43),e=a(60),i=a(37),r=a(70),u=a(147),c=Object.assign;t.exports=!c||a(45)((function(){var t={},s={},a=Symbol(),n="abcdefghijklmnopqrst";return t[a]=7,n.split("").forEach((function(t){s[t]=t})),7!=c({},t)[a]||Object.keys(c({},s)).join("")!=n}))?function(t,s){for(var a=r(t),c=arguments.length,o=1,l=e.f,d=i.f;c>o;)for(var v,p=u(arguments[o++]),f=l?n(p).concat(l(p)):n(p),m=f.length,w=0;m>w;)d.call(p,v=f[w++])&&(a[v]=p[v]);return a}:c},26:function(t,s,a){t.exports=a(125)},37:function(t,s){s.f={}.propertyIsEnumerable},491:function(t,s,a){"use strict";a.r(s);var n={components:{Student:a(53).a},data:function(){return{studentData:{name:null,email:null,password:null,password_confirmation:null}}}},e=a(1),i=Object(e.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("student",{attrs:{student:this.studentData}})}),[],!1,null,"47a38e5c",null);s.default=i.exports},53:function(t,s,a){"use strict";var n=a(2),e=a.n(n),i=a(0),r=a.n(i),u=a(26),c=a.n(u),o=a(4);var l,d,v={props:["student"],data:function(){return{characters:"a-z,A-Z,0-9,#",size:16}},computed:{getStatus:function(){var t=this;return[1,2,3].map((function(s){return{id:s,name:t.$t("status.".concat(s))}}))}},methods:{generatePassword:function(){var t=this.characters.split(","),s="",a="";t.indexOf("a-z")>=0&&(s+="abcdefghijklmnopqrstuvwxyz"),t.indexOf("A-Z")>=0&&(s+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t.indexOf("0-9")>=0&&(s+="0123456789"),t.indexOf("#")>=0&&(s+="![]{}()%&*$#^<>~@|");for(var n=0;n<this.size;n++)a+=s.charAt(Math.floor(Math.random()*s.length));this.student.password=a,this.student.password_confirmation=a},createStudent:(l=r.a.mark((function t(){var s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((s=c()({},this.student)).status&&(s.status=s.status.id),!this.$route.params.id){t.next=7;break}return t.next=5,o.a.put("students/".concat(this.$route.params.id),s);case 5:t.next=10;break;case 7:return t.next=9,o.a.post("students",this.student);case 9:this.$router.push({name:"students.list"}).catch();case 10:case"end":return t.stop()}}),t,this)})),d=function(){var t=this,s=arguments;return new e.a((function(a,n){var i=l.apply(t,s);function r(t,s){try{var r=i[t](s),o=r.value}catch(t){return void n(t)}r.done?a(o):e.a.resolve(o).then(u,c)}function u(t){r("next",t)}function c(t){r("throw",t)}u()}))},function(){return d.apply(this,arguments)})}},p=a(1),f=Object(p.a)(v,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[a("div",{staticClass:"content-area__heading"},[a("h2",{staticClass:"mb-1"},[t._v("\n                "+t._s(t.$route.params.id?t.$t("students.edit_title")+t.student.name:t.$t("students.create_title"))+"\n            ")])])]),t._v(" "),a("vx-card",[a("h4",{staticClass:"mb-5"},[t._v("\n            "+t._s(t.$t("students.info"))+"\n        ")]),t._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[t._v(t._s(t.$t("students.name")))])]),t._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("vs-input",{staticClass:"w-full",model:{value:t.student.name,callback:function(s){t.$set(t.student,"name",s)},expression:"student.name"}})],1)]),t._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[t._v(t._s(t.$t("students.email")))])]),t._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("vs-input",{staticClass:"w-full",model:{value:t.student.email,callback:function(s){t.$set(t.student,"email",s)},expression:"student.email"}})],1)]),t._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[t._v(t._s(t.$t("students.status")))])]),t._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("v-select",{staticClass:"w-full",attrs:{label:"name",options:t.getStatus},model:{value:t.student.status,callback:function(s){t.$set(t.student,"status",s)},expression:"student.status"}})],1)]),t._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[t._v(t._s(t.$t("students.password")))])]),t._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("vx-input-group",{staticClass:"w-full"},[a("vs-input",{model:{value:t.student.password,callback:function(s){t.$set(t.student,"password",s)},expression:"student.password"}}),t._v(" "),a("template",{slot:"append"},[a("div",{staticClass:"append-text bg-primary"},[a("vs-button",{on:{click:function(s){return t.generatePassword()}}},[t._v("Generate")])],1)])],2)],1)]),t._v(" "),a("div",{staticClass:"vx-row mb-6"},[a("div",{staticClass:"vx-col w-1/4"},[a("span",[t._v(t._s(t.$t("students.password_confirmation")))])]),t._v(" "),a("div",{staticClass:"vx-col w-3/4"},[a("vs-input",{staticClass:"w-full",model:{value:t.student.password_confirmation,callback:function(s){t.$set(t.student,"password_confirmation",s)},expression:"student.password_confirmation"}})],1)]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:t.createStudent}},[t._v("\n                    "+t._s(t.$route.params.id?t.$t("students.update"):t.$t("students.save"))+"\n                ")])],1)])])],1)}),[],!1,null,"5d085989",null);s.a=f.exports},60:function(t,s){s.f=Object.getOwnPropertySymbols}}]);