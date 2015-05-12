// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

try {
    
    server.listen(port, function () {
        console.log('Server listening at port %s', port);
    });
    
    // Routing
    app.use(express.static(__dirname + '/public'));
    
    // Chatroom
    io.on('connection', function (socket) {
        // when the client emits 'new message', this listens and executes
        socket.on('new message', function (data) {
            // we acknowledge that message is arrived.
            socket.emit('new message', data);
            
            // Tell other clients that we receive new message.
            socket.broadcast.emit('new message', data);
        });
    });
}
catch (e) {
    console.log("Fatal exception '%s'", e.message);
    console.log(e.stack);
}