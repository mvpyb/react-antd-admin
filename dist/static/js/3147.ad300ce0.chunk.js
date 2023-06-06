"use strict";(self.webpackChunkreact_ant_admin=self.webpackChunkreact_ant_admin||[]).push([[3147,4585,4410],{84585:function(e,t,n){n.r(t),n.d(t,{getDashboardList:function(){return c},getTableData:function(){return d}});for(var a=n(6613),i=n.n(a),o=(n(77494),[]),r=0;r<20;r++)o.push(i().mock({id:"@increment",title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)",date:"@datetime"}));for(var s=[],l=0;l<7;l++)s.push(i().mock({id:l,date:'@date("yyyy-MM-dd")',name:"@cname",status:l%2?"Completed":"Pending",price:"@integer(300, 5000)",order_no:"@natural",address:"@county(true)"}));function d(){return Promise.resolve({code:200,message:"success",data:{list:o}})}function c(){return Promise.resolve({code:200,message:"success",data:{list:s}})}},84410:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var a=n(1413),i=n(81642),o=n(10161);function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){return t&&(0,i.Z)(t),(0,o.jsx)(e,(0,a.Z)({},n))}}},73147:function(e,t,n){n.r(t);var a=n(74165),i=n(15861),o=n(15671),r=n(43144),s=n(60136),l=n(29388),d=n(34706),c=n(87573),u=n(77759),h=n(84585),f=n(84410),x=n(29429),m=n(74166),g=n(36532),p=n(59855),v=n(11159),y=n(43459),w=n(27249),Z=n(6241),j=n(9172),k=n(10161),b=x.Z.Item,C=[{title:"Id",dataIndex:"id",key:"id",width:200,align:"center"},{title:"Title",dataIndex:"title",key:"title",width:200,align:"center"},{title:"Author",key:"author",dataIndex:"author",width:100,align:"center",render:function(e){return(0,k.jsx)(m.Z,{children:e},e)}},{title:"Readings",dataIndex:"readings",key:"readings",width:195,align:"center"},{title:"Date",dataIndex:"date",key:"date",width:195,align:"center"}],R=function(e){(0,s.Z)(d,e);var t=(0,l.Z)(d);function d(){var e;(0,o.Z)(this,d);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s)))._isMounted=!1,e.state={list:[],filename:"excel-file",autoWidth:!0,bookType:"xlsx",downloadLoading:!1,selectedRows:[],selectedRowKeys:[]},e.fetchData=(0,i.Z)((0,a.Z)().mark((function t(){var n,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,h.getTableData)();case 3:n=t.sent,i=n.data.list,e._isMounted&&e.setState({list:i}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e._isMounted&&e.setState({list:[]});case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.onSelectChange=function(t,n){e.setState({selectedRows:n,selectedRowKeys:t})},e.handleDownload=function(t){"selected"!==t||0!==e.state.selectedRowKeys.length?(e.setState({downloadLoading:!0}),Promise.all([n.e(6884),n.e(1437)]).then(n.bind(n,51437)).then((function(n){var a="all"===t?e.state.list:e.state.selectedRows,i=e.formatJson(["id","title","author","readings","date"],a);n.export_json_to_excel({header:["Id","Title","Author","Readings","Date"],data:i,filename:e.state.filename,autoWidth:e.state.autoWidth,bookType:e.state.bookType}),e.setState({selectedRowKeys:[],downloadLoading:!1})}))):g.ZP.error("\u81f3\u5c11\u9009\u62e9\u4e00\u9879\u8fdb\u884c\u5bfc\u51fa")},e.filenameChange=function(t){e.setState({filename:t.target.value})},e.autoWidthChange=function(t){e.setState({autoWidth:t.target.value})},e.bookTypeChange=function(t){e.setState({bookType:t})},e}return(0,r.Z)(d,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"formatJson",value:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))}},{key:"render",value:function(){var e={selectedRowKeys:this.state.selectedRowKeys,onChange:this.onSelectChange};return(0,k.jsxs)("div",{className:"app-container",children:[(0,k.jsx)("div",{style:{marginTop:"20px"},children:(0,k.jsxs)(x.Z,{layout:"inline",children:[(0,k.jsx)(b,{label:"\u6587\u4ef6\u540d:",children:(0,k.jsx)(p.Z,{style:{width:"250px"},prefix:(0,k.jsx)(c.Z,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8bf7\u8f93\u5165\u6587\u4ef6\u540d(\u9ed8\u8ba4excel-file)",onChange:this.filenameChange})}),(0,k.jsx)(b,{label:"\u5355\u5143\u683c\u5bbd\u5ea6\u662f\u5426\u81ea\u9002\u5e94:",children:(0,k.jsxs)(v.ZP.Group,{onChange:this.autoWidthChange,value:this.state.autoWidth,children:[(0,k.jsx)(v.ZP,{value:!0,children:"\u662f"}),(0,k.jsx)(v.ZP,{value:!1,children:"\u5426"})]})}),(0,k.jsx)(b,{label:"\u6587\u4ef6\u7c7b\u578b:",children:(0,k.jsxs)(y.Z,{defaultValue:"xlsx",style:{width:120},onChange:this.bookTypeChange,children:[(0,k.jsx)(y.Z.Option,{value:"xlsx",children:"xlsx"}),(0,k.jsx)(y.Z.Option,{value:"csv",children:"csv"}),(0,k.jsx)(y.Z.Option,{value:"txt",children:"txt"})]})}),(0,k.jsx)(b,{children:(0,k.jsx)(w.ZP,{type:"primary",icon:(0,k.jsx)(u.Z,{}),onClick:this.handleDownload.bind(null,"all"),children:"\u5168\u90e8\u5bfc\u51fa"})}),(0,k.jsx)(b,{children:(0,k.jsx)(w.ZP,{type:"primary",icon:(0,k.jsx)(u.Z,{}),onClick:this.handleDownload.bind(null,"selected"),children:"\u5bfc\u51fa\u9009\u62e9\u9879"})})]})}),(0,k.jsx)(Z.Z,{}),(0,k.jsx)(j.Z,{bordered:!0,size:"small",columns:C,rowKey:function(e){return e.id},dataSource:this.state.list,pagination:!0,rowSelection:e,loading:this.state.downloadLoading})]})}}]),d}(d.Component);t.default=(0,f.default)(R,"\u5bfc\u51fa\u8868\u683c")},81642:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(34706);var i=function(e){var t=(0,a.useRef)(e);return t.current=e,t},o=(n(65953),function(e){var t=i(e);(0,a.useEffect)((function(){return function(){t.current()}}),[])}),r=!("undefined"===typeof window||!window.document||!window.document.createElement),s={restoreOnUnmount:!1};var l=function(e,t){void 0===t&&(t=s);var n=(0,a.useRef)(r?document.title:"");(0,a.useEffect)((function(){document.title=e}),[e]),o((function(){t.restoreOnUnmount&&(document.title=n.current)}))}},65953:function(e,t,n){n.d(t,{mf:function(){return a}});var a=function(e){return"function"===typeof e}}}]);