var express = require("./express");
var app = express();
var fs = require("fs");
app.get("/",function(req,res){
    // test.html 파일의 내용을 사용자에게 출력
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    fs.readFile("./test.html",(err,data)=>{
        res.end(data);
    })
});
app.get("/test.do",function(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.write("<h1>GET 파라미터 정보</h1>");
    res.write(`<h1>name : ${req.query.name}</h1>`);
    res.write(`<h1>age : ${req.query.age}</h1>`);
    res.end();
});
app.get("/test3.do",function(req,res){
    res.send("<h1>테스트3.두</h3>")
});
app.get("/test4.do",function(req,res){
    res.redirect("/")
});
app.post("/test2.do",function(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.write("<h1>POST 파라미터 정보</h1>");
    res.write(`<h1>name : ${req.body.name}</h1>`);
    res.write(`<h1>age : ${req.body.age}</h1>`);
    res.end();
});
app.listen(3000,function(){
    console.log("3000 포트 구동중");
});