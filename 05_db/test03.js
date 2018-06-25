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

insertData();

function insertData(){
    let sql = `insert into tb_board(title, writer, content)
               values
                   ('test1','tester','연습1'),
                   ('test2','tester','연습2'),
                   ('test3','tester','연습3'),
                   ('test4','tester','연습4'),
                   ('test5','tester','연습5')`;
    con.query(sql,function(err,result){
        if(err){
            console.log("insert 오류");
            console.log(err);
            return;
        }else{
            console.log("insert 완료");
            console.log(result);
            con.end();
        }
    });
}
