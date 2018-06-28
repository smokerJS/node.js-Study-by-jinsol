var app = require("express")();

app.get("/", function(req,res){
    console.log("루트 페이지");
    res.send("<h1>test</h1>");
});
app.get("/board/list.do", function(req,res){
    console.log("list 페이지");
});
app.post("/board/write.do", function(req,res){
    console.log("write 페이지");
});
app.listen(3000,function(req,res){
    console.log("3000 서버 동작중");
});