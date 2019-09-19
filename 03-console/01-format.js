#!/usr/bin/node
const user = {//创建一个对象
  name:'xiaomeng',
  age:20,
  qq:'457492875'
};
const log = console.log;
//占位符
log('name:%s',user.name);// %s输出字符串
log('age:%d',user.age);// %d输出数字
log('JSON:%j',user);// %j输出JSON字符串对象，键值对形式
log('qq:%s',user.qq);

log('qq:'+user.qq);//两种不用占位符的方式 .
log(`qq:${user.qq}`);//模板字符串输出 `` ${}
console.error('Error! something wrong!');
//标准错误流输出信息

/*
 *console类：console.log() console.error() console.warn()
 * 
 */
