var http = require("http");
var url = require("url");
var middleware = [];
var getMap = [];
var postMap = [];
var server = http.createServer(function(req,res){
    // 사용자의 요청에 대한 처리
    // use로 등록한 미들웨어 함수를 실행한다.
    for(let i = 0 ; i < middleware.length ; i ++){
        middleware[i](req,res);
    };

    // 요청온 url과 연관된 정보 파싱하기
    var urlInfo = url.parse(req.url,true);

    var fn = null;
    if(req.method == "GET"){
        fn = getMap[urlInfo.pathname];
    }else if(req.method == "POST"){
        fn = postMap[urlInfo.pathname];
    };

    if(fn){ // 사용자 요청에 대한 함수가 존재하는 경우
        fn(req,res);
    }else{  // 잘못된 url로 요청한 경우
        err404(req,res);
    };
});
function err404(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.end("<h1>404</h1><p>해당 URL을 지원하지 않습니다.</p>");
};
module.exports = function(){
    return{
        get(url,fn){
            getMap[url] = fn;
        },
        post(url,fn){
            postMap[url] = fn;
        },
        listen(port,fn){
            server.listen(port,fn);
        },
        use(fn){
            middleware.push(fn);
        }
    };
};
