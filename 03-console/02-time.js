#!/usr/bin/node

function task(){
  var num = 1;
  for(var i = 0;i<1000;i++){
    for(var j = 0;j<1000;j++){
      num+=i*j;
    }
  }
  return num;
}
console.time('DOWLOAD-FILE');
var n = task();
console.timeEnd('DOWLOAD-FILE');
console.log('n=%d',n);
