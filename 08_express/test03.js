var express = require("express");
var app = express();

app.use(function(req,res,next){
    console.log("첫번째 use 호출");
    req.msg = "middle ~ "
    next(); // 다음 미들웨어 호출
});
app.use(function(req,res,next){
    console.log("두번째 use 호출");
    req.msg += "node.js"
    next(); // 더이상 미들웨어가 없을 경우 url로 이동
});
app.get("/",function(req,res){
    res.send(`<h1>${req.msg}</h1>`);
});
app.use(function(req,res,next){
    res.send("<h1>404</h1>");
    // use 함수는 정의한 순서대로 진행한다.
    // 걸리는 url이 없을 경우 이 함수를 호출하여 404 표시
})
app.listen(3000,()=>{
    console.log("3000 으로 구동중");
});