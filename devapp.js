const HOST = '127.0.0.1';

var http = require('http');

// server
const setupServer = require('./server');

server = setupServer();

http.createServer(server).listen({ 'port': 3000, 'host': HOST }, () => {
    console.log('App listening on port 3000.')
});
