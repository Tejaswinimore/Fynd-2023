var http = require('http');
var dt = require('./ownModule.js');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("SERVER2: "+ dt.getCurrentDate());
    res.end();
}).listen(8802);