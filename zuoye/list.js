#!/usr/bin/node

const fs = require('fs');
const opt = process.argv[2];
const opt2 = process.argv[3];
var files = fs.readdirSync(__dirname);

if(typeof(opt)==='undefined'){
  console.log('命令行参数错误！');
  process.exit(1);
}

else if(opt == 'list'){
  var arr=[];
  for(var i = 0;i<files.length;i++){
    if(fs.statSync(files[i]).isFile()){

        var obj = {
          fileName:files[i],
          fileSize:fs.statSync(files[i]).size
        };  
      arr.push(obj); 
    }
  }
  console.log(arr);
}
else if(opt == 'mkdir' && opt2 == 'folder'){
  fs.mkdirSync('folder');
}
else{
  console.log('命令行参数错误');
}
