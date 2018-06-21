// Console 모듈 사용하기 : 콘솔창과 관련된 기능을 다루는 객체
// console 전역 객체


// __dirname 현재 작접 디렉토리
console.log("__dirname : "+__dirname);

// __filename 현재 작업 파일명
console.log("__filename : "+__filename);


var msg = "Hello! node.js";
var person = {
    name : "정진솔",
    age : 25,
    addr : "서울"
};
console.log("%s!!!",msg);           // %s String
console.log("%d!!!",person.age);
console.log("%d!!!",1.2);           // %d 정수,실수 Number
console.log("%j",person);           // %j JSON



console.time("test");   // test 라는 키워드로 시간측정 시작
var sum = 0;
for(let i = 0 ; i < 10000000 ; i++){
    sum += 1;
};
console.timeEnd("test");    // test 키워드로 시간측정 종료