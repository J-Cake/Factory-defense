const http = require('http');
const fs = require('fs');
const path = require('path');
const socketio = require('socket.io');

const Public = path.join(__dirname, 'public');

const server = http.createServer(async (req, res) => {
	const fileInQuestion = path.resolve(path.join(Public, req.url));
	const currentFile = fileInQuestion.slice(0, 0 - path.resolve(req.url).replace(/^[A-Za-z]:/, '').length);

	// console.log(
	// 	path.join(Public, path.resolve(req.url).replace(/^[A-Za-z]:/, ''))
	// );

	const file = (file => file + (file.split('/').pop().indexOf('.') === -1 ? '/index.html' : ''))(fileInQuestion.replace(/\\/g, '/'));

	if (fs.existsSync(file)) {
		res.writeHead(200, { "Content-type": getType(file.split('.').pop())});
		res.write(fs.readFileSync(file, 'utf8'));
		res.end();
	} else {
		res.writeHead(404, {"Content-type": "text/plain"});
		res.end("File doesn't exist");
	}
	// res.end('Hello');
});

server.listen(8080);

function getType(extension) {
	switch (extension) {
		case 'html':
			return 'text/html';
		case 'css':
			return 'text/css';
		case 'js':
		case 'mjs':
		case 'jsx':
		case 'es6':
			return 'text/javascript';
		case 'png':
			return 'image/png';
		case 'jpg':
		case 'jpeg':
			return 'image/jpeg';
		case 'gif':
			return 'image/gif';
		case 'mp4':
			return 'audio/mpeg';
		default:
			return 'text/plain';
	}
}

const io = socketio(server);

function getFile(file) {
	const joined = path.join(file, "index.html");

	if (fs.existsSync(file))
		return fs.lstatSync(file).isDirectory() ? joined : file;
	else if (fs.existsSync(joined))
		return joined;
	else
		return null;
}

io.on('connection', socket => {
	console.log('someone joined');
	socket.emit('join', 'Hello World');
});
