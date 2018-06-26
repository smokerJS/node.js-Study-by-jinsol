/*

    이전에는 jade로 불렸으나 현재는 라이센스 문제로 prg로 변경
    npm install pug

    pug 문법 작성시 주의점

    띄어쓰기 - 탭과 스페이스 같이 사용시 에러 발생
    


    ---------------------------------------------------------------
        작성규칙 
    ---------------------------------------------------------------

    1. 태그 작성시 택그의 이름만 명시

    2. 자식 태그 개념으로 선언할 경우 들여쓰기로 처리함

    3. 태그의 내용을 입력할 경우에는 태그의 이름뒤에 원하는 애용을 명시한다.

    4. 여러줄의 내용을 입력하고 싶은 경우
       - 태그명 뒤에 "." 을 입력 한 뒤 내용 입력
       - 태그명 아래에 입력할 내용 앞에 "|"을 입력

    5. 속성 설정하기
       - 태그안에 속성을 작성 할 경우 태그명 뒤에 괄호를 사용해서 괄호안에 속성명과 값을 적는다.

*/

var pug = require("pug");
var fs = require("fs");
require("http")
.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    // fs.readFile("./data/test01.pug",function(err,data){
    //     // pug 엔진에게 해석하라고 넘겨준다.
    //     res.end(pug.render(data));
    // })
    res.end(pug.renderFile("./data/test01.pug"));    // fs를 사용하지 않고 랜더링
})
.listen(10001,()=>{
    console.log("10001 포트 서버 동작중");
});