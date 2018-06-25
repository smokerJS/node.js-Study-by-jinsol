/*

    데이터 베이스 연결하기

    모듈설치 : npm install mysql

    MySQL 8 버젼인 경우
    ALTER USER 'id'@'%' IDENTIFIED WITH mysql_native_password BY 'pass';

*/

var mysql = require("mysql");


// MySQL 연결하기
var con = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"bit",
    password:"bit"
});

// DB 연결
con.connect();

con.query("create database bitdb",function(err,result){
    if(err){
        console.log(err);
        return;
    }
    console.log("bitdb 생성완료");
});

// DB 연결끊기
con.end();