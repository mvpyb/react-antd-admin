(this["webpackJsonpreact-ant-admin"]=this["webpackJsonpreact-ant-admin"]||[]).push([[16],{1828:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(235),o=n.n(r),a=n(664),i=n.n(a),c=n(856),u=n.n(c),s=n(0),l=n.n(s),f=n(572);function p(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var d={};function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&d[t[0]]||("string"===typeof t[0]&&(d[t[0]]=new Date),p.apply(void 0,t))}function b(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return y("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!i(r,e)||o&&!i(a,e))))}function g(e){return e.displayName||e.name||("string"===typeof e&&e.length>0?e:"Unknown")}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(s.useContext)(f.a)||{},o=r.i18n,a=r.defaultNS,c=n||o||Object(f.d)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new f.b),!c){y("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},l=[u,{},!1];return l.t=u,l.i18n={},l.ready=!1,l}c.options.react&&void 0!==c.options.react.wait&&y("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=v(v(v({},Object(f.c)()),c.options.react),t),d=p.useSuspense,g=p.keyPrefix,h=e||a||c.options&&c.options.defaultNS;h="string"===typeof h?[h]:h||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(h);var O=(c.isInitialized||c.initializedStoreOnce)&&h.every((function(e){return m(e,c,p)}));function w(){return c.getFixedT(null,"fallback"===p.nsMode?h:h[0],g)}var x=Object(s.useState)(w),j=i()(x,2),E=j[0],S=j[1],C=Object(s.useRef)(!0);Object(s.useEffect)((function(){var e=p.bindI18n,t=p.bindI18nStore;function n(){C.current&&S(w)}return C.current=!0,O||d||b(c,h,(function(){C.current&&S(w)})),e&&c&&c.on(e,n),t&&c&&c.store.on(t,n),function(){C.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,n)})),t&&c&&t.split(" ").forEach((function(e){return c.store.off(e,n)}))}}),[c,h.join()]);var P=Object(s.useRef)(!0);Object(s.useEffect)((function(){C.current&&!P.current&&S(w),P.current=!1}),[c]);var _=[E,c,O];if(_.t=E,_.i18n=c,_.ready=O,O)return _;if(!O&&!d)return _;throw new Promise((function(e){b(c,h,(function(){e()}))}))}var w=["forwardedRef"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function r(r){var o=r.forwardedRef,a=u()(r,w),c=O(e,a),s=i()(c,3),f=s[0],p=s[1],d=s[2],y=j(j({},a),{},{t:f,i18n:p,tReady:d});return t.withRef&&o?y.ref=o:!t.withRef&&o&&(y.forwardedRef=o),l.a.createElement(n,y)}r.displayName="withI18nextTranslation(".concat(g(n),")"),r.WrappedComponent=n;return t.withRef?l.a.forwardRef((function(e,t){return l.a.createElement(r,Object.assign({},e,{forwardedRef:t}))})):r}}},1835:function(e,t,n){"use strict";n.r(t);n(559);var r=n(561),o=(n(575),n(578)),a=(n(560),n(562)),i=(n(564),n(563)),c=(n(565),n(566)),u=(n(316),n(172)),s=n(25),l=n(0),f=n.n(l),p=n(624),d=n.n(p),y=n(1828);t.default=Object(y.a)()((function(e){var t=e.t,n=e.i18n,p=Object(l.useState)("zh"),y=Object(s.a)(p,2),b=y[0],m=y[1];Object(l.useEffect)((function(){n.changeLanguage(b)}),[b]);return f.a.createElement(d.a,{title:"\u56fd\u9645\u5316"},f.a.createElement("div",{className:"app-container"},f.a.createElement(r.a,{gutter:16},f.a.createElement(a.a,{span:24},f.a.createElement("div",null,f.a.createElement(i.a,{title:t("i18n.title"),style:{width:600,margin:"50px auto"},hoverable:!0},f.a.createElement(u.a.Group,{value:b,buttonStyle:"solid",onChange:function(e){return function(e){m(e.target.value)}(e)}},f.a.createElement(u.a.Button,{value:"zh"},"\u4e2d\u6587"),f.a.createElement(u.a.Button,{value:"en"},"English"),f.a.createElement(u.a.Button,{value:"es"},"Espa\xf1ol"),f.a.createElement(u.a.Button,{value:"ja"},"\u65e5\u672c\u8a9e")),f.a.createElement(c.a,{message:t("i18n.note"),type:"info",style:{marginTop:"50px"}})))),f.a.createElement(a.a,{span:24},f.a.createElement("div",null,f.a.createElement(o.b,{itemLayout:"horizontal",dataSource:[{title:"web RTC",content:"i18n.webRTC",more:"https://developer.mozilla.org/zh-CN/docs/Glossary/WebRTC"},{title:"webGL",content:"i18n.WebGL",more:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API"}],renderItem:function(e){return f.a.createElement(o.b.Item,null,f.a.createElement(o.b.Item.Meta,{title:f.a.createElement("a",{href:e.more,target:"_blank",rel:"noreferrer"},e.title),description:t(e.content)}))}}))))))}))},624:function(e,t,n){"use strict";var r=n(0),o=n(139),a=n(630);function i(){}i.prototype=Object.create(r.Component.prototype),i.displayName="DocumentTitle",i.propTypes={title:o.string.isRequired},i.prototype.render=function(){return this.props.children?r.Children.only(this.props.children):null},e.exports=a((function(e){var t=e[e.length-1];if(t)return t.title}),(function(e){var t=e||"";t!==document.title&&(document.title=t)}))(i)},630:function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var o=n(0),a=r(o),i=r(n(104));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function f(){s=e(l.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){l.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},c.render=function(){return a.createElement(r,this.props)},o}(o.Component);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(p,"canUseDOM",u),p}}},664:function(e,t,n){var r=n(754),o=n(755),a=n(726),i=n(756);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},726:function(e,t,n){var r=n(727);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},727:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},754:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},755:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},756:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},856:function(e,t,n){var r=n(857);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.__esModule=!0,e.exports.default=e.exports},857:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.__esModule=!0,e.exports.default=e.exports}}]);