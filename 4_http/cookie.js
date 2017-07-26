var http = require('http');

http.createServer(function (request, response) {
	
	var date = new Date();
	date.setDate(date.getDate() + 7);

	response.writeHead(200, {'Content-Type': 'text/html',
				'Set-Cookie': [ 'breakfast = toast;Expires='+date.toUTCString(), 'dinner = chicken']
});
	response.end('<h1>'+ request.headers.cookie +'</h1>');
}).listen(8080);
