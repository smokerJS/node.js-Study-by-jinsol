// path : 경로에 대한 다양한 값을 추출

var path = require("path");

console.log(path.join("c:/test"));
console.log(path.join("c:/test","/aa/bb","/index.js"));
console.log(path.join("c:/test/","/aa/bb/","index.js"));    // 간편하게 /를 처리해준다.

var fileName = "c:/test/aa/bb/index.js";
console.log("디렉토리 : ",path.dirname(fileName));
console.log("확장자 : ",path.extname(fileName));
console.log("파일명 : ",path.basename(fileName));
console.log("파일명(확장자 제외) : ",path.basename(fileName,".js"));
console.log("파일명(확장자 제외) : ",path.basename(fileName,path.extname(fileName)));
