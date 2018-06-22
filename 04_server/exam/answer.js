/*

    사용자 요청 URL에 따라서 아래와 같이 처리하는 프로그램 작성
    - "/"  = board/index.html 파일의 내용을 읽어서 응답
    - "/writeForm.do"  = board/writeForm.html 파일의 내용을 읽어서 응답
    - "/write.do"  = 전송된 파라미터의 내용을 읽어서 화면에 출력

    등록된 내용
    제목 : 
    글쓴이 :
    내용 :
    <a href="/list.do">목록</a>

    목록 클릭시 list.do 호출 => list.html 출력 

*/


const http = require("http");
const url = require("url");
const qs = require("querystring");
const fs = require("fs");

http.createServer(function(req,res){
    let objUrl = url.parse(req.url);
    var path = objUrl.pathname;
    let result = "";
    switch(path){
        case "/": result = "index.html"; break;
        case "/writeForm.do": result = "writeForm.html"; break;
        case "/write.do": result = "write"; break;
        case "/list.do": result = "list.html"; break;
        default: result = "error404.html"; break;
    }
    openPage(result,req,res);
}).listen(10001);

function openPage(result,req,res){
    res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    if(result == "write"){
        var paramData = "";
        req.on("data",function(data){ paramData += data; })
        req.on("end",function(){
            let param = qs.parse(paramData);
            res.write(`
                <div>
                등록된 내용<br>
                제목 : ${param.title}<br>
                글쓴이 : ${param.writer}<br>
                내용 : ${param.content}<br>
                <a href="/list.do">목록</a>
                </div>
            `);
            res.end();
        })
        return;
    }
    fs.readFile("board/"+result,function(err,data){
        res.end(data);
    })
}
