var mysql = require("mysql");
var con = mysql.createConnection({
    //host:"localhost", // 디폴트
    //port:3306,        // 디폴트
    user:"bit",
    password:"bit",
    database:"bitdb"
});

con.connect(function(err){
    if(err){
        console.log("연결시 에러 발생");
        console.log(err);
        return;
    }
    console.log("DB연결");
});

createTable();

function createTable(){
    let sql = `create table tb_board(
                   no int(10) auto_increment primary key,
                   writer varchar(30) not null,
                   title varchar(300) not null,
                   content varchar(1000) not null,
                   reg_date datetime default now()
               )`;
    con.query(sql,function(err,result){
        if(err){
            console.log("테이블 생성 오류");
            console.log(err);
            return;
        }else{
            console.log("테이블 생성 완료");
            console.log(result);
            con.end();
        }
    });
}
