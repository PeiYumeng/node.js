#!/usr/bin/node
const msg = ['Name','Email','QQ','Mobile'];
var usr = {},i=1;
console.log(msg[i-1]+':');

process.stdin.on('data',function(data){
  usr[msg[i-1]] = data.slice(0,data.length-1).toString('utf8');
  if(i==4){
    console.log(usr);
    process.exit();
  }else{
    process.stdout.write(msg[i++]+':');
  }
})

