var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get("/",function(req,res){
    // 파일 경로 설정시 주의 : 파일 경로를 절대경로로 설정해야 한다.
    res.sendFile(__dirname+"/data/form.html");
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