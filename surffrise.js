var https = require('https');

var server = https.createServer(function(req, res) {
	res.writeHead(200);
	res.end('Hello Https');
});

server.listen(8080);