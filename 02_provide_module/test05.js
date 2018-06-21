// crypto : 해쉬 생성 및 암호화 관련

var crypto = require("crypto");

// 해쉬 알고리즘 : sha1, md5, sha256, sha512
var sha1 = crypto.createHash("sha1");
var pass = "abc123456";
sha1.update(pass);

// 암호화 처리
var output = sha1.digest("base64");   //hex, binary, base64
console.log("원본 : ",pass);
console.log("해쉬 : ",output);

// 사용자 입력값과 비교하기 위해서 입력받는 동시에 해쉬를 하여 비교