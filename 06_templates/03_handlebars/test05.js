// 사용자 정의 함수
var hdb = require("handlebars");
var fs = require("fs");

require("http")
.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    fs.readFile("./data/test05.hdb","utf-8",function(err,data){
        res.end(
            hdb.compile(data)({
                title : "handlebars 헬퍼 - 사용자 정의 함수",
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

// 핸들바 헬퍼 등록 (사용자 정의 함수)
hdb.registerHelper("list",function(items,options){
    let html = "<ul>";
    items.forEach(item => {
        html+=`<li>${options.fn(item)}</li>`
    });
    html += "</ul>";
    return html;
})

