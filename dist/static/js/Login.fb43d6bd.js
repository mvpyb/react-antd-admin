(this["webpackJsonpreact-ant-admin"]=this["webpackJsonpreact-ant-admin"]||[]).push([[20],{1111:function(e,a,n){},1214:function(e,a,n){},1448:function(e,a,n){"use strict";n.r(a);n(218);var t=n(165),r=n(34),s=n.n(r),c=n(54),i=n(32),o=n(0),l=n.n(o),m=n(14),u=n(1425),f=n(506),p=n.n(f),d=(n(1111),n(1214),n(197)),g=n.n(d),v=function(e){return l.a.createElement("div",{className:"logo-contanier"},l.a.createElement("img",{src:g.a,alt:"logo"}),l.a.createElement("span",{className:"name name1"},"A"),l.a.createElement("span",{className:"name name2"},"nt "),l.a.createElement("span",{className:"name name1"},"D"),l.a.createElement("span",{className:"name name2"},"esign"))},E=(n(155),n(52)),h=(n(621),n(603)),w=(n(605),n(618)),b=(n(623),n(727)),N=n(31),O=n(61),y=n(71),j=n(756),S=n(140);function x(e){return Object(S.a)({url:"/login",method:"post",data:e})}var k=n(415),F=n(1456),_=b.a.Item,P=function(e){var a=Object(N.c)(),n=function(e){return e?(Object(y.c)(e),{pass:!0}):{pass:!1,message:"\u8d26\u53f7\u683c\u5f0f\u9519\u8bef"}},t={username:[{validator:function(e,a){try{var t=n(a);return t&&t.pass?Promise.resolve():Promise.reject(t.message||"\u8d26\u53f7\u683c\u5f0f\u9519\u8bef")}catch(r){return Promise.reject(r)}}}],password:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{type:"string",min:8},{type:"string",max:16}]},r={remember:!0,username:"admin",password:"password"},i={colon:!1,hidden:!1},o=l.a.createRef();!function(){var e=j.a.get("login_info");if(e&&e.remember){var a=e.username,n=e.password;r={remember:!0,username:a,password:n}}else r={remember:!1,username:"",password:""}}();var m=function(){var n=Object(c.a)(s.a.mark((function n(t){var r,c,i,o,l,m,u,f,p,d,g;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.username,c=t.password,i=t.remember,o=e.loginStart,l=e.loginSuccess,m=e.loginFailed,u=e.loginComplete,o&&o(),i?j.a.set("login_info",{username:r,password:c,remember:!0,expiration:(new Date).valueOf()+6048e5}):j.a.remove("login_info"),n.prev=4,n.next=7,x({username:r,password:c});case 7:if(f=n.sent,p=f.code,d=f.data,200!=p){n.next=16;break}return n.next=12,a(Object(O.SET_TOKEN)(d.token));case 12:return n.next=14,a(Object(O.getUserInfoSlice)()).unwrap();case 14:g=n.sent,l&&l(g);case 16:n.next=21;break;case 18:n.prev=18,n.t0=n.catch(4),m&&m(n.t0);case 21:return n.prev=21,u&&u(),n.finish(21);case 24:case"end":return n.stop()}}),n,null,[[4,18,21,24]])})));return function(e){return n.apply(this,arguments)}}();return l.a.createElement(b.a,{ref:o,name:"passwordLogin",className:"login-form",scrollToFirstError:!0,validateTrigger:["onChange","onBlur"],initialValues:r,onFinish:m,onFinishFailed:function(e){},onFieldsChange:function(e,a){},onValuesChange:function(e,a){}},l.a.createElement(_,Object.assign({name:"username",rules:t.username},i),l.a.createElement(w.a,{allowClear:!0,maxLength:11,prefix:l.a.createElement(k.a,{className:"site-form-item-icon"}),placeholder:"username"})),l.a.createElement(_,Object.assign({name:"password",rules:t.password},i),l.a.createElement(w.a,{maxLength:16,prefix:l.a.createElement(F.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",onPressEnter:function(){o.current.submit()}})),l.a.createElement(_,null,l.a.createElement(_,{name:"remember",valuePropName:"checked",noStyle:!0},l.a.createElement(h.a,null,"\u8bb0\u4f4f\u5bc6\u7801")),l.a.createElement("a",{className:"login-form-forgot",href:""},"\u5fd8\u8bb0\u5bc6\u7801")),l.a.createElement(_,null,l.a.createElement(E.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767b\u5f55")),l.a.createElement(_,null,"\u8d26\u53f7 \uff1a admin \uff0c \u5bc6\u7801 \uff1apassword"))};a.default=Object(u.a)()((function(e){var a=e.t,n=Object(o.useState)(!1),r=Object(i.a)(n,2),u=r[0],f=r[1],d=Object(m.f)(),g=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d("/");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(p.a,{title:a("login.title")},l.a.createElement("div",{className:"login-container syNormal un-select"},l.a.createElement("div",{className:"body fix-width"},l.a.createElement("div",{className:"top"},l.a.createElement(v,{className:"logos"}),l.a.createElement("div",{className:"desc"}," ",a("login.subTitle"))),l.a.createElement("div",{className:"main"},l.a.createElement(t.a,{spinning:u,tip:a("login.loading")},l.a.createElement(P,{loginFailed:function(){},loginSuccess:g,loginStart:function(){f(!0)}}))),l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"desc"})))))}))},756:function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));n(152),n(153);var t=n(104),r=n(105),s=n(78),c=function(){function e(a){Object(t.a)(this,e),this.storage=a}return Object(r.a)(e,[{key:"set",value:function(e,a){var n=this.storage;if(e){e="".concat(s.STORAGE_PREFIX,"_").concat(e);var t=JSON.stringify(a);n.setItem(e,t)}}},{key:"get",value:function(e){var a=this.storage;if(e){e="".concat(s.STORAGE_PREFIX,"_").concat(e);var n=a.getItem(e);if(""==n||null==n||"{}"==JSON.stringify(n))n="";else{var t=JSON.parse(n),r=t.expiration;r&&r<=(new Date).valueOf()?(this.remove(e),n=""):n=t}return n}return null}},{key:"remove",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.storage;e&&(a?this.clear():(e="".concat(s.STORAGE_PREFIX,"_").concat(e),n.removeItem(e)))}},{key:"clear",value:function(){this.storage.clear()}}]),e}(),i=(new c(window.sessionStorage),new c(window.localStorage))}}]);