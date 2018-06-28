var app = require("express")();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/server02.html");
});

io.on("connection", function (socket) {
  socket.on("echo", function (data) {
    console.log("클라이언트 전송 데이터 : " + data);
    socket.emit("serverEcho", data);
  });
});

server.listen(10001, function () {
	console.log("서버 구동 시작...");
});