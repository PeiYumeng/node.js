#!/usr/bin/node

const http = require("http");

var server = http.createServer(function(req,res){
  res.write("hello world!");
  res.end();
});
server.listen(8080);
console.log("hello world!");
