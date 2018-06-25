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

selectTable();

function selectTable(){
    let sql = `select no,title,writer
                 from tb_board
                order by no desc
                limit ?,?`;   // 페이징 0부터 2개만큼 뽑기 위하여 동적대입
    con.query(sql,[0,2],function(err,rows,fields){
        if(err){
            console.log("select 오류");
            console.log(err);
            return;
        }else{
            console.log("select 완료");
            console.log(rows);
            console.log(fields);    // 컬럼에 대한 정보를 준다.
            con.end();

            rows.forEach((row,i) => {
                console.log(row,i);
            });
        }
    });
}
