const http = require("http");
const port = 10001;

const server = http.createServer(function(req,res){
    console.log("사용자 요청 들어옴");

    // 클라이언트에게 응답을 완료하기
    res.end();
});

// 서버가 특정 포트로 동작한 이후 호출되는 콜백함수 등록
server.listen(port,function(){
    console.log(`http://localhost:${port} 로 서버 동작중`);
});
