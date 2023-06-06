"use strict";(self.webpackChunkreact_ant_admin=self.webpackChunkreact_ant_admin||[]).push([[5367,6709,2150,2693],{66709:function(e,n,r){r.r(n),r.d(n,{login:function(){return t}});r(77494);function t(e){return Promise.resolve({code:200,message:"success",data:{token:"admin-token"}})}},42150:function(e,n,r){r.r(n),r.d(n,{localStorageHandle:function(){return l},sessionStorageHandle:function(){return s}});var t=r(15671),a=r(43144),o=r(54562),i=function(){function e(n){(0,t.Z)(this,e),this.storage=n}return(0,a.Z)(e,[{key:"set",value:function(e,n){var r=this.storage;if(e){e="".concat(o.STORAGE_PREFIX,"_").concat(e);var t=JSON.stringify(n);r.setItem(e,t)}}},{key:"get",value:function(e){var n=this.storage;if(e){e="".concat(o.STORAGE_PREFIX,"_").concat(e);var r=n.getItem(e);if(""==r||null==r||"{}"==JSON.stringify(r))r="";else{var t=JSON.parse(r),a=t.expiration;a&&a<=(new Date).valueOf()?(this.remove(e),r=""):r=t}return r}return null}},{key:"remove",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.storage;e&&(n?this.clear():(e="".concat(o.STORAGE_PREFIX,"_").concat(e),r.removeItem(e)))}},{key:"clear",value:function(){this.storage.clear()}}]),e}(),s=new i(window.sessionStorage),l=new i(window.localStorage)},62693:function(e,n,r){r.r(n);var t,a,o,i,s,l,c,u,d,m,g,p,f=r(30168),h=r(81795),x={loginContainer:(0,h.iv)(t||(t=(0,f.Z)(["\n      width: 100%;\n      min-height: 100%;\n      padding: 160px 0 144px;\n      position: relative;\n      background-image: url('~@/assets/imgs/bgimg.svg');\n    "]))),body:(0,h.iv)(a||(a=(0,f.Z)(["\n    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);\n    border-radius: 4px;\n    border: 1px solid #e6ebf5;\n    background-color: #fff;\n    padding: 20px 30px;\n  "]))),fixWidth:(0,h.iv)(o||(o=(0,f.Z)(["\n    min-width: 260px;\n    width: 390px;\n    margin: 0 auto;\n  "]))),top:(0,h.iv)(i||(i=(0,f.Z)(["\n    .header{\n      position: relative;\n      padding-top: 20px;\n    }\n  "]))),logos:(0,h.iv)(s||(s=(0,f.Z)(["\n    text-align: center;\n    margin: 30px 0 15px;\n  "]))),desc:(0,h.iv)(l||(l=(0,f.Z)(["\n    text-align: center;\n    font-size: 14px;\n    color: rgba(0,0,0,.45);\n    margin-top: 12px;\n    margin-bottom: 40px;\n  "]))),main:(0,h.iv)(c||(c=(0,f.Z)(["\n    .title{\n      font-size : 20px;\n      text-align: center;\n      font-weight:bold;\n      color: #000;\n    }\n    .footLink{\n      text-align: center;\n      .linkItem{\n        margin: 0;\n        font-size: 12px;\n        color:#1890ff;\n      }\n    }\n  "]))),footer:(0,h.iv)(u||(u=(0,f.Z)(["\n  \n  "]))),loginForm:(0,h.iv)(d||(d=(0,f.Z)(["\n    max-width: 300px;\n  "]))),loginFormForgot:(0,h.iv)(m||(m=(0,f.Z)(["\n    float: right;\n  "]))),loginFormButton:(0,h.iv)(g||(g=(0,f.Z)(["\n    width: 100%;\n  "]))),imgCode:(0,h.iv)(p||(p=(0,f.Z)(["\n    display: inline-block;\n    width: 100%;\n    height: 36px;\n    cursor: pointer;\n    &:hover {\n      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);\n    }\n  "])))};n.default=x},95367:function(e,n,r){r.r(n);var t=r(1413),a=r(74165),o=r(15861),i=r(34706),s=r(48754),l=r(39201),c=r(2066),u=r(42150),d=r(66709),m=r(29429),g=r(59855),p=r(4223),f=r(27249),h=r(72936),x=r(24651),v=r(62693),w=r(15548),Z=r(10161),b=m.Z.Item;n.default=function(e){var n=(0,s.I0)(),r={username:[{validator:function(e,n){try{var r=function(e){return e?((0,c.validPhone)(e),{pass:!0}):{pass:!1,message:"\u8d26\u53f7\u683c\u5f0f\u9519\u8bef"}}(n);return r&&r.pass?Promise.resolve():Promise.reject(r.message||"\u8d26\u53f7\u683c\u5f0f\u9519\u8bef")}catch(t){return Promise.reject(t)}}}],password:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{type:"string",min:8},{type:"string",max:16}]},k={remember:!0,username:"admin",password:"password"},y={colon:!1,hidden:!1},F=i.createRef(),S=function(){var e=u.localStorageHandle.get("login_info");if(e&&e.remember){var n=e.username,r=e.password;k={remember:!0,username:n,password:r}}else k={remember:!1,username:"",password:""}};(0,i.useEffect)((function(){return S}),[]);var j=function(){var r=(0,o.Z)((0,a.Z)().mark((function r(t){var o,i,s,c,m,g,p,f,h,x;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.username,i=t.password,s=t.remember,c=e.loginStart,m=e.loginSuccess,g=e.loginFailed,p=e.loginComplete,c&&c(),s?u.localStorageHandle.set("login_info",{username:o,password:i,remember:!0,expiration:(new Date).valueOf()+6048e5}):u.localStorageHandle.remove("login_info"),r.prev=4,r.next=7,(0,d.login)({username:o,password:i});case 7:if(f=r.sent,h=f.code,x=f.data,200!=h){r.next=14;break}return r.next=12,n((0,l.SET_TOKEN)(x.token));case 12:(0,w.getCookie)("token"),m&&m();case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(4),g&&g(r.t0);case 19:return r.prev=19,p&&p(),r.finish(19);case 22:case"end":return r.stop()}}),r,null,[[4,16,19,22]])})));return function(e){return r.apply(this,arguments)}}();return(0,Z.jsxs)(m.Z,{ref:F,name:"passwordLogin",className:v.default.loginForm,scrollToFirstError:!0,validateTrigger:["onChange","onBlur"],initialValues:k,onFinish:j,onFinishFailed:function(e){},onFieldsChange:function(e,n){},onValuesChange:function(e,n){},children:[(0,Z.jsx)(b,(0,t.Z)((0,t.Z)({name:"username",rules:r.username},y),{},{children:(0,Z.jsx)(g.Z,{allowClear:!0,maxLength:11,prefix:(0,Z.jsx)(h.Z,{}),placeholder:"username"})})),(0,Z.jsx)(b,(0,t.Z)((0,t.Z)({name:"password",rules:r.password},y),{},{children:(0,Z.jsx)(g.Z,{maxLength:16,prefix:(0,Z.jsx)(x.Z,{}),type:"password",placeholder:"Password",onPressEnter:function(){F.current.submit()}})})),(0,Z.jsxs)(b,{children:[(0,Z.jsx)(b,{name:"remember",valuePropName:"checked",noStyle:!0,children:(0,Z.jsx)(p.Z,{children:"\u8bb0\u4f4f\u5bc6\u7801"})}),(0,Z.jsx)("a",{className:v.default.loginFormForgot,href:"#!",children:"\u5fd8\u8bb0\u5bc6\u7801"})]}),(0,Z.jsx)(b,{children:(0,Z.jsx)(f.ZP,{type:"primary",htmlType:"submit",className:v.default.loginFormButton,children:"\u767b\u5f55"})}),(0,Z.jsx)(b,{children:"\u8d26\u53f7 \uff1a admin | editor \uff0c \u5bc6\u7801 \uff1apassword"})]})}}}]);