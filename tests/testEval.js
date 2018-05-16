//'use strict';
eval("var uno = 1")
eval("var dos = 2")
eval("function suma(a, b) {return a + b;}");
console.log(suma(uno, dos));

class test {
    static main () {
        let http = require('http');
        http.createServer((req, res) => {
            res.writeHead(200, {'Content-Type':'text/html'});
            eval("var uno = 1")
            eval("var dos = 2")
            eval("function suma(a, b) {return a + b;}");
            console.log(suma(uno, dos));
            res.end('hello world');
        }).listen(8080);
    }
}
test.main();
         