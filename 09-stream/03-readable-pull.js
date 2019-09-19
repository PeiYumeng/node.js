#!/usr/bin/node

const Read = require('stream').Readable;

var r = new Read();
//拉取流什么时候要数据什么时候才用内存
//上一个存到了内中中直到pipe才流动


var c = 'a'.charCodeAt(0);
r._read = () =>{
  r.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) r.push(null);
};
r.pipe(process.stdout);
