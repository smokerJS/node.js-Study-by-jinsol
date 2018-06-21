// fs (file system) : 파일을 읽거나 쓰거나 할 때 사용
// 파일 쓰기

var fs = require("fs");
var msg = "테스트 입니다.";

/*
    비동기적 파일 쓰기
    1. 저장할 파일명
    2. 저장할 내용
    3. 인코딩 방식
    4. 콜백함수
*/
console.log("비동기적 파일 쓰기 호출 전");
fs.writeFile("writetest1.txt",msg,"utf-8",function(err){
    if(err){
        console.log("쓰기 중 에러 발생");
        console.log(err);
        return;
    }
    console.log("비동기적 파일 쓰기 완료");
});
console.log("비동기적 파일 쓰기 호출 후");



/*
    동기적 파일 쓰기
    1. 저장할 파일명
    2. 저장할 내용
    3. 인코딩 방식
*/
console.log("동기적 파일 쓰기 호출 전");
try{
    fs.writeFileSync("writetest2.txt",msg,"utf-8");
}catch(e){
    console.log("쓰기 중 에러 발생")
    console.log(e)
}
console.log("동기적 파일 쓰기 호출 후");
