(this["webpackJsonpreact-ant-admin"]=this["webpackJsonpreact-ant-admin"]||[]).push([[37],{1438:function(n,t,c){"use strict";c.r(t),c.d(t,"export_txt_to_zip",(function(){return i}));var a=c(1416),e=c.n(a);function i(n,t,c,a){var i=new e.a,o=c||"file",r=a||"file",f=t,s="".concat(n,"\r\n");f.forEach((function(n){var t;t=n.toString(),s+="".concat(t,"\r\n")})),i.file("".concat(o,".txt"),s),i.generateAsync({type:"blob"}).then((function(n){saveAs(n,"".concat(r,".zip"))}),(function(n){alert("\u5bfc\u51fa\u5931\u8d25")}))}c(720)}}]);