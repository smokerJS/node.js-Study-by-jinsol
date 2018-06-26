/*
    ejs 에 동적 프로퍼티 전달
*/
var ejs = require("ejs");
require("http")
.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    ejs.renderFile("./data/test02.ejs",
        {
            "title":"ejs 활용하기",
            "arr":[2,4,6,8]
        }
        ,function(err,data){
            res.end(data)
        })
})
.listen(10001,()=>{
    console.log("서버 동작중");
})
