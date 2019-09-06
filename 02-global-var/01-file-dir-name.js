#!/usr/bin/node
console.log("dir name",__dirname);
console.log("file name",__filename);

var file = __dirname + '/view/view.html';
console.log('file name',file);
/*
switch(){
  case 'linux':
    file = __dirname + '';
    break;
  case 'win32':
    file = __dirname + '';
    break;
}
const path = require('path');
path.join(__dirname,'data','view.html');
console.log('path join file name:',file);
*/
//文件目录拼接win系统是\，需要转义字符\\
//mac和linux文件目录直接是/
//join是把所有元素拼接到一个字符串
