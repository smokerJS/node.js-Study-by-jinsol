var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
// post 방식일 경우 파라미터 데이터를 파싱처리하기 위한 모듈을 호출


// post 방식의 데이터를 처리하기 위한 미들웨어
// req 에 body가 자동으로 추가된다.
app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json()); // json 데이터 처리


app.get("/",function(req,res){
    fs.readFile("data/form.html","utf-8",function(err,data){
        res.send(data);
    })
});

app.post("/form.do",function(req,res){
    res.send(`
        <h1>전송된 파라미터</h1>
        <h1>jumin : ${req.body.jumin1} - ${req.body.jumin2}</h1>
    `);
});

app.listen(3000,function(){
    console.log("3000 포트 구동중");
})