var http = require('http');
var dt = require('./homework2.js');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write(dt.getAll);
    res.end();
}).listen(3000);