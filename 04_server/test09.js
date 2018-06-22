//요청에 대한 응답처리 HTML

const http = require("http");
var fs = require("fs");
const port = 10001;

http.createServer(function(req,res){
    // 사용자 요청에 대한 응답을 data 폴더 하위의 test.html의 내용을 전송한다
    fs.readFile("data/test.html",function(err,data){
        res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"})
        if(err){
            console.log(err);
            res.end("<h1>서버 실행중 에러 발생함</h1>");
            return;
        }
        res.end(data);
    })
}).listen(port,function(){
    console.log(`${port} 서버 구동중`);
})