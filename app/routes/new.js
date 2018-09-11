module.exports = function(application) {
	
	application.get('/new', function(req, res) {
			
		var client = application.config.dbConnection();
		client.connect();
		
		var noticiasModel = new application.app.models.NewsEntity(client);
		
		noticiasModel.getNoticia(function(err, result){
			if (err) {
				console.log(err.stack);
			} else {
				res.render("noticias/noticia", {noticia : result.rows});
			}
			client.end();
		});
	});
};