"use strict";(self.webpackChunkreact18=self.webpackChunkreact18||[]).push([[1296],{21296:function(e,n,t){t.r(n);var o=t(74165),r=t(15861),c=t(93433),a=t(1413),l=t(29439),i=t(34706),s=t(48754),u=t(93098),d=t(93510),f=t(76480),p=t(55444),g=t(74166),h=t(2066),b=t(38153),v=t(10161);n.default=(0,s.$j)((function(e){return(0,a.Z)((0,a.Z)({},e.tagsView),e.permission)}))((function(e){var n=e.tags,t=e.dispatch,s=e.defaultTags,C=e.routes,m=e.allRedirects,Z=(0,i.useRef)(),k=(0,u.TH)().pathname,x=(0,u.s0)(),S=(0,i.useRef)(),y=(0,i.useState)(!1),T=(0,l.Z)(y,2),E=T[0],_=T[1],j=(0,i.useState)(0),w=(0,l.Z)(j,2),O=w[0],N=w[1],P=(0,i.useState)(0),A=(0,l.Z)(P,2),D=A[0],H=A[1],V=(0,i.useState)({}),I=(0,l.Z)(V,2),R=I[0],z=I[1],B=!1,L=function(e){var n=m.find((function(n){return n.path===e}));return n&&n.redirect?n.redirect:e},W=function e(n,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return n.forEach((function(n){var r=n.children,c=n.path,l=n.redirect;if(t==c&&!o.find((function(e){return e.path==c})))if(l&&r&&r.length>0){var i=r.find((function(e){return e.path==l}));o.push((0,a.Z)({},i))}else o.push((0,a.Z)({},n));r&&r.length>0&&e(r,t,o)})),o},F=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.forEach((function(n){var o=n.children;!0===n.affix&&t.push((0,a.Z)((0,a.Z)({},n),{},{unRemove:!0})),o&&o.length>0&&e(o,t)})),t},M=(0,i.useCallback)((function(){if(!B){var e=F(C,[]),n=e.length>0?e:[{path:"/dashboard/index",title:"\u9996\u9875"}],o=L(k),r=W(C,o,(0,c.Z)(n));t((0,f.UPDATE_TAGS)(r)),t((0,f.SET_DEFAULT_TAGS)(n))}}),[]);(0,i.useEffect)((function(){return M(),function(){return B=!0}}),[]),(0,i.useEffect)((function(){var e=L(k),o=W(C,e,(0,c.Z)(n));t((0,f.UPDATE_TAGS)(o))}),[k]);var G=(0,i.useMemo)((function(){return n.filter((function(e){return!(0,h.isExternal)(e.path)}))}),[n]),U=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(n,r){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t((0,f.DELETE_TAGS)(r)),Q(r.path);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),X=function(){return _(!1)},Q=function(e){var n=G.length;if(!(n<=0)){var t,o=G[n-1].path;t=e==k?o==k?n>=2?G[n-2].path:G[0].path:G[n-1].path:k,x(t)}};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.$B,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,hideTracksWhenNotNeeded:!0,renderView:function(e){return(0,v.jsx)("div",(0,a.Z)((0,a.Z)({},e),{},{className:b.default.scrollbarContainer}))},renderTrackVertical:function(e){return(0,v.jsx)("div",(0,a.Z)((0,a.Z)({},e),{},{className:b.default.scrollbarTrackVertical}))},children:(0,v.jsx)("ul",{className:b.default.tagsWrap,ref:Z,children:G.length>0&&G.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(g.Z,{onClose:function(n){return U(n,e)},closable:!0!==e.unRemove,onClick:function(){return n=e.path,void x(n);var n},onContextMenu:function(n){return function(e,n){e.preventDefault();var t=e.clientX,o=e.clientY,r=Z.current,c=r.getBoundingClientRect().left,a=r.offsetWidth-105,l=t-c+15;N(l>a?a:l),H(o),_(!0),z(n)}(n,e)},color:k===e.path?"#55acee":"",children:(0,v.jsxs)(d.rU,{to:e.path,children:[k===e.path?(0,v.jsx)("span",{className:b.default.active}):null,e.title]})})},e.path)}))})}),E?(0,v.jsxs)("ul",{className:b.default.contextmenu,style:{left:"".concat(O,"px"),top:"".concat(D,"px")},ref:S,children:[(0,v.jsx)("li",{onClick:function(){t((0,f.CLOSE_OTHERS_TAGS)(R)),x(R.path),X()},children:"\u5173\u95ed\u5176\u4ed6"}),(0,v.jsx)("li",{onClick:function(){t((0,f.CLEAR_ALL_TAGS)()),x(s[0].path),X()},children:"\u5173\u95ed\u6240\u6709"})]}):null]})}))},74166:function(e,n,t){t.d(n,{Z:function(){return T}});var o=t(4942),r=t(29439),c=t(36827),a=t(23399),l=t.n(a),i=t(34706),s=t(83133),u=t(24747),d=t(21571);var f=t(53983),p=t(24076),g=t(12316),h=t(93537),b=function(e,n,t){var r,c="string"!==typeof(r=t)?r:r.charAt(0).toUpperCase()+r.slice(1);return(0,o.Z)({},"".concat(e.componentCls,"-").concat(n),{color:e["color".concat(t)],background:e["color".concat(c,"Bg")],borderColor:e["color".concat(c,"Border")]})},v=function(e){return(0,p.Z)(e,(function(n,t){var r=t.textColor,c=t.lightBorderColor,a=t.lightColor,l=t.darkColor;return(0,o.Z)({},"".concat(e.componentCls,"-").concat(n),(0,o.Z)({color:r,background:a,borderColor:c,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l}},"&".concat(e.componentCls,"-borderless"),{borderColor:"transparent"}))}))},C=function(e){var n,t,r,c=e.paddingXXS,a=e.lineWidth,l=e.tagPaddingHorizontal,i=e.componentCls,s=l-a,u=c-a;return r={},(0,o.Z)(r,i,Object.assign(Object.assign({},(0,f.Wf)(e)),(t={display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:s,fontSize:e.tagFontSize,lineHeight:"".concat(e.tagLineHeight,"px"),whiteSpace:"nowrap",background:e.tagDefaultBg,border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,opacity:1,transition:"all ".concat(e.motionDurationMid),textAlign:"start"},(0,o.Z)(t,"&".concat(i,"-rtl"),{direction:"rtl"}),(0,o.Z)(t,"&, a, a:hover",{color:e.tagDefaultColor}),(0,o.Z)(t,"".concat(i,"-close-icon"),{marginInlineStart:u,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:"all ".concat(e.motionDurationMid),"&:hover":{color:e.colorTextHeading}}),(0,o.Z)(t,"&".concat(i,"-has-color"),(0,o.Z)({borderColor:"transparent"},"&, a, a:hover, ".concat(e.iconCls,"-close, ").concat(e.iconCls,"-close:hover"),{color:e.colorTextLightSolid})),(0,o.Z)(t,"&-checkable",(n={backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer"},(0,o.Z)(n,"&:not(".concat(i,"-checkable-checked):hover"),{color:e.colorPrimary,backgroundColor:e.colorFillSecondary}),(0,o.Z)(n,"&:active, &-checked",{color:e.colorTextLightSolid}),(0,o.Z)(n,"&-checked",{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}}),(0,o.Z)(n,"&:active",{backgroundColor:e.colorPrimaryActive}),n)),(0,o.Z)(t,"&-hidden",{display:"none"}),(0,o.Z)(t,"> ".concat(e.iconCls," + span, > span + ").concat(e.iconCls),{marginInlineStart:s}),t))),(0,o.Z)(r,"".concat(i,"-borderless"),{borderColor:"transparent",background:e.tagBorderlessBg}),r},m=(0,g.Z)("Tag",(function(e){var n=e.fontSize,t=e.lineHeight,o=e.lineWidth,r=e.fontSizeIcon,c=Math.round(n*t),a=e.fontSizeSM,l=c-2*o,i=e.colorFillQuaternary,s=e.colorText,u=(0,h.TS)(e,{tagFontSize:a,tagLineHeight:l,tagDefaultBg:i,tagDefaultColor:s,tagIconSize:r-2*o,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[C(u),v(u),b(u,"success","Success"),b(u,"processing","Info"),b(u,"error","Error"),b(u,"warning","Warning")]})),Z=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},k=function(e){var n,t=e.prefixCls,c=e.className,a=e.checked,s=e.onChange,u=e.onClick,f=Z(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,i.useContext(d.E_).getPrefixCls)("tag",t),g=m(p),h=(0,r.Z)(g,2),b=h[0],v=h[1],C=l()(p,(n={},(0,o.Z)(n,"".concat(p,"-checkable"),!0),(0,o.Z)(n,"".concat(p,"-checkable-checked"),a),n),c,v);return b(i.createElement("span",Object.assign({},f,{className:C,onClick:function(e){null===s||void 0===s||s(!a),null===u||void 0===u||u(e)}})))},x=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},S=function(e,n){var t,a=e.prefixCls,f=e.className,p=e.rootClassName,g=e.style,h=e.children,b=e.icon,v=e.color,C=e.onClose,Z=e.closeIcon,k=e.closable,S=void 0!==k&&k,y=e.bordered,T=void 0===y||y,E=x(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),_=i.useContext(d.E_),j=_.getPrefixCls,w=_.direction,O=i.useState(!0),N=(0,r.Z)(O,2),P=N[0],A=N[1];i.useEffect((function(){"visible"in E&&A(E.visible)}),[E.visible]);var D=(0,s.o2)(v)||(0,s.yT)(v),H=Object.assign({backgroundColor:v&&!D?v:void 0},g),V=j("tag",a),I=m(V),R=(0,r.Z)(I,2),z=R[0],B=R[1],L=l()(V,(t={},(0,o.Z)(t,"".concat(V,"-").concat(v),D),(0,o.Z)(t,"".concat(V,"-has-color"),v&&!D),(0,o.Z)(t,"".concat(V,"-hidden"),!P),(0,o.Z)(t,"".concat(V,"-rtl"),"rtl"===w),(0,o.Z)(t,"".concat(V,"-borderless"),!T),t),f,p,B),W=function(e){e.stopPropagation(),null===C||void 0===C||C(e),e.defaultPrevented||A(!1)},F=i.useMemo((function(){return S?Z?i.createElement("span",{className:"".concat(V,"-close-icon"),onClick:W},Z):i.createElement(c.Z,{className:"".concat(V,"-close-icon"),onClick:W}):null}),[S,Z,V,W]),M="function"===typeof E.onClick||h&&"a"===h.type,G=b||null,U=G?i.createElement(i.Fragment,null,G,i.createElement("span",null,h)):h,X=i.createElement("span",Object.assign({},E,{ref:n,className:L,style:H}),U,F);return z(M?i.createElement(u.Z,null,X):X)},y=i.forwardRef(S);y.CheckableTag=k;var T=y},38153:function(e,n,t){t.r(n),n.default={tagsViewContainer:"tagsView_tagsViewContainer__soIQo",tagsWrap:"tagsView_tagsWrap__zuN-k",active:"tagsView_active__RZvQi",scrollbarContainer:"tagsView_scrollbarContainer__1HR3S",scrollbarTrackVertical:"tagsView_scrollbarTrackVertical__Yd8wt",contextmenu:"tagsView_contextmenu__ur7Cn"}}}]);