const express = require('express')
const fs = require('fs')
const https = require('https')
const gatsyExpress = require('gatsby-plugin-express');
const app = express();

const path = require('path');

var credentials = {
	key: fs.readFileSync('./ssl/privatekey.pem'),
	cert: fs.readFileSync('./ssl/certificate.pem')
};

// serve static files before gatsbyExpress
app.use(express.static('public/'));
app.use(gatsyExpress('config/gatsby-express.json', {
  publicDir: 'public/',
  template: path.resolve('public/404/index.html'),

  // redirects all /path/ to /path
  // should be used with gatsby-plugin-remove-trailing-slashes
  redirectSlashes: true,
}));

https.createServer(credentials, app).listen(443, '10.3.30.54', () => {
	console.log('App listening on port 443.')
});

// Redirect from http port 80 to https
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80, '10.3.30.54', () => {
	console.log('App redirecting http traffic to https.')
});
