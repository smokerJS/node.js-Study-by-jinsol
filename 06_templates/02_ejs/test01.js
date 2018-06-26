/*
    화면에 대한 동적 처리를 간편하게 도와주는 템플릿
    npm install ejs
*/
var fs = require("fs");
var ejs = require("ejs");
require("http")
.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});

    // fs.readFile("./data/test01.ejs","utf-8",(err,data)=>{
    //     //data 내용을 ejs 엔진에게 랜더링 시킨다.
    //     res.end(ejs.render(data));
    // })
    ejs.renderFile("./data/test01.ejs",function(err,data){
        res.end(data)
    })

})
.listen(10001,()=>{
    console.log("서버 동작중");
})
