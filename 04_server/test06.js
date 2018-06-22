const http = require("http");
const port = 10001;
const server = http.createServer(function(req,res){
    // 전송할 내용 출력하기

    res.write(`
        <html>
            <head><title>노드 연습</title></head>
            <body>
                <h1>node.js server response</h1>
            </body>
        </html>
    `)

    res.end();

})
server.listen(port,function(){
    console.log(`${port} 서버 구동중`);
})