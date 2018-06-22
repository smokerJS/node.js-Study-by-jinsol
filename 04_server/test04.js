/*
    싱글 스레드
*/
const http = require("http");
const port = 10001;
const server = http.createServer(function(req,res){
    console.log("사용자 요청 들어옴");
    setTimeout(function(){
        res.end();
    },3000);
})
server.listen(port,function(){
    console.log(`${port} 서버 구동중`);
})