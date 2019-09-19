#!/usr/bin/node
console.log(process.pid);
process.stdin.resume();
process.on('SIGINT',function(){
  console.log('press ctrl+c');
});
process.on('SIGTSTP',function(){
  console.log('press ctrl++z')
})
