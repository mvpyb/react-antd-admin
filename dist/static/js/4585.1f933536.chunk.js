"use strict";(self.webpackChunkreact_ant_admin=self.webpackChunkreact_ant_admin||[]).push([[4585],{84585:function(e,t,a){a.r(t),a.d(t,{getDashboardList:function(){return o},getTableData:function(){return u}});for(var n=a(6613),r=a.n(n),s=(a(77494),[]),c=0;c<20;c++)s.push(r().mock({id:"@increment",title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)",date:"@datetime"}));for(var i=[],d=0;d<7;d++)i.push(r().mock({id:d,date:'@date("yyyy-MM-dd")',name:"@cname",status:d%2?"Completed":"Pending",price:"@integer(300, 5000)",order_no:"@natural",address:"@county(true)"}));function u(){return Promise.resolve({code:200,message:"success",data:{list:s}})}function o(){return Promise.resolve({code:200,message:"success",data:{list:i}})}}}]);