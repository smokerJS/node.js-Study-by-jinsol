// http 모듈을 이용한 서버 통신 방식 이해하기
const http = require("http");
const port = 10001;

// 서버 생성하기
const server =  http.createServer();

// 서버에 접근시 발생하는 이벤트
server.on("request",function(){
    console.log("사용자 요청 왔음");
})

// 10001 포트로 사용자 요청을 대기
server.listen(port);

console.log("서버 구동중");