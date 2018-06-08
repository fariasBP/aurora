let Utils = require('./Utils2').Utils;
function Server() {
    Utils.prototype.constructor.call(this)
    this.http = require('http');
    console.log('en server')
}
Server.prototype = new Utils();
Server.prototype.constructor = Server;

Server.prototype.create = (callback, port,hostname, messege) => {
    console.log(this.http)
    let x = this.http.createServer(callback);
    let y = [];
    y['port'] = (port==undefined||port==false)?8080:port;
    y['hostname'] = (hostname==undefined||hostname==false)?'localhost':hostname;
    x.listen(y['port'], y['hostname'] ,()=>{
        if(messege==undefined||messege==false) return;
        if(messege==true) {
                console.log(`listening in: ${y['hostname']}:${y['port']}`)
        } else if(typeof(messege) == 'function'){
            messege();
        }
    });
}
exports.Server = Server;