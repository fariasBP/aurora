'use strict';
const express = require('express');
const app = express();
var server = require('http').createServer(app);
const ServerShutdown = require('server-shutdown');
const serverShutdown = new ServerShutdown();
const io = require('socket.io')(server);
serverShutdown.registerServer(io, ServerShutdown.Adapters.socketio);
const spawn = require('child_process').spawn;
var messages = [{
author: "Carlos",
text: "Hola! que tal?"
}];
var sockets = [];
app.use(express.static('public'));
app.get('/hello', function (req, res) {
res.status(200).send("Hello World!");
});
app.get('/sleep', function (req, res) {
const ls = spawn('sleep', ['10']);
ls.on('close', (code) => {
res.send('wake up!\n');
});
});
io.on('connection', function (socket) {
sockets.push(socket);
socket.emit('messages', messages);
socket.on('new-message', function (data) {
messages.push(data);
io.sockets.emit('messages', messages);
});
});
process.on('SIGHUP', _ => {
serverShutdown.shutdown(_ => {
process.exit(0);
});
}).on('SIGTERM', _ => {
serverShutdown.forceShutdown(_ => {
process.exit(0);
});
});
server.listen(8100);
serverShutdown.registerServer(server);