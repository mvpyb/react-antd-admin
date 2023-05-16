"use strict";(self.webpackChunkreact18=self.webpackChunkreact18||[]).push([[1858,104,2490],{80104:function(n,e,t){t.r(e);var o=t(29439),r=t(34706),c=t(16443),a=t(3311),i=t(78540),s=t(15343),l=t(53821),u=t(85898),d=t.n(u),f=t(21668),m=t.n(f),p=(t(62021),t(22490),t(10161));e.default=function(){var n=(0,r.useState)(s.EditorState.createEmpty()),e=(0,o.Z)(n,2),t=e[0],u=e[1];return(0,p.jsxs)("div",{className:"editor-section",children:[(0,p.jsx)(c.Z,{bordered:!1,children:(0,p.jsx)(l.Editor,{editorState:t,onEditorStateChange:function(n){return u(n)},wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"zh"}})}),(0,p.jsx)("br",{}),(0,p.jsxs)(a.Z,{gutter:10,children:[(0,p.jsx)(i.Z,{span:12,children:(0,p.jsx)(c.Z,{title:"\u540c\u6b65\u8f6c\u6362HTML",bordered:!1,style:{minHeight:200},children:t&&d()((0,s.convertToRaw)(t.getCurrentContent()))})}),(0,p.jsx)(i.Z,{span:12,children:(0,p.jsx)(c.Z,{title:"\u540c\u6b65\u8f6c\u6362MarkDown",bordered:!1,style:{minHeight:200},children:t&&m()((0,s.convertToRaw)(t.getCurrentContent()))})})]})]})}},1858:function(n,e,t){t.r(e);t(34706);var o=t(80104),r=t(49158),c=t(81642),a=t(10161),i=function(){return(0,a.jsxs)("p",{children:[" \u6b64\u9875\u9762\u7528\u5230\u7684\u5bcc\u6587\u672c\u7f16\u8f91\u5668\u662f ",(0,a.jsx)("a",{href:"https://github.com/jpuri/react-draft-wysiwyg",children:"react-draft-wysiwyg"}),"\u3002"]})};e.default=function(){return(0,c.Z)("\u5bcc\u6587\u672c"),(0,a.jsxs)("div",{className:"app-container",children:[(0,a.jsx)(r.Z,{message:(0,a.jsx)(i,{})}),(0,a.jsx)("br",{}),(0,a.jsx)(o.default,{})]})}},81642:function(n,e,t){t.d(e,{Z:function(){return s}});var o=t(34706);var r=function(n){var e=(0,o.useRef)(n);return e.current=n,e},c=(t(65953),function(n){var e=r(n);(0,o.useEffect)((function(){return function(){e.current()}}),[])}),a=!("undefined"===typeof window||!window.document||!window.document.createElement),i={restoreOnUnmount:!1};var s=function(n,e){void 0===e&&(e=i);var t=(0,o.useRef)(a?document.title:"");(0,o.useEffect)((function(){document.title=n}),[n]),c((function(){e.restoreOnUnmount&&(document.title=t.current)}))}},65953:function(n,e,t){t.d(e,{mf:function(){return o}});var o=function(n){return"function"===typeof n}},50398:function(n,e,t){function o(n){return Object.keys(n).reduce((function(e,t){return!t.startsWith("data-")&&!t.startsWith("aria-")&&"role"!==t||t.startsWith("data-__")||(e[t]=n[t]),e}),{})}t.d(e,{Z:function(){return o}})},49158:function(n,e,t){t.d(e,{Z:function(){return W}});var o=t(29439),r=t(4942),c=t(55909),a=t(78282),i=t(36827),s=t(81853),l=t(71503),u=t(23399),d=t.n(u),f=t(39296),m=t(34706),p=t(21571),g=t(50398),v=t(33222),h=t(15671),Z=t(43144),b=t(60136),x=t(29388),y=function(n){(0,b.Z)(t,n);var e=(0,x.Z)(t);function t(){var n;return(0,h.Z)(this,t),(n=e.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},n}return(0,Z.Z)(t,[{key:"componentDidCatch",value:function(n,e){this.setState({error:n,info:e})}},{key:"render",value:function(){var n=this.props,e=n.message,t=n.description,o=n.children,r=this.state,c=r.error,a=r.info,i=a&&a.componentStack?a.componentStack:null,s="undefined"===typeof e?(c||"").toString():e,l="undefined"===typeof t?i:t;return c?m.createElement(W,{type:"error",message:s,description:m.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},l)}):o}}]),t}(m.Component),C=y,E=t(12316),w=t(93537),S=t(53983),j=function(n,e,t,o,c){return(0,r.Z)({backgroundColor:n,border:"".concat(o.lineWidth,"px ").concat(o.lineType," ").concat(e)},"".concat(c,"-icon"),{color:t})},I=function(n){var e,t,o,c=n.componentCls,a=n.motionDurationSlow,i=n.marginXS,s=n.marginSM,l=n.fontSize,u=n.fontSizeLG,d=n.lineHeight,f=n.borderRadiusLG,m=n.motionEaseInOutCirc,p=n.alertIconSizeLG,g=n.colorText,v=n.paddingContentVerticalSM,h=n.alertPaddingHorizontal,Z=n.paddingMD,b=n.paddingContentHorizontalLG;return o={},(0,r.Z)(o,c,Object.assign(Object.assign({},(0,S.Wf)(n)),(e={position:"relative",display:"flex",alignItems:"center",padding:"".concat(v,"px ").concat(h,"px"),wordWrap:"break-word",borderRadius:f},(0,r.Z)(e,"&".concat(c,"-rtl"),{direction:"rtl"}),(0,r.Z)(e,"".concat(c,"-content"),{flex:1,minWidth:0}),(0,r.Z)(e,"".concat(c,"-icon"),{marginInlineEnd:i,lineHeight:0}),(0,r.Z)(e,"&-description",{display:"none",fontSize:l,lineHeight:d}),(0,r.Z)(e,"&-message",{color:g}),(0,r.Z)(e,"&".concat(c,"-motion-leave"),{overflow:"hidden",opacity:1,transition:"max-height ".concat(a," ").concat(m,", opacity ").concat(a," ").concat(m,",\n        padding-top ").concat(a," ").concat(m,", padding-bottom ").concat(a," ").concat(m,",\n        margin-bottom ").concat(a," ").concat(m)}),(0,r.Z)(e,"&".concat(c,"-motion-leave-active"),{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}),e))),(0,r.Z)(o,"".concat(c,"-with-description"),(t={alignItems:"flex-start",paddingInline:b,paddingBlock:Z},(0,r.Z)(t,"".concat(c,"-icon"),{marginInlineEnd:s,fontSize:p,lineHeight:0}),(0,r.Z)(t,"".concat(c,"-message"),{display:"block",marginBottom:i,color:g,fontSize:u}),(0,r.Z)(t,"".concat(c,"-description"),{display:"block"}),t)),(0,r.Z)(o,"".concat(c,"-banner"),{marginBottom:0,border:"0 !important",borderRadius:0}),o},N=function(n){var e=n.componentCls,t=n.colorSuccess,o=n.colorSuccessBorder,c=n.colorSuccessBg,a=n.colorWarning,i=n.colorWarningBorder,s=n.colorWarningBg,l=n.colorError,u=n.colorErrorBorder,d=n.colorErrorBg,f=n.colorInfo,m=n.colorInfoBorder,p=n.colorInfoBg;return(0,r.Z)({},e,{"&-success":j(c,o,t,n,e),"&-info":j(p,m,f,n,e),"&-warning":j(s,i,a,n,e),"&-error":Object.assign(Object.assign({},j(d,u,l,n,e)),(0,r.Z)({},"".concat(e,"-description > pre"),{margin:0,padding:0}))})},k=function(n){var e,t=n.componentCls,o=n.iconCls,c=n.motionDurationMid,a=n.marginXS,i=n.fontSizeIcon,s=n.colorIcon,l=n.colorIconHover;return(0,r.Z)({},t,(e={},(0,r.Z)(e,"&-action",{marginInlineStart:a}),(0,r.Z)(e,"".concat(t,"-close-icon"),(0,r.Z)({marginInlineStart:a,padding:0,overflow:"hidden",fontSize:i,lineHeight:"".concat(i,"px"),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer"},"".concat(o,"-close"),{color:s,transition:"color ".concat(c),"&:hover":{color:l}})),(0,r.Z)(e,"&-close-text",{color:s,transition:"color ".concat(c),"&:hover":{color:l}}),e))},O=function(n){return[I(n),N(n),k(n)]},z=(0,E.Z)("Alert",(function(n){var e=n.fontSizeHeading3,t=(0,w.TS)(n,{alertIconSizeLG:e,alertPaddingHorizontal:12});return[O(t)]})),H=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t},B={success:c.Z,info:l.Z,error:a.Z,warning:s.Z},M=function(n){var e=n.icon,t=n.prefixCls,o=n.type,c=B[o]||null;return e?(0,v.wm)(e,m.createElement("span",{className:"".concat(t,"-icon")},e),(function(){return{className:d()("".concat(t,"-icon"),(0,r.Z)({},e.props.className,e.props.className))}})):m.createElement(c,{className:"".concat(t,"-icon")})},L=function(n){var e=n.isClosable,t=n.closeText,o=n.prefixCls,r=n.closeIcon,c=n.handleClose;return e?m.createElement("button",{type:"button",onClick:c,className:"".concat(o,"-close-icon"),tabIndex:0},t?m.createElement("span",{className:"".concat(o,"-close-text")},t):r):null},T=function(n){var e,t=n.description,c=n.prefixCls,a=n.message,s=n.banner,l=n.className,u=n.rootClassName,v=n.style,h=n.onMouseEnter,Z=n.onMouseLeave,b=n.onClick,x=n.afterClose,y=n.showIcon,C=n.closable,E=n.closeText,w=n.closeIcon,S=void 0===w?m.createElement(i.Z,null):w,j=n.action,I=H(n,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),N=m.useState(!1),k=(0,o.Z)(N,2),O=k[0],B=k[1],T=m.useRef(),W=m.useContext(p.E_),R=W.getPrefixCls,P=W.direction,D=R("alert",c),G=z(D),X=(0,o.Z)(G,2),_=X[0],A=X[1],U=function(n){var e;B(!0),null===(e=I.onClose)||void 0===e||e.call(I,n)},V=!!E||C,q=function(){var n=I.type;return void 0!==n?n:s?"warning":"info"}(),F=!(!s||void 0!==y)||y,J=d()(D,"".concat(D,"-").concat(q),(e={},(0,r.Z)(e,"".concat(D,"-with-description"),!!t),(0,r.Z)(e,"".concat(D,"-no-icon"),!F),(0,r.Z)(e,"".concat(D,"-banner"),!!s),(0,r.Z)(e,"".concat(D,"-rtl"),"rtl"===P),e),l,u,A),K=(0,g.Z)(I);return _(m.createElement(f.ZP,{visible:!O,motionName:"".concat(D,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(n){return{maxHeight:n.offsetHeight}},onLeaveEnd:x},(function(n){var e=n.className,o=n.style;return m.createElement("div",Object.assign({ref:T,"data-show":!O,className:d()(J,e),style:Object.assign(Object.assign({},v),o),onMouseEnter:h,onMouseLeave:Z,onClick:b,role:"alert"},K),F?m.createElement(M,{description:t,icon:I.icon,prefixCls:D,type:q}):null,m.createElement("div",{className:"".concat(D,"-content")},a?m.createElement("div",{className:"".concat(D,"-message")},a):null,t?m.createElement("div",{className:"".concat(D,"-description")},t):null),j?m.createElement("div",{className:"".concat(D,"-action")},j):null,m.createElement(L,{isClosable:!!V,closeText:E,prefixCls:D,closeIcon:S,handleClose:U}))})))};T.ErrorBoundary=C;var W=T},22490:function(n,e,t){t.r(e),e.default={}}}]);