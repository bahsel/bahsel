const express = require('express')
const fs = require('fs')
const https = require('https')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev });
const app = next(false);
const handle = app.getRequestHandler();

var credentials = {
	key: fs.readFileSync('./ssl/privatekey.pem'),
	cert: fs.readFileSync('./ssl/certificate.pem')
};

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  https.createServer(credentials, app).listen({'port':443, 'host':'10.3.30.54'}, () => {
    console.log('App listening on port 443.')
  });
})

// Redirect from http port 80 to https
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80, '10.3.30.54', () => {
	console.log('App redirecting http traffic to https.')
});
