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

deleteData();

function deleteData(){
    let sql = `delete
                 from tb_board
                where no = 2`;
    con.query(sql,function(err,result){
        if(err){
            console.log("delete 오류");
            console.log(err);
            return;
        }else{
            console.log("delete 완료");
            console.log(result);
            con.end();
        }
    });
}
