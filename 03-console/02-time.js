#!/usr/bin/node

function task(){//举例程序
  var num = 1;
  for(var i = 0;i<1000;i++){
    for(var j = 0;j<1000;j++){
      num+=i*j;
    }
  }
  return num;
}
console.time('DOWLOAD-FILE');//console.time开始计时
var n = task();
console.timeEnd('DOWLOAD-FILE');//console.timeEnd计时结束
console.log('n=%d',n);
