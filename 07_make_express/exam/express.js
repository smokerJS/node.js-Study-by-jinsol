var http = require("http");
var url = require("url");
var middleware = [];
var getMap = [];
var postMap = [];
var qs = require("querystring");
var server = http.createServer(function(req,res){
    for(let i = 0 ; i < middleware.length ; i ++){
        middleware[i](req,res);
    };

    var urlInfo = url.parse(req.url,true);

    var fn = getCb(req.method,urlInfo.pathname);
    if(fn){
        res.send = function(data){
            res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
            res.end(data);
        }
        res.redirect = function(path){
            res.writeHead(302,{"Location":path});
            res.end();
        }
        if(req.method == "GET"){
            req.query = urlInfo.query;
            fn(req,res);
        }else if(req.method == "POST"){
            let queryString = "";
            req.on("data",(data)=>{
                queryString += data;
            });
            req.on("end",()=>{
                req.body = qs.parse(queryString);
                fn(req,res);
            });
        };
    }else{
        err404(req,res);
    };
});

function err404(req,res){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.end("<h1>404</h1><p>해당 URL을 지원하지 않습니다.</p>");
};

function getCb(method,path){
    let fn = null;
    if(method == "GET"){
        fn = getMap[path];
    }else if(method == "POST"){
        fn = postMap[path];
    };
    return fn;
};

module.exports = function(){
    return{
        get(url,fn){
            getMap[url] = fn;
        },
        post(url,fn){
            postMap[url] = fn;
        },
        listen(port,fn){
            server.listen(port,fn);
        },
        use(fn){
            middleware.push(fn);
        }
    };
};
