var con = require("mysql")
         .createConnection({
              user:"bit",
              password:"bit",
              database:"bitdb"
          });


var sql = "insert into tb_board(writer, title, content) values(?,?,?)";

con.query(sql,["jinsol","동적 입력","노드를 이용한 입력"],function(err,result){
    if(err){
        console.log("입력시 에러 발생");
        console.log(err);
        return;
    }else{
        console.log(result.insertId);   // selectKey insert 값의 AI를 가져온다.
        console.log(result.affectedRows);   // insert 에 영향받은 행의 수
    }
})

