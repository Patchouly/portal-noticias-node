module.exports.listNews = function(application, req, res) {
	
	var client = application.config.dbConnection();
	client.connect();
	
	var noticiasModel = new application.app.models.NewsEntity(client);
	
	noticiasModel.getNoticias(function(err, result){
		if (err) {
			console.log(err.stack);
		} else {
			res.render("noticias/noticias", {noticias : result.rows});
		}
		client.end();
	});
}

module.exports.showNew = function(application, req, res) {
	
	var client = application.config.dbConnection();
	client.connect();
	
	var noticiasModel = new application.app.models.NewsEntity(client);
        
        var param = req.query;
	
	noticiasModel.getNoticia(param, function(err, result){
		if (err) {
			console.log(err.stack);
		} else {
			res.render("noticias/noticia", {noticia : result.rows});
		}
		client.end();
	});
}