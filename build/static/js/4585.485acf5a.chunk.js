"use strict";(self.webpackChunkreact18=self.webpackChunkreact18||[]).push([[4585],{84585:function(e,t,r){r.r(t),r.d(t,{getDashboardList:function(){return d},getTableData:function(){return o}});for(var a=r(6613),n=r.n(a),s=(r(77494),[]),c=0;c<20;c++)s.push(n().mock({id:"@increment",title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)",date:"@datetime"}));for(var i=[],u=0;u<7;u++)i.push(n().mock({id:u,date:'@date("yyyy-MM-dd")',name:"@cname",status:u%2?"Completed":"Pending",price:"@integer(300, 5000)",order_no:"@natural",address:"@county(true)"}));function o(){return Promise.resolve({code:200,message:"success",data:{list:s}})}function d(){return Promise.resolve({code:200,message:"success",data:{list:i}})}}}]);