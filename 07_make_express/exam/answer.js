const pug = require("pug");
const con = require("mysql")
           .createConnection({
                user:"bit",
                password:"bit",
                database:"bitdb"
            });
const express = require("./express");
const app = express();

app.listen(3000,function(){
    console.log("3000 포트 구동중");
});

app.get("/",function(req,res){
    res.send(pug.renderFile("./view/index.pug"));
});

app.get("/list.do",function(req,res){
    let sql = "select * from tb_board";
    con.query(sql,function(err,rows){
        if(err){
            console.log("listBoard 에러 발생");
            console.log(err);
            return;
        };
        res.send(pug.renderFile("./view/board/list.pug",{
            rows : rows
        }));
    });
});

app.get("/writeForm.do",function(req,res){
    res.send(pug.renderFile("./view/board/writeForm.pug"));
});

app.post("/write.do",function(req,res){
    let sql = "insert into tb_board(writer, title, content) values(?,?,?)";
    let data = [req.body.writer,req.body.title,req.body.content];
    con.query(sql,data,function(err){
        if(err){
            console.log("writeBoard 에러 발생");
            console.log(err);
            return;
        };
        res.redirect("/list.do");
    });
});

app.get("/detail.do",function(req,res){
    let sql = "select * from tb_board where no = ?";
    con.query(sql,req.query.no,function(err,row){
        if(err){
            console.log("detailBoard 에러 발생");
            console.log(err);
            return;
        };
        res.send(pug.renderFile("./view/board/detail.pug",{
            title:row[0].title,
            writer:row[0].writer,
            content:row[0].content,
            no:row[0].no
        }));
    });
});

app.get("/updateForm.do",function(req,res){
    let sql = "select * from tb_board where no = ?";
    con.query(sql,req.query.no,function(err,row){
        if(err){
            console.log("updateFormBoard 에러 발생");
            console.log(err);
            return;
        };
        res.send(pug.renderFile("./view/board/updateForm.pug",{
            title:row[0].title,
            writer:row[0].writer,
            content:row[0].content,
            no:row[0].no
        }));
    });
});

app.post("/update.do",function(req,res){
    let sql = "update tb_board set title = ? , content = ? where no = ?";
    let data = [req.body.title,req.body.content,req.body.no];
    con.query(sql,data,function(err){
        if(err){
            console.log("writeBoard 에러 발생");
            console.log(err);
            return;
        };
        res.redirect("/list.do");
    });
});

app.get("/delete.do",function(req,res){
    let sql = "delete from tb_board where no = ?";
    con.query(sql,req.query.no,function(err){
        if(err){
            console.log("deleteBoard 에러 발생");
            console.log(err);
            return;
        };
        res.redirect("/list.do");
    });
});

