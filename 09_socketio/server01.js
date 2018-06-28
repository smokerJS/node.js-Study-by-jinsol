//  npm install socket.io
//  Real-time communication(RTC, 실시간 양방향 통신)
//  브라우저 간 호환이나 이전 버전 호환을 고려하여 Node.js를 위한 강력한 
//  Cross-platform WebSocket API인 Socket.io를 사용하는 것이 바람직하다.
var app = require("express")();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/server01.html");
});

io.on("connection", function (socket) {
  console.log("사용자 소켓 IO 접속됨...");
});

server.listen(10001, function () {
	console.log("서버 구동 시작...");
});









