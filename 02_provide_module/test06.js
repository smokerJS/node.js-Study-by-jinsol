// fs (file system) : 파일을 읽거나 쓰거나 할 때 사용
// 파일 읽기

var fs = require("fs");

// fs.readFileSync : sync 가 붙으면 동기적
// 동기적 : 실행이 끝나기를 기다리고 다음 명령을 실행
// 비동기적 : 실행이 끝나기를 기다리지 않고 다음 명령 실행


/*
// 비동기로 읽기
console.log("비동기 호출 전");

//fs.readFile("읽을대상",{encoding:"인코딩방식"},결과값을 넘겨받을 콜백함수)
fs.readFile("test.txt",{encoding:"utf-8"},function(err,result){
    // 비동기 콜백구조에서 파일을 읽다 에러가 날 수 있기때문에 첫번째 매개변수에 err 을 받는다.
    if(err){
        // 파일을 읽는 중에 에러가 발생한 경우
        console.log("읽기 중 에러발생");
        console.log(err);
        return;
    }

    console.log("________________________비동기 읽은 데이터____________________________\n");
    console.log(result);
    console.log("______________________________________________________________________");

});

console.log("비동기 호출 후");
*/

console.log("동기 호출 전");
try{
    var result = fs.readFileSync("test.txt",{encoding:"utf-8"});    // 동기방식은 콜백 개념이 아니다.
} catch(e){
    console.log("동기방식 읽기중 에러 : ",e);
}
console.log("동기 호출 후");
console.log("________________________동기 읽은 데이터____________________________\n");
console.log(result);
console.log("____________________________________________________________________");
