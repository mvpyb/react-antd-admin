(this["webpackJsonpreact-ant-admin"]=this["webpackJsonpreact-ant-admin"]||[]).push([[13],{1217:function(e,t,n){"use strict";n.r(t);n(220);var r=n(175),a=(n(508),n(510)),o=(n(509),n(511)),c=(n(155),n(52)),i=n(32),u=n(0),l=n.n(u),p=n(14),s=n(67),f=n(506),m=n.n(f),d=n(764),h=n.n(d);n(765);t.default=function(e){var t=Object(p.f)(),n=Object(u.useState)(!1),f=Object(i.a)(n,2),d=f[0],E=f[1];return l.a.createElement(m.a,{title:"404"},l.a.createElement("div",{className:"errPage-container app-container"},l.a.createElement(c.a,{type:"primary",onClick:function(){t("/")}},"\u8fd4\u56de\u4e3b\u9875"),l.a.createElement(a.a,null,l.a.createElement(o.a,{span:12},l.a.createElement("h1",{className:"text-jumbo text-ginormous"},"Oops!"),l.a.createElement("h2",null,"\u4f60\u6ca1\u6709\u6743\u9650\u53bb\u8be5\u9875\u9762"),l.a.createElement("h6",null,"\u5982\u6709\u4e0d\u6ee1\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,"\u6216\u8005\u4f60\u53ef\u4ee5\u53bb:"),l.a.createElement("li",{className:"link-type"},l.a.createElement(s.b,{to:"/"},"\u56de\u9996\u9875")),l.a.createElement("li",{className:"link-type"},l.a.createElement("a",{href:"https://github.com/mvpyb"},"\u53bb\u6211\u4e3b\u9875")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!",onClick:function(e){e.preventDefault(),E(!0)}},"\u70b9\u6211\u770b\u56fe")))),l.a.createElement(o.a,{span:12},l.a.createElement("img",{src:"".concat(h.a,"?s=").concat((new Date).valueOf()),width:"313",height:"428",alt:"Girl has dropped her ice cream."}))),l.a.createElement(r.a,{onCancel:function(){E(!1)},visible:d,title:"\u968f\u4fbf\u770b",wrapClassName:"more-imgs",footer:null},l.a.createElement("img",{src:"https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646",className:"pan-img"}))))}},506:function(e,t,n){"use strict";var r=n(0),a=n(74),o=n(517);function c(){}c.prototype=Object.create(r.Component.prototype),c.displayName="DocumentTitle",c.propTypes={title:a.string.isRequired},c.prototype.render=function(){return this.props.children?r.Children.only(this.props.children):null},e.exports=o((function(e){var t=e[e.length-1];if(t)return t.title}),(function(e){var t=e||"";t!==document.title&&(document.title=t)}))(c)},508:function(e,t,n){"use strict";n(46),n(507)},509:function(e,t,n){"use strict";n(46),n(507)},510:function(e,t,n){"use strict";var r=n(1108);t.a=r.a},511:function(e,t,n){"use strict";var r=n(606);t.a=r.a},517:function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var a=n(0),o=r(a),c=r(n(107));function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,p=[];function s(){l=e(p.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,p=[],e};var i=a.prototype;return i.shouldComponentUpdate=function(e){return!c(e,this.props)},i.componentWillMount=function(){p.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.Component);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",u),f}}},764:function(e,t,n){e.exports=n.p+"089007e721e1f22809c0313b670a36f1.gif"},765:function(e,t,n){}}]);