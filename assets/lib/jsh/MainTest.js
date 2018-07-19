'use strict';
let Jass = require('./Jass').Jass;

var x = new Jass();
var data = '<h1>Hello <?php hello?></h1>';
var y = x.renderAsinc(data);
console.log(y);