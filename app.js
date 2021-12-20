const HOST = '10.3.30.54';

const fs = require('fs')
var http = require('http');
const https = require('https')

// server
const setupServer = require('./server');

var credentials = {
	key: fs.readFileSync('./cfg/privatekey.pem'),
	cert: fs.readFileSync('./cfg/certificate.pem')
};

server = setupServer();

https.createServer(credentials, server).listen({ 'port': 443, 'host': HOST }, () => {
  console.log('App listening on port 443.')
});

// Redirect from http port 80 to https
http.createServer(function (req, res) {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(80, HOST, () => {
  console.log('App redirecting http traffic to https.')
});