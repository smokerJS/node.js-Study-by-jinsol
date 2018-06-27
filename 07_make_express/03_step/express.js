var http = require("http");
var server = http.createServer((req,res)=>{
    res.end();
});
module.exports = function(){
    return{
        get(){
            console.log("get");
        },
        post(){
            console.log("post");
        },
        listen(port,fn){
            server.listen(port,fn);
        }
    };
};
