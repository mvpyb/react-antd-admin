"use strict";(self.webpackChunkreact18=self.webpackChunkreact18||[]).push([[770],{20770:function(e,n,r){r.r(n);var t=r(1413),i=r(29439),a=r(34706),c=r(49158),d=r(73358),s=r(81642),l=r(10161),o=function(){return(0,l.jsxs)("p",{children:[" \u6b64\u9875\u9762\u7528\u5230\u4f9d\u8d56\u662f ",(0,l.jsx)("a",{href:"https://github.com/atlassian/react-beautiful-dnd",children:"react-beautiful-dnd"}),"\u3002"]})};n.default=function(){(0,s.Z)("\u62d6\u62fd");var e,n=(0,a.useState)((e=5,Array.from({length:e},(function(e,n){return n})).map((function(e){return{id:"item-".concat(e),content:"item ".concat(e)}})))),r=(0,i.Z)(n,2),u=r[0],g=r[1];return(0,l.jsxs)("div",{className:"app-container",children:[(0,l.jsx)(c.Z,{message:(0,l.jsx)(o,{})}),(0,l.jsx)("br",{}),(0,l.jsx)(d.Z5,{onDragEnd:function(e){if(e.destination){var n=function(e,n,r){var t=Array.from(e),a=t.splice(n,1),c=(0,i.Z)(a,1)[0];return t.splice(r,0,c),t}(u,e.source.index,e.destination.index);g(n)}},children:(0,l.jsx)(d.bK,{droppableId:"droppable",children:function(e,n){return(0,l.jsxs)("div",(0,t.Z)((0,t.Z)({},e.droppableProps),{},{ref:e.innerRef,style:(r=n.isDraggingOver,{background:r?"lightblue":"lightgrey",padding:8,width:250}),children:[u.map((function(e,n){return(0,l.jsx)(d._l,{draggableId:e.id,index:n,children:function(n,r){return(0,l.jsx)("div",(0,t.Z)((0,t.Z)((0,t.Z)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{style:(i=r.isDragging,a=n.draggableProps.style,(0,t.Z)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),background:i?"lightgreen":"grey"},a)),children:e.content}));var i,a}},e.id)})),e.placeholder]}));var r}})})]})}}}]);