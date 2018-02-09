var http = require('http');
var path = require('path');
var express = require('express');
var app = express();



app.use(express.static(path.join(__dirname + "/dist")));

app.get('/', function(req, res, next) {
    res.sendFile(__dirname+"/dist/index.html");
});

var allClients = [];

var server = http.createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(socket){
    allClients.push(socket);
    io.emit('online', {online : allClients.length});
    io.emit('id', {id : socket.id});


    socket.on('disconnect', function() {
        var i = allClients.indexOf(socket);
        allClients.splice(i, 1);
        io.emit('online', {online : allClients.length});
    });

    socket.on('chat message', function(msg, id){
        io.emit('chat message', {msg : msg, id: id});
    });
});

server.listen(process.env.PORT || 3000);