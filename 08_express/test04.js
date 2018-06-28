var express = require("express");
var app = express();
// 미들웨어 활용하기 : 정적 루트 설정

app.use(express.static("public"));
app.get("/",function(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.write(`
        <h1>정적 파일 테스트</h1>
        <img src="/images/pic1.jpg" width="400"/>
    `)
    res.end();
})
app.listen(3000,function(req,res){
    console.log("3000 구동");
})