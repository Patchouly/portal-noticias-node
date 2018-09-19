module.exports.addnew = function (application, req, res) {
    res.render("admin/form_news", {noticia: {}});
    //res.render("admin/form_news", {validacao:{}}); //substitui a necessidade de usar a variavel "locals" antes de chamar uma variavel não instanciada
}

module.exports.saveNews = function (application, req, res) {
    var noticia = req.body; //npm install body-parser --saves

    req.assert('titulo', 'Titulo é obrigatório').notEmpty();
    req.assert('titulo', 'Titulo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('noticia', 'Conteudo da nóticia é obrigatório').notEmpty();
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data inválida').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render("admin/form_news", {validacao: erros, noticia: noticia});
        return;
    }

    var client = application.config.dbConnection();
    client.connect();

    var noticiasModel = new application.app.models.NewsEntity(client);

    noticiasModel.inserNew(noticia, function (err, result) {
        if (err) {
            console.log(err.stack);
            return (500, JSON.stringify({"Error": true}));
        } else {
            res.redirect("/news");
            //res.render("noticias/noticias", {noticias : result.rows});
        }
        client.end();
    });
}