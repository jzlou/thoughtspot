const http = require('http');

const hostname = 'localhost';
const port = 2999;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('i am to wait, though waiting be so hell\n');
});

server.listen(port, hostname, () => {
	console.log(`server running at ${hostname}:${port}`);
});
