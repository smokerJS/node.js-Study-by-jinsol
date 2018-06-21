// test.txt 파일의 내용을 읽어서 testcopy.text 에 저장

var fs = require("fs");
try{
    var result = fs.readFileSync("test.txt","utf-8");
}catch(e){
    console.log("읽기 중 에러 : ",e);
}
try{
    fs.writeFileSync("testcopy.txt",result,"utf-8");
}catch(e){
    console.log("쓰기 중 에러 : ",e)
}
console.log("카피완료");