// url : url 정보를 분석 파싱

var url = require("url");

/*
var urlObj = url.parse(
    "http://localhost:8000/list.do?id=jisnol&name=진솔"
);
*/

var urlObj = url.parse(
    "http://localhost:8000/list.do?id=jisnol&name=진솔",true
);

// 두번째 매개변수의 디폴트는 false이다.
// 이를 true 로 줄 경우 파라미터 정보를 객체로 관리한다.

//console.dir(urlObj);
console.log("pathname : ",urlObj.pathname)
console.log("query : ",urlObj.query)
console.log("query.id : ",urlObj.query.id)
console.log("query.name : ",urlObj.query.name)

