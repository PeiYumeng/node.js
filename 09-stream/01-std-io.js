#!/usr/bin/node


//输入小写转换为大写
const stdin = process.stdin,//标准输入流
      stdout = process.stdout;//标准输出流
stdin.resume();//消费流，使流处于流动状态
//让流处于流动状态还有其他两种方法 ：on 、监听
stdin.on('data',function(data){
  stdout.write(data.toString('utf8').toUpperCase());
});

