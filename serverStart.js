var http = require('http');
var fs = require('fs');
var request = require('request');
var vaildUrl = require('valid-url');
var url = require('url');

const PORT=8080; 

function readFile(path){

	let result = null;

	try {
		result = fs.readFileSync(path);
	}  catch(err) {
		console.log("Unable to open file [" + path + "]");
	}
	return result;
}

function getResource(path) {
	if(vaildUrl.isHttpUri(path) ||  vaildUrl.isHttpsUri(path)){
		request(url.URL(path), () => {


			
		});
	} else {

	}
}


http.createServer(function(request, response) {

	let path = "." + request.url;
	console.log(request.url);
	response.writeHeader(200, {"Content-Type": "text/html"});

	if(path == "./") {
		let data = readFile("./index.html");
		response.write(data);
	} else {
		let data = readFile(path);
		if(data != null) {
			response.write(data);
		} else {
			response.statusCode = 404;
			response.statusMessage = 'Resource not found [' + request.url + "]";
		}
	}

	response.end();  
}).listen(PORT);