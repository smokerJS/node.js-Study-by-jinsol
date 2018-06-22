// 서버 기능을 이용하기 위해 http 모듈 사용

const http = require("http");
const port = 10001;

const server = http.createServer(function(req,res){
    console.log("서버 사용자 요청 들어옴")
});

server.listen(port);
console.log("서버 구동중");