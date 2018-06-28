var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
    res.send("<h1>사용자 메인</h1>");
});

router.get("/list.do",function(req,res){
    res.send("<h1>사용자 목록</h1>");
});

module.exports = router;