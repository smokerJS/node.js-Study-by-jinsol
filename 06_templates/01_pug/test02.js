/*
    6. 문서의 형식을 지정하고 싶다면
       - doctype html

    7. div 태그의 아이디 속성을 정의할 때는 단축된 표현을 사용할 수 있다.
       - #아이디 <div id="아이디"/>

*/

var pug = require("pug");
require("http")
.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.end(pug.renderFile("./data/test02.pug"));
}).listen(10001,()=>{
    console.log("10001 동작");
});