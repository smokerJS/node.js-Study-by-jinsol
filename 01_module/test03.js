var cal = require("./test03_module")(); // 즉시실행 함수로 넘겨받은 함수 객체를 실행한 후 cal 에 대입
console.log("add : ",cal.add(1,2));
console.log("sub : ",cal.sub(1,2));