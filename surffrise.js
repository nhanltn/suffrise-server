var https = require('https');
var fs = require('fs');

var option = {
	key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
	cert: fs.readFileSync('test/fixtures/keys/agent2-key.pem')
};

var server = https.createServer(option, function(req, res) {
	res.writeHead(200);
	res.end('Hello Https');
});

server.listen(8080);