#!/usr/bin/node

const Radio = require('./04-listen-radio.js');

const station = {
  freq:'106.7',
  name:'music Radio'
};
var radio = new Radio(station);

radio.on('play',(station)=>{
  console.log('"%s" FM %s opened!',station.name,station.freq);
  console.log('lallal...');
});
radio.on('stop',(station)=>{
  console.log('"%s" FM %s closed!',station.name,station.freq);
});
