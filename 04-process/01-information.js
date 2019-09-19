#!/usr/bin/node
const log = console.log;
log('CPU:',process.arch);
log('OS:',process.platform);
log('PID:',process.pid);
log('execPath',process.execPath);

//标准输入流的读取操作
process.stdin.on('data',function(data){
  log(data);
})

//process是全局变量，也可以使用require()显示的访问

log('node version:', process.version);
log('user id:', process.getuid());
log('group id:', process.getgid());
log('cwd: %s\n', process.cwd());

log('rss:', process.memoryUsage().rss);
log('heapTotal:', process.memoryUsage().heapTotal);
log('heapUsed:', process.memoryUsage().heapUsed);
log('external: %s\n', process.memoryUsage().external);

log('env:', process.env);
log('host name:', process.env.HOSTNAME);
