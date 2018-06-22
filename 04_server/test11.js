/*

    POST 방식일 경우의 파라미터 처리하기

*/

const http = require("http");
const fs = require("fs");
const port = 10001;
const qs = require("querystring");
http.createServer(function(req,res){
    console.log(req.method);
    if(req.method == "GET"){
        fs.readFile("data/form.html",function(err,data){
            res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
            res.end(data);
        });
    }else if(req.method == "POST"){
        /*
            파라미터 처리하는 방식 이해하기
            이벤트
            :data - 파라미터를 읽으면서 발생
            :end - 다 읽으면 발생
        */
        var paramData = "";
        // body 안의 파라미터 내용을 읽는 동안 발생
        req.on("data",function(data){
            paramData += data;
        })

        // body 안의 파라미터 내용을 다 읽은 다음에 호출
        req.on("end",function(){
            // 다 읽은 파라미터 내용을 확인
            let param = qs.parse(paramData);
            console.log("파라미터 : %j",param);
            res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
            res.write(`
                <h1>jumin1 :  ${param.jumin1} </h1>
                <h1>jumin2 :  ${param.jumin2} </h1>
            `);
            res.end();
        })
    }
}).listen(port,function(){
    console.log(`${port} 서버 구동중`);
})