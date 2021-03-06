const http = require("http");
const url = require("url");
const qs = require("querystring");
const fs = require("fs");
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
        case "/": openPage("view/index.html",res); break;
        case "/writeForm.do": openPage("view/board/writeForm.html",res); break;
        case "/write.do": writeBoard(req,res); break;
        case "/update.do": updateBoard(req,res); break;
        case "/updateForm.do": updateFormBoard("view/board/updateForm.html",no,res); break;
        case "/detail.do": detailBoard("view/board/detail.html",no,res); break;
        case "/delete.do": deleteBoard(no,res); break;
        case "/list.do": listBoard("view/board/list.html",res); break;
        default: openPage("view/error/error404.html",res); break;
    }
}).listen(10001);

function openPage(result,res){
    fs.readFile(result,function(err,data){
        if(err){
            console.log("openPage 에러 발생")
            console.log(err);
            return;
        }
        res.end(data);
    });
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
        fs.readFile(result,"utf-8",function(err,data){
            res.end(data.replace(":title",row[0].title)
                        .replace(":writer",row[0].writer)
                        .replace(":content",row[0].content)
                        .replace(/:no/gi,row[0].no)
            );
        });
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
        fs.readFile(result,"utf-8",function(err,data){
            res.end(data.replace(":title",row[0].title)
                        .replace(":writer",row[0].writer)
                        .replace(":content",row[0].content)
                        .replace(/:no/gi,row[0].no)
            );
        });
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
        fs.readFile(result,"utf-8",function(err,data){
            board = "";
            rows.forEach((row) => {
                board += `
                <tr>
                    <td>${row.no}</td>
                    <td><a href="detail.do?no=${row.no}">${row.title}</a></td>
                    <td>${row.writer}</td>
                </tr>
                `
            });
            res.end(data.replace(":tbody",board));
        });
    });
};

