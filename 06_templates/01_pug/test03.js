/*
    6. 문서의 형식을 지정하고 싶다면
       - doctype html

    7. div 태그의 아이디 속성을 정의할 때는 단축된 표현을 사용할 수 있다.
       - #아이디 <div id="아이디"/>

    8. 동적으로 값을 전달할 수 있다.
       - #{프로퍼티}
       - 속성에 값을 줄 떄 (key = 프로퍼티) "" 을 쓰지 않고 바로 프로퍼티명을 명시
    
    9. 스크립트 코드를 사용할 때 "-" 를 붙인다.
*/

var pug = require("pug");
require("http")
.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.end(pug.renderFile("./data/test03.pug",
                            {
                                title:"pug 동적 값 전달하기",
                                url:"https://www.naver.com",
                                arr:[1,2,3,4,5]
                            }
    ));
}).listen(10001,()=>{
    console.log("10001 동작");
});