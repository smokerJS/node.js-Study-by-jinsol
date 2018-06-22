// response 응답하기
const http = require("http");
const port = 10001;
const server = http.createServer(function(req,res){
    // 응답하기
    res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"}); // 헤더값 쓰기
    res.write("<h1>화면에 데이터를 전송합니다.</h1>");
    res.write("<h1>노드를 이용한 응답입니다.</h1>");
    res.end("<h2>hello node.js</h2>");  // end 는 종료의 의미와 같이 응답을 할수도있다.
})
server.listen(port,function(){
    console.log(`${port} 서버 구동중`);
})