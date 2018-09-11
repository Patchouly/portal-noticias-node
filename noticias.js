var http = require('http');

var server = http.createServer( function(req, res){
	
	var categoria = req.url;

	var response = "<html><body>Portal de Notícias<br/>";
	if (categoria == '/tech') {
		response += "Categoria de Tecnologia";
	} else if (categoria == '/moda') {
		response += "Categoria de Moda";
	}
	response += "</body></html>";
	res.end(response)
	
	
});

server.listen(3000);