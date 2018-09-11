module.exports = function(application) {
	
	application.get('/news', function(req, res) {
			
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
	});
};

/*module.exports = function(application) {
	
	var pg = require('pg');
	const connectionString = 'postgresql://postgres:cabong@localhost:5432/nodeTraining';
		
	application.get('/news', function(req, res) {
		
		
		var client = new pg.Client({
			connectionString: connectionString,
		});
		client.connect();
		
		client.query("SELECT * from noticias", function(err, result){
			if (err) {
				console.log(err.stack);
			} else {
				//res.send(result);
				res.render("noticias/noticias", {noticias : result.rows});
			}
			client.end();
		});
	});
};*/