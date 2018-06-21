/*

    require 에 찾는 파일의 확장자가 없는 경우 기본 .js 파일을 찾는다.
    만약, .js 파일이 없는 경우 이름에 해당하는 디렉토리를 찾고 index.js 파일을 찾는다.

*/

var cal = require("./test04_module")(); // 즉시실행 함수로 넘겨받은 함수 객체를 실행한 후 cal 에 대입
console.log("add : ",cal.add(1,2));
console.log("sub : ",cal.sub(1,2));