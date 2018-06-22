/*

    사용자의 요청에 대한 응답을 처리하기

    http://localhost:10001/test.do?id=aaa&name=bbb

    사용자 브라우저로 아래와 같이 응답하는 프로그램 작성

    사용자 요청 정보
    url : /test.do
    id : aaa
    name : bbb

*/

const http = require("http");
const port = 10001;
const qs = require("querystring");
const url = require("url");
const server = http.createServer(function(req,res){
    let objUrl = url.parse(req.url);
    let param = qs.parse(objUrl.query);
    res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"})
    console.log(objUrl)
    if("/favicon.ico"==objUrl.pathname){
        res.end();
        return;
    }

    res.write(`
        <div>
            사용자 요청 정보<br>
            url : ${objUrl.pathname}<br>
            id : ${param.id == undefined ? "입력하지 않았습니다." : param.id}<br>
            name : ${param.name == undefined ? "입력하지 않았습니다." : param.name}<br>
        </div>  
    `)
    res.end();
})
server.listen(port,function(){
    console.log(`${port} 서버 구동중`);
})