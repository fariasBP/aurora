'use strict';
let Server = require('./Server').Server;
class Router extends Server {
    constructor() {
        super();
    }
    routerTemplates() {
        var routingStar = (req, res) => {
            var hola = '<h1>Hola Mundo</h1>';
            var otra = '<h2>Otra vez</h2>';
            var algo = 'algo';
            res.writeHead(200, {'Content-Type':'text/html'});
            this.readFileUtf8('./src/views/home.jsh', (err, data) => {
                if (err) throw err;
                let code = data.match(/[^\{\}]+(?=\})/g);
                var lineCode = [];
                var include = (path) => {
                    console.log('llego')
                    if (path==undefined||path==null) return;
                    let dat= this.readFileSyncUtf8(`./src/views/${path}.jsh`)
                    return dat;
                }
                for (let key in code) {
                    lineCode[key] = (code[key].match(/[ \w\+\=\'\(\)]+(?=\;)/g));
                    for (let i in lineCode[key]) {
                        lineCode[key][i] = lineCode[key][i].replace(/^\s+|\s+$/g, "");
                        //console.log(key+'['+i+']= '+lineCode[key][i])
                        var a = eval(lineCode[key][i]);
                        data.replace(/[\{\}]+/g, '')
                        data = data.replace(lineCode[key][i]+';', a);
                    }
                }
                data = data.replace(/(}})+|({{)+/g, "");
                //console.log('LINECODE:\n', lineCode)
                console.log(res.render);
                res.end(data);
            });        
        }
        this.create(routingStar, 8080, null, true);    
    }
}
exports.Router = Router;