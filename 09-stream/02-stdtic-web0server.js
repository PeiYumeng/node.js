#!/usr/bin/node

const http = require('http'),
      fs = require('fs');
http.createServer((req,res)=>{
  if(req.url === '/favicon.ico'){
    return;//屏蔽这个
  }
  var fileName = __dirname + req.url;
  console.log(fileName);
 //res.end(fs.readFileSync(fileName).toString());
  res.end();
}).listen(8080);
console.log(process.pid);
