#!/usr/bin/node

const Read = require('stream').Readable;
var c = 'a'.charCodeAt(0);
var MyReadable = function(){
  Readable.call(this);
};
//重载
MyReadable.prototype = Read.prototype;

MyReadable.prototype._read => (){
  this.push(String.fromCharCode(c++));
  if(c > 'z'.charCodeAt(0) this.push(null));
}; 

module.exports = MyReadable;
