(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/coupon2020/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"470c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[t._v(" 消費卷計算器 ")]),a("v-spacer")],1),a("v-content",[a("TimeLine")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-left"},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{raised:""}},[a("v-list-item",{attrs:{dense:""}},[a("v-list-item-content",[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"8"}},[a("v-text-field",{attrs:{label:"餘額",filled:"",dense:"","hide-details":""},model:{value:t.remainMoney,callback:function(e){t.remainMoney=e},expression:"remainMoney"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-btn",{staticStyle:{height:"50px",width:"100px"},attrs:{color:"primary","hide-details":""}},[t._v("計算")])],1),a("v-col",{attrs:{cols:"12"}},[t._v(" 提示： 使用剩下日數："),a("span",{staticClass:"color:red"},[t._v(t._s(t.useDays))]),t._v("，剩下金額："+t._s(t.remainMoney)+" ，每日最少使用金額："+t._s((t.remainMoney/t.useDays).toFixed(2))+" ，最少需要多少日才使用完(上限每日300)："+t._s(Math.ceil(t.remainMoney/300))+" ")]),a("v-col",{attrs:{cols:"12"}},[t._v(" 倒數： "+t._s(t.nextCountDownDate.toISOString().substring(0,10))+" ")])],1)],1)],1)],1)],1)],1),a("v-app",{attrs:{id:"inspire"}},[a("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},[a("v-timeline-item",{key:"0",attrs:{color:t.items[0].color,icon:t.items[0].icon,"fill-dot":""}},[a("v-card",{attrs:{color:t.items[0].color,dark:""}},[a("v-card-title",{staticClass:"title"},[t._v("登記期 - 3月18日 至 4月8日")]),a("v-card-text",{staticClass:"white text--primary"},[a("p")])],1)],1),a("v-timeline-item",{key:"1",attrs:{color:t.items[1].color,icon:t.items[1].icon,"fill-dot":""}},[a("v-card",{attrs:{color:t.items[1].color,dark:""}},[a("v-card-title",{staticClass:"title"},[t._v("領取期 - 4月14日 至 4月30日")]),a("v-card-text",{staticClass:"white text--primary"},[a("p")])],1)],1),a("v-timeline-item",{key:"2",attrs:{color:t.items[2].color,icon:t.items[2].icon,"fill-dot":""}},[a("v-card",{attrs:{color:t.items[2].color,dark:""}},[a("v-card-title",{staticClass:"title"},[t._v("使用期 - 5月1日起 至 7月31日")]),a("v-card-text",{staticClass:"white text--primary"},[a("p")])],1)],1)],1)],1)],1)},s=[],l={name:"TimeLine",data:function(){return{remainMoney:3e3,useStartDate:new Date("2020-05-01"),useEndDate:new Date("2020-07-31"),hints:"平均每日最少消費300元",dates:[new Date("2020-03-18"),new Date("2020-04-08"),new Date("2020-04-14"),new Date("2020-04-30"),new Date("2020-05-01"),new Date("2020-07-31")],items:[{color:"red lighten-2",icon:"mdi-lead-pencil"},{color:"purple darken-1",icon:"mdi-credit-card"},{color:"green lighten-1",icon:"mdi-cash-usd"},{color:"indigo",icon:"mdi-buffer"}]}},computed:{useDays:function(){var t=this.useEndDate.getTime()-this.useStartDate.getTime(),e=t/864e5;return e},nextCountDownDate:function(){var t=new Date;return t>=this.dates[5]?t:t>=this.dates[4]?this.dates[5]:t>=this.dates[3]?this.dates[4]:t>=this.dates[2]?this.dates[3]:t>=this.dates[1]?this.dates[2]:t>=this.dates[0]?this.dates[1]:this.dates[0]}}},c=l,d=(a("f154"),a("2877")),u=a("6544"),p=a.n(u),v=a("7496"),f=a("8336"),m=a("b0af"),h=a("99d9"),y=a("62ad"),b=a("a523"),w=a("da13"),x=a("5d23"),_=a("0fd9"),g=a("8654"),D=a("8414"),C=a("1e06"),V=Object(d["a"])(c,o,s,!1,null,null,null),O=V.exports;p()(V,{VApp:v["a"],VBtn:f["a"],VCard:m["a"],VCardText:h["a"],VCardTitle:h["b"],VCol:y["a"],VContainer:b["a"],VListItem:w["a"],VListItemContent:x["a"],VRow:_["a"],VTextField:g["a"],VTimeline:D["a"],VTimelineItem:C["a"]});var k={name:"App",components:{TimeLine:O},data:function(){return{}}},T=k,M=a("40dc"),j=a("a75b"),S=a("2fa4"),P=Object(d["a"])(T,r,i,!1,null,null,null),A=P.exports;p()(P,{VApp:v["a"],VAppBar:M["a"],VContent:j["a"],VSpacer:S["a"]});var L=a("f309");n["a"].use(L["a"]);var E=new L["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:E,render:function(t){return t(A)}}).$mount("#app")},f154:function(t,e,a){"use strict";var n=a("470c"),r=a.n(n);r.a}});
//# sourceMappingURL=app.72efef59.js.map