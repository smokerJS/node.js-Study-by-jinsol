var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/server03.html');
});

io.on("connection", function (socket) {
  console.log(socket.id);
  socket.on("msg", function (data) {
    // 개별통신 : 데이터를 보낸 사용자에게만 보내기
    //socket.emit("msg", data);
    
    // 접속한 사용자 모두에게 데이터 전송
	  //io.emit("msg", data);
    
    // 나를 제외한 접속자 모두에게
    //socket.broadcast.emit("msg", data);
  });
  
  socket.on('disconnect', function() {
	 console.log('연결 종료 : ' + socket.id);
  });
});

server.listen(10001, function() {
  console.log('Socket IO server listening on port 10001');
});