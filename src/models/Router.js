//'use strict';
let Server = require('./Server').Server;
class Router extends Server {
    constructor() {
        super();
    }
    routerTemplates() {
        var routingStar = (req, res) => {
            var hola = '<h1>Hola Mundo</h1>';
            var otra = '<h2>Otra vez</h2>';
            
            res.writeHead(200, {'Content-Type':'text/html'});
            this.readFileUtf8('./src/views/home.jsh', (err, data) => {
                if (err) throw err;
                let code = data.match(/[^\{\}]+(?=\})/g);
                var lineCode = [];
                eval("var uno = 10");
                console.log(uno)
                var dataR;
                var a;
                
                for (let key in code) {
                    lineCode[key] = (code[key].match(/[ \w\+\=]+(?=\;)/g));
                    for (let i in lineCode[key]) {
                        lineCode[key][i] = lineCode[key][i].replace(/^\s+|\s+$/g, "");
                        console.log(lineCode[key][i])
                        eval(lineCode[key][i])
                        a = eval(lineCode[key][i]);
                        data.replace(/[\{\}]+/g, '')
                        data = data.replace(lineCode[key][i]+';', a);
                    } 
                }
                data = data.replace(/(}})+|({{)+/g, "");
                console.log('LINECODE:\n', lineCode)
                res.end(data);
            });        
        }
        this.create(routingStar, 8000, null, true);    
    }
}
exports.Router = Router;