var http = require('http');
var dt = require('./ownModule.js');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    //res.write("the data and time are currently: "+ dt.getCurrentDate());
    res.write("the data and time are currently: ");
    res.end();
}).listen(8800);