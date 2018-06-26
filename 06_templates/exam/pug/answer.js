const http = require("http");
const url = require("url");
const qs = require("querystring");
const pug = require("pug");
const con = require("mysql")
           .createConnection({
                user:"bit",
                password:"bit",
                database:"bitdb"
            });

http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    let objUrl = url.parse(req.url);
    var path = objUrl.pathname;
    let no = qs.parse(objUrl.query).no;
    switch(path){
        case "/": openPage("./view/index.pug",res); break;
        case "/writeForm.do": openPage("./view/board/writeForm.pug",res); break;
        case "/write.do": writeBoard(req,res); break;
        case "/update.do": updateBoard(req,res); break;
        case "/updateForm.do": updateFormBoard("./view/board/updateForm.pug",no,res); break;
        case "/detail.do": detailBoard("./view/board/detail.pug",no,res); break;
        case "/delete.do": deleteBoard(no,res); break;
        case "/list.do": listBoard("./view/board/list.pug",res); break;
        default: openPage("./view/error/error404.pug",res); break;
    }
}).listen(10001);

function openPage(result,res){
    res.end(pug.renderFile(result));
};

function writeBoard(req,res){
    res.writeHead(302, {"Location": "list.do"});
    var paramData = "";
    req.on("data",function(data){ paramData += data; })
    req.on("end",function(){
        let param = qs.parse(paramData);
        let sql = "insert into tb_board(writer, title, content) values(?,?,?)";
        let data = [param.writer,param.title,param.content];
        con.query(sql,data,function(err){
            if(err){
                console.log("writeBoard 에러 발생");
                console.log(err);
                return;
            }
        })
        res.end();
    });
};

function detailBoard(result,no,res){
    let sql = "select * from tb_board where no = ?";
    con.query(sql,no,function(err,row){
        if(err){
            console.log("detailBoard 에러 발생");
            console.log(err);
            return;
        }
        res.end(pug.renderFile(result,{
            title:row[0].title,
            writer:row[0].writer,
            content:row[0].content,
            no:row[0].no
        }))
    });
};

function updateFormBoard(result,no,res){
    let sql = "select * from tb_board where no = ?";
    con.query(sql,no,function(err,row){
        if(err){
            console.log("updateFormBoard 에러 발생");
            console.log(err);
            return;
        }
        res.end(pug.renderFile(result,{
            title:row[0].title,
            writer:row[0].writer,
            content:row[0].content,
            no:row[0].no
        }))
    });
};

function updateBoard(req,res){
    res.writeHead(302, {"Location": "list.do"});
    var paramData = "";
    req.on("data",function(data){ paramData += data; })
    req.on("end",function(){
        let param = qs.parse(paramData);
        let sql = "update tb_board set title = ? , content = ? where no = ?";
        let data = [param.title,param.content,param.no];
        con.query(sql,data,function(err){
            if(err){
                console.log("updateBoard 에러 발생");
                console.log(err);
                return;
            }
        })
        res.end();
    });
};

function deleteBoard(no,res){
    res.writeHead(302, {"Location": "list.do"});
    let sql = "delete from tb_board where no = ?";
    con.query(sql,no,function(err){
        if(err){
            console.log("deleteBoard 에러 발생");
            console.log(err);
            return;
        }
        res.end();
    });
};

function listBoard(result,res){
    let sql = "select * from tb_board";
    con.query(sql,function(err,rows){
        if(err){
            console.log("listBoard 에러 발생");
            console.log(err);
            return;
        }
        res.end(pug.renderFile(result,{
            rows : rows
        }))
    });
};

