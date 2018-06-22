// request를 이용하여 요청값 확인

const http = require("http");
const port = 10001;
const server = http.createServer(function(req,res){
    console.log(req.url);

    if("/favicon.ico"==req.url){
        res.end();
        return;
    }
    res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"})
    res.write("<h1>파비콘 처리 하였음</h1>")
    res.end();
})
server.listen(port,function(){
    console.log(`${port} 서버 구동중`);
})