module.exports = function(application) {
	application.get('/addnew', function(req, res) {
		res.render("admin/form_news");
	});
	
	application.post('/news/salvar', function(req, res) {
		var noticia = req.body; //npm install body-parser --save
		
		req.assert('titulo','Titulo é obrigatório').notEmpty();
		req.assert('titulo','Titulo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('noticia','Conteudo da nóticia é obrigatório').notEmpty();
		req.assert('autor','Autor é obrigatório').notEmpty();
		req.assert('data_noticia','Data inválida').notEmpty();
		
		var erros = req.validationErrors();
		
		console.log(erros);
		
		if (erros) {
			res.render("admin/form_news");
			return;
		}
		
		var client = application.config.dbConnection();
		client.connect();
		
		var noticiasModel = new application.app.models.NewsEntity(client);
		
		noticiasModel.inserNew(noticia, function(err, result){
			if (err) {
				console.log(err.stack);
				return (500,JSON.stringify({"Error":true}));
			} else {
				res.redirect("/news");
				//res.render("noticias/noticias", {noticias : result.rows});
			}
			client.end();
		});
	});
};