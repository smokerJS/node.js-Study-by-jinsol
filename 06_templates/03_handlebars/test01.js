/*
    핸들바스 기본문법
    npm install handlebars
*/

var hdb = require("handlebars");
var fs = require("fs");

require("http")
.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    fs.readFile("./data/test01.hdb","utf-8",function(err,data){
        let template = hdb.compile(data);    // 컴파일시 함수가 리턴된다.
        res.end(
            template({
                title : "handlebars 사용하기",
                body : "핸들바를 이용한 예제"
            })
        );
    });
})
.listen(10001,()=>{
    console.log("서버 동작중");
})

