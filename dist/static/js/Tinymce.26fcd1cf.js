(this["webpackJsonpreact-ant-admin"]=this["webpackJsonpreact-ant-admin"]||[]).push([[24],{1319:function(e,t,n){},1446:function(e,t,n){"use strict";n.r(t);n(543);var a=n(546),c=n(0),o=n.n(c),r=(n(617),n(620)),i=n(34),s=n.n(i),l=n(54),u=n(32),d=n(99),m=[];var f=function(e,t){var n=document.getElementById(e),a=t||function(){};if(!n){var c=document.createElement("script");c.src=e,c.id=e,document.body.appendChild(c),m.push(a),("onload"in c?function(t){t.onload=function(){this.onerror=this.onload=null;var e,n=Object(d.a)(m);try{for(n.s();!(e=n.n()).done;){(0,e.value)(null,t)}}catch(a){n.e(a)}finally{n.f()}m=null},t.onerror=function(){this.onerror=this.onload=null,a(new Error("Failed to load "+e),t)}}:function(e){e.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var t,n=Object(d.a)(m);try{for(n.s();!(t=n.n()).done;){(0,t.value)(null,e)}}catch(a){n.e(a)}finally{n.f()}m=null}}})(c)}n&&a&&(window.tinymce?a(null,n):m.push(a))},p=(n(1319),void 0),b="zh_CN",h=function(e){var t=e.tinymceId,n=void 0===t?"react-tinymce-".concat(+new Date).concat((1e3*Math.random()).toFixed(0)+""):t,a=e.value,i=e.toolbar,d=(e.menubar,e.height),m=void 0===d?600:d,h=e.width,v=void 0===h?"auto":h,y=(e.elStyle,e.editoInput),g=Object(c.useState)(!1),w=Object(u.a)(g,2),O=w[0],j=w[1],E=Object(c.useState)(!1),_=Object(u.a)(E,2),k=_[0],x=_[1],C=Object(c.useState)(!1),N=Object(u.a)(C,2),S=N[0],I=N[1],L=Object(c.useState)(v),M=Object(u.a)(L,2),T=M[0],q=M[1],z=Object(c.useRef)(null);Object(c.useEffect)(Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return q(/^[\d]+(\.[\d]+)?$/.test(v)?"".concat(v,"px"):v),window.addEventListener("scroll",F,!0),e.abrupt("return",(function(){window.removeEventListener("scroll",F,!0),A()}));case 5:case"end":return e.stop()}}),e)}))),[]),Object(c.useEffect)(Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)}))),[O,k]);var F=function(e){},P=function(){f("https://resources.shadowcreator.com/project-sources/lib/tinymce5.7.1/tinymce.min.js",function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return p.$message.error(t.message),e.abrupt("return");case 3:return e.next=5,D();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},D=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tinymce.init({selector:"#".concat(n),language:b,height:m,body_class:"panel-body ",object_resizing:!0,toolbar:i&&i.length>0?i:"\n  undo redo removeformat fontsizeselect bold italic underline strikethrough forecolor backcolor\n alignleft aligncenter alignright alignjustify indent2em | outdent indent | lineheight letterspacing numlist bullist |\n ltr rtl image media blockquote table hr codesample checklist colorpicker\n",end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,toolbar_mode:"sliding",content_css:"/static/custorm.css?rev="+(new Date).getTime(),content_style:".minganci { color: red; } em.minganci { font-style : normal; } p { margin : 0; padding : 0; }",lineheight_formats:"1 1.1 1.2 1.3 1.4 1.5 1.75 2",fontsize_formats:"12px 14px 16px 18px 24px 36px",file_picker_types:"file image media",file_picker_callback:function(e,t,n){},init_instance_callback:function(e){a&&e.setContent(a),x(!0),e.on("KeyUp SetContent SetAttrib Change",(function(){j(!0),y(e.getContent())}))},setup:function(e){e.on("FullscreenStateChanged",(function(e){I(e.state)}))}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=window.tinymce.get(n);S&&e.execCommand("mceFullScreen"),e&&e.destroy()};return o.a.createElement("div",{className:"editor-section ".concat(S?"fullscreen":""),style:{width:T}},o.a.createElement(r.a,{bordered:!1},o.a.createElement("div",{ref:z,className:"tinymce-container"},o.a.createElement("textarea",{id:n,className:"tinymce-textarea"}))))},v=function(){return o.a.createElement("p",null," \u6b64\u9875\u9762\u7528\u5230\u7684\u5bcc\u6587\u672c\u7f16\u8f91\u5668\u662f ",o.a.createElement("a",{href:"https://www.tiny.cloud/docs/quick-start/"},"Tinymce"),"\u3002")};t.default=function(){return o.a.createElement("div",{className:"app-container"},o.a.createElement(a.a,{message:o.a.createElement(v,null)}),o.a.createElement("br",null),o.a.createElement(h,{value:"<p> \u6b64\u9875\u9762\u7528\u5230\u7684\u5bcc\u6587\u672c\u7f16\u8f91\u5668\u662f <a href='https://www.tiny.cloud/docs/quick-start/'>Tinymce</a>\u3002</p>",editoInput:function(e){}}))}},513:function(e,t,n){"use strict";function a(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}n.d(t,"a",(function(){return a}))},543:function(e,t,n){"use strict";n(46),n(544)},544:function(e,t,n){},546:function(e,t,n){"use strict";var a=n(2),c=n(3),o=n(4),r=n(0),i=n(106),s=n(108),l=n(93),u=n(109),d=n(110),m=n(157),f=n(160),p=n(162),b=n(154),h=n(29),v=n(5),y=n.n(v),g=n(55),w=n(513),O=n(9),j=n(11),E=n(16),_=n(17),k=function(e){Object(E.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(O.a)(this,n),(e=t.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return Object(j.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,a=e.children,c=this.state,o=c.error,i=c.info,s=i&&i.componentStack?i.componentStack:null,l="undefined"===typeof t?(o||"").toString():t,u="undefined"===typeof n?s:n;return o?r.createElement(L,{type:"error",message:l,description:r.createElement("pre",null,u)}):a}}]),n}(r.Component),x=n(20),C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},N={success:m.a,info:p.a,error:b.a,warning:f.a},S={success:s.a,info:u.a,error:d.a,warning:l.a},I=function(e){var t,n=e.description,s=e.prefixCls,l=e.message,u=e.banner,d=e.className,m=void 0===d?"":d,f=e.style,p=e.onMouseEnter,b=e.onMouseLeave,v=e.onClick,O=e.afterClose,j=e.showIcon,E=e.closable,_=e.closeText,k=e.closeIcon,I=void 0===k?r.createElement(i.a,null):k,L=e.action,M=C(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),T=r.useState(!1),q=Object(o.a)(T,2),z=q[0],F=q[1],P=r.useRef(),D=r.useContext(g.b),A=D.getPrefixCls,B=D.direction,H=A("alert",s),J=function(e){var t;F(!0),null===(t=M.onClose)||void 0===t||t.call(M,e)},R=!!_||E,$=function(){var e=M.type;return void 0!==e?e:u?"warning":"info"}(),K=!(!u||void 0!==j)||j,U=y()(H,"".concat(H,"-").concat($),(t={},Object(c.a)(t,"".concat(H,"-with-description"),!!n),Object(c.a)(t,"".concat(H,"-no-icon"),!K),Object(c.a)(t,"".concat(H,"-banner"),!!u),Object(c.a)(t,"".concat(H,"-rtl"),"rtl"===B),t),m),G=Object(w.a)(M);return r.createElement(h.b,{visible:!z,motionName:"".concat(H,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:O},(function(e){var t=e.className,o=e.style;return r.createElement("div",Object(a.a)({ref:P,"data-show":!z,className:y()(U,t),style:Object(a.a)(Object(a.a)({},f),o),onMouseEnter:p,onMouseLeave:b,onClick:v,role:"alert"},G),K?function(){var e=M.icon,t=(n?S:N)[$]||null;return e?Object(x.c)(e,r.createElement("span",{className:"".concat(H,"-icon")},e),(function(){return{className:y()("".concat(H,"-icon"),Object(c.a)({},e.props.className,e.props.className))}})):r.createElement(t,{className:"".concat(H,"-icon")})}():null,r.createElement("div",{className:"".concat(H,"-content")},l?r.createElement("div",{className:"".concat(H,"-message")},l):null,n?r.createElement("div",{className:"".concat(H,"-description")},n):null),L?r.createElement("div",{className:"".concat(H,"-action")},L):null,R?r.createElement("button",{type:"button",onClick:J,className:"".concat(H,"-close-icon"),tabIndex:0},_?r.createElement("span",{className:"".concat(H,"-close-text")},_):I):null)}))};I.ErrorBoundary=k;var L=t.a=I}}]);