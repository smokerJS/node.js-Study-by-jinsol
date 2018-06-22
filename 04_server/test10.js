/*
    사용자가 호출하는 url에 따라서 아래와 같이 특정 파일을 읽어서 전송하는 프로그램 작성

    /html.do  로 호출할 경우에는 data/test.html 의 내용을 전송
    Content-Type : .. 기존과 동일하게 설정
    
    /image.do  로 호출할 경우에는 data/test.jpg 의 내용을 전송
    Content-Type : image/jpeg

    /audio.do  로 호출할 경우에는 data/test.mp3 의 내용을 전송
    Content-Type : audio/mp3

    위의 경로에 해당하지 않은 경우
    "존재하지 않는 경로입니다." 메세지 전송
*/
const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer(function(request, response) {
    
    // 요청한 URL 정보 얻기
    var pathname = url.parse(request.url).pathname;
    
    // 파일정보 얻기
	var info = getFileInfo(pathname);

    // 데이터 전송하기
	sendData(response, info);
	
}).listen(10001, function() {console.log("10001 구동");});

function getFileInfo(pathname) {
    var fileInfo = {};
    switch (pathname) {
        case "/html.do":
            fileInfo.name = "test.html";
            fileInfo.type = "text/html; charset=UTF-8";
            break;
        case "/image.do":
            fileInfo.name = "test.jpg";
            fileInfo.type = "image/jpeg";
            break;
        case "/audio.do":
            fileInfo.name = "test.mp3";
            fileInfo.type = "audio/mp3";
            break;
    }
    return fileInfo;
}

function sendData(response, fileInfo) {
    if (!fileInfo.name) {
        response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
        response.end("<h1>존재하지 않는 경로입니다.</h1>");
        return;
    }
	fs.readFile("data/" + fileInfo.name, function (err, data) {
        if (err) {
            response.end("<h1>서버 실행중 에러 발생함</h1>");
            return;
        }
		response.writeHead(200, {"Content-Type": fileInfo.type});
		response.end(data);
	});
}
