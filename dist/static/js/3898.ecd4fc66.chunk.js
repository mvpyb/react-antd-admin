(self.webpackChunkreact_ant_admin=self.webpackChunkreact_ant_admin||[]).push([[3898,5600],{45600:function(t,e,o){"use strict";o.r(e);var r=o(41097);o(33645),o(53294),o(31912),o(16698),o(87944),o(19499),o(66249),e.default=r},53898:function(t,e,o){"use strict";o.r(e);var r=o(1413),n=o(15671),i=o(43144),a=o(60136),l=o(29388),c=o(34706),s=o(48754),u=o(45600),f=o(24757),d=o.n(f),h=o(10161),p=function(t){(0,a.Z)(o,t);var e=(0,l.Z)(o);function o(){var t;(0,n.Z)(this,o);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={chart:null},t}return(0,i.Z)(o,[{key:"componentDidMount",value:function(){var t=this;d()(this.initChart.bind(this),300)(),window.addEventListener("resize",(function(){return t.resize()}))}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){t.sidebarCollapsed!==this.props.sidebarCollapsed&&this.resize()}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"resize",value:function(){var t=this.state.chart;t&&d()(t.resize.bind(this),300)()}},{key:"dispose",value:function(){var t=this;this.state.chart&&(window.removeEventListener("resize",(function(){return t.resize()})),this.setState({chart:null}))}},{key:"setOptions",value:function(){this.state.chart.setOption({backgroundColor:"#394056",title:{top:20,text:"Requests",textStyle:{fontWeight:"normal",fontSize:16,color:"#F1F1F3"},left:"1%"},tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#57617B"}}},legend:{top:20,icon:"rect",itemWidth:14,itemHeight:5,itemGap:13,data:["CMCC","CTCC","CUCC"],right:"4%",textStyle:{fontSize:12,color:"#F1F1F3"}},grid:{top:100,left:"2%",right:"2%",bottom:"2%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#57617B"}},data:["13:00","13:05","13:10","13:15","13:20","13:25","13:30","13:35","13:40","13:45","13:50","13:55"]}],yAxis:[{type:"value",name:"(%)",axisTick:{show:!1},axisLine:{lineStyle:{color:"#57617B"}},axisLabel:{margin:10,fontSize:14},splitLine:{lineStyle:{color:"#57617B"}}}],series:[{name:"CMCC",type:"line",smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{width:1},areaStyle:{color:new u.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(137, 189, 27, 0.3)"},{offset:.8,color:"rgba(137, 189, 27, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10},itemStyle:{color:"rgb(137,189,27)",borderColor:"rgba(137,189,2,0.27)",borderWidth:12},data:[220,182,191,134,150,120,110,125,145,122,165,122]},{name:"CTCC",type:"line",smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{width:1},areaStyle:{color:new u.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0, 136, 212, 0.3)"},{offset:.8,color:"rgba(0, 136, 212, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10},itemStyle:{color:"rgb(0,136,212)",borderColor:"rgba(0,136,212,0.2)",borderWidth:12},data:[120,110,125,145,122,165,122,220,182,191,134,150]},{name:"CUCC",type:"line",smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{width:1},areaStyle:{color:new u.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(219, 50, 51, 0.3)"},{offset:.8,color:"rgba(219, 50, 51, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10},itemStyle:{color:"rgb(219,50,51)",borderColor:"rgba(219,50,51,0.2)",borderWidth:12},data:[220,182,125,145,122,191,134,150,120,110,165,122]}]})}},{key:"initChart",value:function(){var t=this;this.el&&this.setState({chart:u.default.init(this.el,"macarons")},(function(){t.setOptions()}))}},{key:"render",value:function(){var t=this;return(0,h.jsx)("div",{style:{width:"100%",height:"calc(100vh - 100px)"},className:"app-container",children:(0,h.jsx)("div",{style:{width:"100%",height:"100%"},ref:function(e){return t.el=e}})})}}]),o}(c.Component);e.default=(0,s.$j)((function(t){return(0,r.Z)({},t.app)}))(p)},81667:function(t,e,o){var r=o(93700).Symbol;t.exports=r},76054:function(t,e,o){var r=o(81667),n=o(77776),i=o(72117),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?n(t):i(t)}},75288:function(t,e,o){var r="object"==typeof o.g&&o.g&&o.g.Object===Object&&o.g;t.exports=r},77776:function(t,e,o){var r=o(81667),n=Object.prototype,i=n.hasOwnProperty,a=n.toString,l=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,l),o=t[l];try{t[l]=void 0;var r=!0}catch(t){}var n=a.call(t);return r&&(e?t[l]=o:delete t[l]),n}},72117:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},93700:function(t,e,o){var r=o(75288),n="object"==typeof self&&self&&self.Object===Object&&self,i=r||n||Function("return this")();t.exports=i},24757:function(t,e,o){var r=o(23263),n=o(13511),i=o(79357),a=Math.max,l=Math.min;t.exports=function(t,e,o){var c,s,u,f,d,h,p=0,v=!1,y=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var o=c,r=s;return c=s=void 0,p=e,f=t.apply(r,o)}function g(t){var o=t-h;return void 0===h||o>=e||o<0||y&&t-p>=u}function S(){var t=n();if(g(t))return x(t);d=setTimeout(S,function(t){var o=e-(t-h);return y?l(o,u-(t-p)):o}(t))}function x(t){return d=void 0,b&&c?m(t):(c=s=void 0,f)}function C(){var t=n(),o=g(t);if(c=arguments,s=this,h=t,o){if(void 0===d)return function(t){return p=t,d=setTimeout(S,e),v?m(t):f}(h);if(y)return d=setTimeout(S,e),m(h)}return void 0===d&&(d=setTimeout(S,e)),f}return e=i(e)||0,r(o)&&(v=!!o.leading,u=(y="maxWait"in o)?a(i(o.maxWait)||0,e):u,b="trailing"in o?!!o.trailing:b),C.cancel=function(){void 0!==d&&clearTimeout(d),p=0,c=h=s=d=void 0},C.flush=function(){return void 0===d?f:x(n())},C}},23263:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},18294:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},86461:function(t,e,o){var r=o(76054),n=o(18294);t.exports=function(t){return"symbol"==typeof t||n(t)&&"[object Symbol]"==r(t)}},13511:function(t,e,o){var r=o(93700);t.exports=function(){return r.Date.now()}},79357:function(t,e,o){var r=o(23263),n=o(86461),i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(n(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=l.test(t);return o||c.test(t)?s(t.slice(2),o?2:8):a.test(t)?NaN:+t}}}]);