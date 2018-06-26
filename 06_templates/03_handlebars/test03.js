// 프로퍼티에 객체 넘겨주기
var hdb = require("handlebars");
var fs = require("fs");

require("http")
.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    fs.readFile("./data/test03.hdb","utf-8",function(err,data){
        res.end(
            hdb.compile(data)({
                title : "handlebars 객체 넘기기",
                body  : {
                            title:"객체 활용",
                            content:"객체를 이용하여 핸들바스를 사용하자"
                        }
            })
        );
    });
})
.listen(10001,()=>{
    console.log("서버 동작중");
})

