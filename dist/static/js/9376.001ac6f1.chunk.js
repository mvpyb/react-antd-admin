"use strict";(self.webpackChunkreact_ant_admin=self.webpackChunkreact_ant_admin||[]).push([[9376,4585],{84585:function(t,e,n){n.r(e),n.d(e,{getDashboardList:function(){return c},getTableData:function(){return l}});for(var r=n(6613),i=n.n(r),a=(n(77494),[]),s=0;s<20;s++)a.push(i().mock({id:"@increment",title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)",date:"@datetime"}));for(var o=[],u=0;u<7;u++)o.push(i().mock({id:u,date:'@date("yyyy-MM-dd")',name:"@cname",status:u%2?"Completed":"Pending",price:"@integer(300, 5000)",order_no:"@natural",address:"@county(true)"}));function l(){return Promise.resolve({code:200,message:"success",data:{list:a}})}function c(){return Promise.resolve({code:200,message:"success",data:{list:o}})}},99376:function(t,e,n){n.r(e);var r=n(74165),i=n(15861),a=n(15671),s=n(43144),o=n(60136),u=n(29388),l=n(34706),c=n(74166),f=n(9172),p=n(78698),d=n(84585),h=n(10161),m=[{title:"Date",dataIndex:"date",ellipsis:!0,key:"date"},{title:"Order_No",dataIndex:"order_no",key:"order_no",ellipsis:!0},{title:"Status",key:"status",dataIndex:"status",width:100,ellipsis:!0,render:function(t){return(0,h.jsx)(c.Z,{color:"pending"===t.toLocaleLowerCase()?"magenta":"green",children:t},t)}},{title:"Price",dataIndex:"price",key:"price",ellipsis:!0,render:function(t){return(0,h.jsx)(p.ZP,{start:1,end:t,decimals:2,duration:3,useEasing:!0,separator:",",decimal:".",prefix:"$",suffix:""})}},{title:"Name",dataIndex:"name",ellipsis:!0,key:"name"},{title:"Address",dataIndex:"address",key:"address",ellipsis:!0}],y=function(t){(0,o.Z)(n,t);var e=(0,u.Z)(n);function n(){var t;(0,a.Z)(this,n);for(var s=arguments.length,o=new Array(s),u=0;u<s;u++)o[u]=arguments[u];return(t=e.call.apply(e,[this].concat(o)))._isMounted=!1,t.state={list:[]},t.fetchData=(0,i.Z)((0,r.Z)().mark((function e(){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.getDashboardList)();case 3:n=e.sent,i=n.data.list,t._isMounted&&t.setState({list:i}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t._isMounted&&t.setState({list:[]});case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),t}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return(0,h.jsx)(f.Z,{columns:m,rowKey:"id",dataSource:this.state.list,pagination:!1})}}]),n}(l.Component);e.default=y},86861:function(t,e,n){n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.6.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,a,s=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],r=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){a="";for(var u=3,l=0,c=0,f=n.length;c<f;++c)i.options.useIndianSeparators&&4===c&&(u=2,l=1),0!==c&&l%u==0&&(a=i.options.separator+a),l++,a=n[f-c-1]+a;n=a}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),s+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error||(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},78698:function(t,e,n){var r=n(34706),i=n(86861);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a,s,o=[],u=!0,l=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(o.push(r.value),o.length!==e);u=!0);}catch(c){l=!0,i=c}finally{try{if(!u&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function d(t){var e=r.useRef(t);return p((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},y=function(t){var e=Object.fromEntries(Object.entries(t).filter((function(t){return void 0!==c(t,2)[1]}))),n=r.useMemo((function(){return s(s({},m),e)}),[t]),a=n.ref,o=n.startOnMount,u=n.enableReinitialize,f=n.delay,p=n.onEnd,y=n.onStart,g=n.onPauseResume,v=n.onReset,b=n.onUpdate,V=l(n,h),w=r.useRef(),E=r.useRef(),O=r.useRef(!1),S=d((function(){return function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,s=e.easingFn,o=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,f=e.separator,p=e.start,d=e.suffix,h=e.useEasing,m=e.useGrouping,y=e.useIndianSeparators,g=e.enableScrollSpy,v=e.scrollSpyDelay,b=e.scrollSpyOnce;return new i.CountUp(t,o,{startVal:p,duration:a,decimal:n,decimalPlaces:r,easingFn:s,formattingFn:u,numerals:l,separator:f,prefix:c,suffix:d,useEasing:h,useIndianSeparators:y,useGrouping:m,enableScrollSpy:g,scrollSpyDelay:v,scrollSpyOnce:b})}("string"===typeof a?a:a.current,V)})),x=d((function(t){var e=w.current;if(e&&!t)return e;var n=S();return w.current=n,n})),F=d((function(){var t=function(){return x(!0).start((function(){null===p||void 0===p||p({pauseResume:j,reset:P,start:D,update:A})}))};f&&f>0?E.current=setTimeout(t,1e3*f):t(),null===y||void 0===y||y({pauseResume:j,reset:P,update:A})})),j=d((function(){x().pauseResume(),null===g||void 0===g||g({reset:P,start:D,update:A})})),P=d((function(){x().el&&(E.current&&clearTimeout(E.current),x().reset(),null===v||void 0===v||v({pauseResume:j,start:D,update:A}))})),A=d((function(t){x().update(t),null===b||void 0===b||b({pauseResume:j,reset:P,start:D})})),D=d((function(){P(),F()})),R=d((function(t){o&&(t&&P(),F())}));return r.useEffect((function(){O.current?u&&R(!0):(O.current=!0,R())}),[u,O,R,f,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){P()}}),[P]),{start:D,pauseResume:j,reset:P,update:A,getCountUp:x}},g=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,a=t.children,o=t.style,c=l(t,g),f=r.useRef(null),p=r.useRef(!1),h=y(s(s({},c),{},{ref:f,startOnMount:"function"!==typeof a||0===t.delay,enableReinitialize:!1})),m=h.start,v=h.reset,b=h.update,V=h.pauseResume,w=h.getCountUp,E=d((function(){m()})),O=d((function(e){t.preserveValue||v(),b(e)})),S=d((function(){("function"!==typeof t.children||f.current instanceof Element)&&w()}));r.useEffect((function(){S()}),[S]),r.useEffect((function(){p.current&&O(t.end)}),[t.end,O]);var x=n&&t;return r.useEffect((function(){n&&p.current&&E()}),[E,n,x]),r.useEffect((function(){!n&&p.current&&E()}),[E,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){p.current=!0}),[]),"function"===typeof a?a({countUpRef:f,start:m,reset:v,update:b,pauseResume:V,getCountUp:w}):r.createElement("span",u({className:e,ref:f,style:o},i),"undefined"!==typeof t.start?w().formattingFn(t.start):"")}}}]);