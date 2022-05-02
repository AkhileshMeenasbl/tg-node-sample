var express = require('express');
var packageInfo = require('./package.json');
const http = require('http');
const path = require('path');

var app = express();


app.use(express.json());
app.use(express.static("express"));

//METHOD 2
// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/Public/simple.html'));
    //__dirname : It will resolve to your project folder.
  });
//const server = http.createServer(app);
//const port = 3000;
//server.listen(port);
//console.debug('Server listening on port ' + port);

//METHOD 1
app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Web server started at http://%s:%s', host, port);
//});
