var express = require("./express");
var app = express();
app.use(function(req,res){
    console.log(1);
    req.msg = "a";
});
app.use(function(req,res){
    console.log(2);
    req.msg += "b";
});
app.get("/",function(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.end("<h1>express 만들어보기</h1>");
    console.log(req.msg);
});
app.get("/writeForm.do",function(req,res){
    console.log("/writeForm.do 요청 함수 호출");
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    console.log(req.msg);
});
app.listen(3000,function(){
    console.log("3000 포트 구동중");
});