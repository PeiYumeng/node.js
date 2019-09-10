#!/usr/bin/node
const chalk = require('chalk');
const log = console.log;
log('this is '+chalk.red('red'));
log('this is '+chalk.green('green'));
log('this is '+chalk.blue('blue')+chalk.green('green'));
