// test01_module.js 모듈 사ㅛㅇ하기
// .js 는 생략 가능하다.

var cal = require("./test01_module");
// exports 객체를 넘겨주는것
// cal 은 exports 를 받은것과 같다.

console.log("add : ",cal.add(1,2));
console.log("sub : ",cal.sub(1,2));