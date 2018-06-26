// 반복문
var hdb = require("handlebars");
var fs = require("fs");

require("http")
.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    fs.readFile("./data/test04.hdb","utf-8",function(err,data){
        res.end(
            hdb.compile(data)({
                title : "handlebars 배열 반복",
                members : [
                            {name:"진솔",age:25},
                            {name:"예지",age:7},
                            {name:"연우",age:10},
                            {name:"슈슈",age:12}
                          ]
            })
        );
    });
})
.listen(10001,()=>{
    console.log("서버 동작중");
})

