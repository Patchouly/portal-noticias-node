module.exports.index = function(application, req, res) {
	
	var client = application.config.dbConnection();
	client.connect();
	
	var noticiasModel = new application.app.models.NewsEntity(client);
	noticiasModel.getLastNews(function(err, result){
		if (err) {
			console.log(err.stack);
		} else {
			//console.log(result.rows);
			res.render("home/index", {noticias : result.rows});
		}
		client.end();
	});
};