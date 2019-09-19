#!/usr/bin/node

function Radio(station){
  var _listeners = {};

  setTimeout(()=>{
    self.emit('play',station);
  },0);
  setTimeout(()=>{
    self.emit('stop',station);
  },5000);

  function emit(evt,arg){
    if(typeof(_listeners[evt])=== 'undefined'){
      console.error('Error:%s not defined',evt);
      process.exit(1);
    }
    _listeners[evt].forEach((fn) =>{
      fn.call(this,arg);
    });
  };

  this.on = (evt,fn)=>{
    if(typeof_listeners[evt]==='undefined'){
      _listeners[evt] = [];
    }

    _listeners[evt].push(fn);
  };
}
util.inherits(Radio,EventEmitter);
module.exports = Radio;
