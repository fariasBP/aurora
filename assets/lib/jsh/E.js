'use strict';
function E() {}
E.FILTERKEYS = /[^\{\}]+(?=\})/g;
E.exp2 = /[^\{\}]+(?=\})/g;
E.exp3 = /[ \w\+\=\'\(\)]+(?=\;)/g;
E.exp4 = /^\s+|\s+$/g;
E.exp5 = /[\{\}]+/g;
E.exp6 = /(}})+|({{)+/g;

exports.E = E;