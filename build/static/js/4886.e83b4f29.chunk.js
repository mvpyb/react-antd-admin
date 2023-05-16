"use strict";(self.webpackChunkreact18=self.webpackChunkreact18||[]).push([[4886,822],{14668:function(e,n,t){t.r(n);var r=t(29439),o=t(34706),i=t(84587),c=t(35099),a=t(46435),u=t(21566),l=t(19297),f=t(40822),s=t(10161);n.default=function(){var e=(0,o.useState)(!1),n=(0,r.Z)(e,2),t=n[0],d=n[1],m=i.Z.isEnabled,v=function(){d(i.Z.isFullscreen)},h=function(){if(!m)return c.ZP.warning("\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\uff0c\u8bf7\u66f4\u6362\u9ad8\u7248\u672c\u6d4f\u89c8\u5668"),!1;i.Z.toggle()};(0,o.useEffect)((function(){return m&&i.Z.on("change",v),function(){m&&i.Z.off("change",v)}}),[]);var g=t?"\u53d6\u6d88\u5168\u5c4f":"\u5168\u5c4f";return(0,s.jsx)("div",{className:f.default.fullScreenSection,children:(0,s.jsx)(a.Z,{placement:"bottom",title:g,children:t?(0,s.jsx)(u.Z,{onClick:h}):(0,s.jsx)(l.Z,{onClick:h})})})}},21566:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),o=t(34706),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"}}]},name:"fullscreen-exit",theme:"outlined"},c=t(70237),a=function(e,n){return o.createElement(c.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};a.displayName="FullscreenExitOutlined";var u=o.forwardRef(a)},19297:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),o=t(34706),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"}}]},name:"fullscreen",theme:"outlined"},c=t(70237),a=function(e,n){return o.createElement(c.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};a.displayName="FullscreenOutlined";var u=o.forwardRef(a)},55764:function(e,n,t){t.d(n,{mL:function(){return u},q0:function(){return a}});var r=function(){return{height:0,opacity:0}},o=function(e){return{height:e.scrollHeight,opacity:1}},i=function(e){return{height:e?e.offsetHeight:0}},c=function(e,n){return!0===(null===n||void 0===n?void 0:n.deadline)||"height"===n.propertyName},a=function(e){return void 0===e||"topLeft"!==e&&"topRight"!==e?"slide-up":"slide-down"},u=function(e,n,t){return void 0!==t?t:"".concat(e,"-").concat(n)};n.ZP=function(){return{motionName:"".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ant","-motion-collapse"),onAppearStart:r,onEnterStart:r,onAppearActive:o,onEnterActive:o,onLeaveStart:i,onLeaveActive:r,onAppearEnd:c,onEnterEnd:c,onLeaveEnd:c,motionDeadline:500}}},15186:function(e,n,t){t.d(n,{R:function(){return o}});var r=t(4942),o=function(e,n,t,o){var i,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4]?"&":"";return i={},(0,r.Z)(i,"\n      ".concat(c).concat(e,"-enter,\n      ").concat(c).concat(e,"-appear\n    "),Object.assign(Object.assign({},function(e){return{animationDuration:e,animationFillMode:"both"}}(o)),{animationPlayState:"paused"})),(0,r.Z)(i,"".concat(c).concat(e,"-leave"),Object.assign(Object.assign({},function(e){return{animationDuration:e,animationFillMode:"both"}}(o)),{animationPlayState:"paused"})),(0,r.Z)(i,"\n      ".concat(c).concat(e,"-enter").concat(e,"-enter-active,\n      ").concat(c).concat(e,"-appear").concat(e,"-appear-active\n    "),{animationName:n,animationPlayState:"running"}),(0,r.Z)(i,"".concat(c).concat(e,"-leave").concat(e,"-leave-active"),{animationName:t,animationPlayState:"running",pointerEvents:"none"}),i}},8751:function(e,n,t){t.d(n,{Z:function(){return E}});var r=t(87462),o=t(34706),i=t(70059),c=(t(93198),t(1413)),a=t(67700),u=t(78569),l=t(25659),f=new Map;var s=new l.Z((function(e){e.forEach((function(e){var n,t=e.target;null===(n=f.get(t))||void 0===n||n.forEach((function(e){return e(t)}))}))}));var d=t(15671),m=t(43144),v=t(60136),h=t(29388),g=function(e){(0,v.Z)(t,e);var n=(0,h.Z)(t);function t(){return(0,d.Z)(this,t),n.apply(this,arguments)}return(0,m.Z)(t,[{key:"render",value:function(){return this.props.children}}]),t}(o.Component),p=o.createContext(null);function b(e,n){var t=e.children,r=e.disabled,i=o.useRef(null),l=o.useRef(null),d=o.useContext(p),m="function"===typeof t,v=m?t(i):t,h=o.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),b=!m&&o.isValidElement(v)&&(0,a.Yr)(v),w=b?v.ref:null,k=o.useMemo((function(){return(0,a.sQ)(w,i)}),[w,i]),Z=function(){return(0,u.Z)(i.current)||(0,u.Z)(l.current)};o.useImperativeHandle(n,(function(){return Z()}));var E=o.useRef(e);E.current=e;var y=o.useCallback((function(e){var n=E.current,t=n.onResize,r=n.data,o=e.getBoundingClientRect(),i=o.width,a=o.height,u=e.offsetWidth,l=e.offsetHeight,f=Math.floor(i),s=Math.floor(a);if(h.current.width!==f||h.current.height!==s||h.current.offsetWidth!==u||h.current.offsetHeight!==l){var m={width:f,height:s,offsetWidth:u,offsetHeight:l};h.current=m;var v=u===Math.round(i)?i:u,g=l===Math.round(a)?a:l,p=(0,c.Z)((0,c.Z)({},m),{},{offsetWidth:v,offsetHeight:g});null===d||void 0===d||d(p,e,r),t&&Promise.resolve().then((function(){t(p,e)}))}}),[]);return o.useEffect((function(){var e,n,t=Z();return t&&!r&&(e=t,n=y,f.has(e)||(f.set(e,new Set),s.observe(e)),f.get(e).add(n)),function(){return function(e,n){f.has(e)&&(f.get(e).delete(n),f.get(e).size||(s.unobserve(e),f.delete(e)))}(t,y)}}),[i.current,r]),o.createElement(g,{ref:l},b?o.cloneElement(v,{ref:k}):v)}var w=o.forwardRef(b);function k(e,n){var t=e.children;return("function"===typeof t?[t]:(0,i.Z)(t)).map((function(t,i){var c=(null===t||void 0===t?void 0:t.key)||"".concat("rc-observer-key","-").concat(i);return o.createElement(w,(0,r.Z)({},e,{key:c,ref:0===i?n:void 0}),t)}))}var Z=o.forwardRef(k);Z.Collection=function(e){var n=e.children,t=e.onBatchResize,r=o.useRef(0),i=o.useRef([]),c=o.useContext(p),a=o.useCallback((function(e,n,o){r.current+=1;var a=r.current;i.current.push({size:e,element:n,data:o}),Promise.resolve().then((function(){a===r.current&&(null===t||void 0===t||t(i.current),i.current=[])})),null===c||void 0===c||c(e,n,o)}),[t,c]);return o.createElement(p.Provider,{value:a},n)};var E=Z},35411:function(e,n){n.Z=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var n=e.getBBox(),t=n.width,r=n.height;if(t||r)return!0}if(e.getBoundingClientRect){var o=e.getBoundingClientRect(),i=o.width,c=o.height;if(i||c)return!0}}return!1}},52883:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(34706);function o(e){var n=r.useRef();n.current=e;var t=r.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return t}},65829:function(e,n,t){t.d(n,{o:function(){return i}});var r=t(34706),o=(0,t(93616).Z)()?r.useLayoutEffect:r.useEffect;n.Z=o;var i=function(e,n){var t=r.useRef(!0);o((function(){if(!t.current)return e()}),n),o((function(){return t.current=!1,function(){t.current=!0}}),[])}},7455:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(29439),o=t(52883),i=t(65829),c=t(32834);function a(e){return void 0!==e}function u(e,n){var t=n||{},u=t.defaultValue,l=t.value,f=t.onChange,s=t.postState,d=(0,c.Z)((function(){return a(l)?l:a(u)?"function"===typeof u?u():u:"function"===typeof e?e():e})),m=(0,r.Z)(d,2),v=m[0],h=m[1],g=void 0!==l?l:v,p=s?s(g):g,b=(0,o.Z)(f),w=(0,c.Z)([g]),k=(0,r.Z)(w,2),Z=k[0],E=k[1];return(0,i.o)((function(){var e=Z[0];v!==e&&b(v,e)}),[Z]),(0,i.o)((function(){a(l)||h(l)}),[l]),[p,(0,o.Z)((function(e,n){h(e,n),E([g],n)}))]}},55081:function(e,n){n.Z=function(){if("undefined"===typeof navigator||"undefined"===typeof window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null===e||void 0===e?void 0:e.substr(0,4))}},40822:function(e,n,t){t.r(n),n.default={fullScreenSection:"FullScreen_fullScreenSection__so0rH"}},84587:function(e,n,t){var r=t(29439),o=t(37762),i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],c=function(){if("undefined"===typeof document)return!1;for(var e=i[0],n={},t=0,c=i;t<c.length;t++){var a=c[t];if((null===a||void 0===a?void 0:a[1])in document){var u,l=(0,o.Z)(a.entries());try{for(l.s();!(u=l.n()).done;){var f=(0,r.Z)(u.value,2),s=f[0],d=f[1];n[e[s]]=d}}catch(m){l.e(m)}finally{l.f()}return n}}return!1}(),a={change:c.fullscreenchange,error:c.fullscreenerror},u={request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement,n=arguments.length>1?arguments[1]:void 0;return new Promise((function(t,r){var o=function e(){u.off("change",e),t()};u.on("change",o);var i=e[c.requestFullscreen](n);i instanceof Promise&&i.then(o).catch(r)}))},exit:function(){return new Promise((function(e,n){if(u.isFullscreen){var t=function n(){u.off("change",n),e()};u.on("change",t);var r=document[c.exitFullscreen]();r instanceof Promise&&r.then(t).catch(n)}else e()}))},toggle:function(e,n){return u.isFullscreen?u.exit():u.request(e,n)},onchange:function(e){u.on("change",e)},onerror:function(e){u.on("error",e)},on:function(e,n){var t=a[e];t&&document.addEventListener(t,n,!1)},off:function(e,n){var t=a[e];t&&document.removeEventListener(t,n,!1)},raw:c};Object.defineProperties(u,{isFullscreen:{get:function(){return Boolean(document[c.fullscreenElement])}},element:{enumerable:!0,get:function(){var e;return null!==(e=document[c.fullscreenElement])&&void 0!==e?e:void 0}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[c.fullscreenEnabled])}}}),c||(u={isEnabled:!1}),n.Z=u}}]);