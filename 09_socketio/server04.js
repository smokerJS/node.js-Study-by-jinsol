var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var idArr = [];

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/server04.html');
});

io.on("connection", function (socket) {  
  // 마지막 접속한 사용자의 소켓 구분 아이디를 저장
  socket.on("login", function (loginId) {
    console.log("접속한 회원 정보 : " + loginId, socket.id);
    // 입력한 아이디와 socket.id를 연결
    idArr[loginId] = socket.id;
  });
  
  socket.on("msg", function (data) {
	  io.to(idArr[data.recvId]).emit(
              "msg", 
              data.sendId + "님이 당신에게 귓말을 보냈습니다.\n" + data.msg);
  });
});

server.listen(10001, function() {
  console.log('Socket IO server listening on port 10001');
});

