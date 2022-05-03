var express = require('express');
var packageInfo = require('./package.json');
const http = require('http');
const path = require('path');

var app = express();

app.use(express.json());
app.use(express.static("express"));

// default URL for website
app.use('/original', function(req,res){
    res.sendFile(path.join(__dirname+'/Public/simple.html'));
    //__dirname : It will resolve to your project folder.
  });

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Web server started at http://%s:%s', host, port);
});
