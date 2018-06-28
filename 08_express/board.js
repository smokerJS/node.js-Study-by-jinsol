var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
    res.send("<h1>게시판 메인</h1>");
});

router.get("/list.do",function(req,res){
    res.send("<h1>게시판 목록</h1>");
});

router.get("/writeForm.do",function(req,res){
    res.send("<h1>등록폼</h1>");
});

router.get("/write.do",function(req,res){
    res.send("<h1>등록</h1>");
});

module.exports = router;