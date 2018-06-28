var board = require("./board");
var user = require("./user");
var express = require("express");
var app = express();
app.use("/board",board);
app.use("/user",user);


// 라우터 개념 적용하기
// 복잡한 구조를 단순화 시킬수 있다.
// 등록된 라우터 모듈 가져오기


app.get("/",function(req,res){
    res.send(`
        <a href='localhost:3000/board/'>게시판 이동</a>
        <a href='localhost:3000/user/'>유저 이동</a>
    `);
});


app.listen(3000,function(){
    console.log("3000 포트 구동중");
})