#!/usr/bin/node

const fs = require('fs'),
      log = console.log,
      http = require('http');
var data = fs.readFileSync('./nodejs-logo.bmp').toString('base64');
//log(data);

var html = ''

  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
      + '<meta charset="UTF-8">'
          + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
              + '<meta http-equiv="X-UA-Compatible" content="ie=edge">'
                  + '<title>Document</title>'
                  + '</head>'
                  + '<body>'
                      + '<img src = "data:image/jpg;base64,'+data+'">'
                      + '</body>'
                      + '</html>'

http.createServer((req,res)=>{
  res.end(html);
}).listen(8080);


                  
