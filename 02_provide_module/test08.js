// request : 특정 URL 을 호출 후 결과 문자열을 얻는다.

var request = require("request");

/*
    1. 호출할 URL
    2. 받은 결과를 받을 콜백함수
*/
request("http://www.naver.com",function(err,response,body){
    // 첫번째 매개변수 : 호출에 실패시 받을 정보

    if(err || response.statusCode != 200){
        console.log("요청 결과가 잘못되었습니다.");
        return;
    };
    console.log(body);
});