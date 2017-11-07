// server.js
const jsonServer = require('json-server');
const express = require('express');
const cors = require('cors')



const router = jsonServer.router('database.json')


var server = express();

server.use(express.static('./public'));
server.use(cors())
server.use('/api', router)
server.post('/api/files', function(req, res, next){
  console.log("Tried to upload file!! lol")
});
/*
server.get('/api/*', cors(), function (req, res, next) {
  console.log("Atleast i was called");
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
/*
server.use(function(req, res, next) {
  console.log("I was called");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/
/*
server.get('/home', function (req, res, next) {
    return res.sendFile('index.html', {
      root: './public/'
    });
  });
*/
var port = process.env.port || 1337
server.listen(port, () => {
  console.log('JSON Server is running')
  console.log(port)
})