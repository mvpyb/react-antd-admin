"use strict";(self.webpackChunkreact18=self.webpackChunkreact18||[]).push([[1141,4585],{84585:function(e,t,n){n.r(t),n.d(t,{getDashboardList:function(){return c},getTableData:function(){return d}});for(var a=n(6613),i=n.n(a),l=(n(77494),[]),s=0;s<20;s++)l.push(i().mock({id:"@increment",title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)",date:"@datetime"}));for(var o=[],r=0;r<7;r++)o.push(i().mock({id:r,date:'@date("yyyy-MM-dd")',name:"@cname",status:r%2?"Completed":"Pending",price:"@integer(300, 5000)",order_no:"@natural",address:"@county(true)"}));function d(){return Promise.resolve({code:200,message:"success",data:{list:l}})}function c(){return Promise.resolve({code:200,message:"success",data:{list:o}})}},84410:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(1413),i=n(81642),l=n(10161);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){return t&&(0,i.Z)(t),(0,l.jsx)(e,(0,a.Z)({},n))}}},71141:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var a=n(74165),i=n(15861),l=n(15671),s=n(43144),o=n(60136),r=n(29388),d=n(34706),c=n(87573),u=n(1413),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM514.1 580.1l-61.8-102.4c-2.2-3.6-6.1-5.8-10.3-5.8h-38.4c-2.3 0-4.5.6-6.4 1.9-5.6 3.5-7.3 10.9-3.7 16.6l82.3 130.4-83.4 132.8a12.04 12.04 0 0010.2 18.4h34.5c4.2 0 8-2.2 10.2-5.7L510 664.8l62.3 101.4c2.2 3.6 6.1 5.7 10.2 5.7H620c2.3 0 4.5-.7 6.5-1.9 5.6-3.6 7.2-11 3.6-16.6l-84-130.4 85.3-132.5a12.04 12.04 0 00-10.1-18.5h-35.7c-4.2 0-8.1 2.2-10.3 5.8l-61.2 102.3z"}}]},name:"file-excel",theme:"outlined"},f=n(70237),x=function(e,t){return d.createElement(f.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:h}))};x.displayName="FileExcelOutlined";var g=d.forwardRef(x),p=n(84585),m=n(84410),v=n(29429),y=n(74166),w=n(35099),Z=n(59855),j=n(11159),k=n(43459),b=n(27249),C=n(6241),R=n(9172),S=n(10161),D=v.Z.Item,M=[{title:"Id",dataIndex:"id",key:"id",width:200,align:"center"},{title:"Title",dataIndex:"title",key:"title",width:200,align:"center"},{title:"Author",key:"author",dataIndex:"author",width:100,align:"center",render:function(e){return(0,S.jsx)(y.Z,{children:e},e)}},{title:"Readings",dataIndex:"readings",key:"readings",width:195,align:"center"},{title:"Date",dataIndex:"date",key:"date",width:195,align:"center"}],T=function(e){(0,o.Z)(d,e);var t=(0,r.Z)(d);function d(){var e;(0,l.Z)(this,d);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o)))._isMounted=!1,e.state={list:[],filename:"excel-file",autoWidth:!0,bookType:"xlsx",downloadLoading:!1,selectedRows:[],selectedRowKeys:[]},e.fetchData=(0,i.Z)((0,a.Z)().mark((function t(){var n,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.getTableData)();case 3:n=t.sent,i=n.data.list,e._isMounted&&e.setState({list:i}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e._isMounted&&e.setState({list:[]});case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.onSelectChange=function(t,n){e.setState({selectedRows:n,selectedRowKeys:t})},e.handleDownload=function(t){"selected"!==t||0!==e.state.selectedRowKeys.length?(e.setState({downloadLoading:!0}),Promise.all([n.e(6884),n.e(1437)]).then(n.bind(n,51437)).then((function(n){var a="all"===t?e.state.list:e.state.selectedRows,i=e.formatJson(["id","title","author","readings","date"],a);n.export_json_to_excel({header:["Id","Title","Author","Readings","Date"],data:i,filename:e.state.filename,autoWidth:e.state.autoWidth,bookType:e.state.bookType}),e.setState({selectedRowKeys:[],downloadLoading:!1})}))):w.ZP.error("\u81f3\u5c11\u9009\u62e9\u4e00\u9879\u8fdb\u884c\u5bfc\u51fa")},e.filenameChange=function(t){e.setState({filename:t.target.value})},e.autoWidthChange=function(t){e.setState({autoWidth:t.target.value})},e.bookTypeChange=function(t){e.setState({bookType:t})},e}return(0,s.Z)(d,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"formatJson",value:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))}},{key:"render",value:function(){var e={selectedRowKeys:this.state.selectedRowKeys,onChange:this.onSelectChange};return(0,S.jsxs)("div",{className:"app-container",children:[(0,S.jsx)("div",{style:{marginTop:"20px"},children:(0,S.jsxs)(v.Z,{layout:"inline",children:[(0,S.jsx)(D,{label:"\u6587\u4ef6\u540d:",children:(0,S.jsx)(Z.Z,{style:{width:"250px"},prefix:(0,S.jsx)(c.Z,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8bf7\u8f93\u5165\u6587\u4ef6\u540d(\u9ed8\u8ba4excel-file)",onChange:this.filenameChange})}),(0,S.jsx)(D,{label:"\u5355\u5143\u683c\u5bbd\u5ea6\u662f\u5426\u81ea\u9002\u5e94:",children:(0,S.jsxs)(j.ZP.Group,{onChange:this.autoWidthChange,value:this.state.autoWidth,children:[(0,S.jsx)(j.ZP,{value:!0,children:"\u662f"}),(0,S.jsx)(j.ZP,{value:!1,children:"\u5426"})]})}),(0,S.jsx)(D,{label:"\u6587\u4ef6\u7c7b\u578b:",children:(0,S.jsxs)(k.Z,{defaultValue:"xlsx",style:{width:120},onChange:this.bookTypeChange,children:[(0,S.jsx)(k.Z.Option,{value:"xlsx",children:"xlsx"}),(0,S.jsx)(k.Z.Option,{value:"csv",children:"csv"}),(0,S.jsx)(k.Z.Option,{value:"txt",children:"txt"})]})}),(0,S.jsx)(D,{children:(0,S.jsx)(b.ZP,{type:"primary",icon:(0,S.jsx)(g,{}),onClick:this.handleDownload.bind(null,"all"),children:"\u5168\u90e8\u5bfc\u51fa"})}),(0,S.jsx)(D,{children:(0,S.jsx)(b.ZP,{type:"primary",icon:(0,S.jsx)(g,{}),onClick:this.handleDownload.bind(null,"selected"),children:"\u5bfc\u51fa\u9009\u62e9\u9879"})})]})}),(0,S.jsx)(C.Z,{}),(0,S.jsx)(R.Z,{bordered:!0,size:"small",columns:M,rowKey:function(e){return e.id},dataSource:this.state.list,pagination:!0,rowSelection:e,loading:this.state.downloadLoading})]})}}]),d}(d.Component),P=(0,m.default)(T,"\u5bfc\u51fa\u8868\u683c")}}]);