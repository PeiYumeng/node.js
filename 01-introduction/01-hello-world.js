#!/usr/bin/node
//引入模块
const http = require("http");

var server = http.createServer(function(req,res){
  res.write("hello world!");
  res.end();
});
server.listen(8080);
//监听8080端口
console.log("hello world!");
