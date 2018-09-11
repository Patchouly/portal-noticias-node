var app = require('./config/server');

//var rotaNoticias = require('./app/routes/news')(app); //comentado após inclusão do consign

//var rotaHome = require('./app/routes/home')(app);

//var rotaForm = require('./app/routes/form_news')(app);

app.listen(3000, function() {
	console.log('Servidor ON');
});