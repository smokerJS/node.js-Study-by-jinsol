// npm install express
// npm install -g supervisor
// node test01 : 실시간 저장 안됨
// supervisor test01 : 실시간 저장후 자동 재구동
var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("<h1>hello node</h1>");
});

app.listen(3000,function(req,res){
    console.log("3000 포트 서버 구동");
});