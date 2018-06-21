// querystring : 쿼리에 대한 파싱 처리
// 쿼리 형대의 문자열 데이터가 있는 경우 사용
// a=1&b=2

var qs = require("querystring");
var data = "id=test&pass=1234";
var param = qs.parse(data);

console.log("id : ",param.id);
console.log("pass : ",param.pass);
