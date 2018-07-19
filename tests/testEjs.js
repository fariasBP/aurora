'use strict';
let http = require('http');
let ejs = require('ejs');
let fs = require('fs');



http.createServer((req, res) => {
    console.log('connecting...');
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('testEjs.ejs', 'utf-8', (err,data)=>{
        var title = 'Titulo';
        res.end(ejs.render(data));
    })
    
}).listen(8080);