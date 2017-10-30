// server.js
const jsonServer = require('json-server');
const express = require('express');


const router = jsonServer.router('database.json')


var server = express();
server.use(express.static('./public'));
server.use('/api', router)

server.get('/home', function (req, res, next) {
    return res.sendFile('index.html', {
      root: './public/'
    });
  });
console.log("Testing port: " + process.env.PORT)
server.listen(443, () => {
  console.log('JSON Server is running')
})