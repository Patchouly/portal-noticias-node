var express = require('express'); 
var consign = require('consign'); //gerencia os routes e models
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

//pega os dados do submit e coloca em um json indexados pela tag name
app.use(bodyParser.urlencoded({extended: true}));
//valida submits
app.use(expressValidator());

//roteia os views
//adiciona o connection em cada pagina roteada (lembrar de por extenção quando apontamento não for pasta)
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);

module.exports = app;