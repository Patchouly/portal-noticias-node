/* TODO list
* -
* - Install Node.js https://nodejs.org (testar no CMD com o comando {node -v})
* - Testar se o NPM foi instalado junto com o nodejs {npm -v}
* - npm config set proxy http://<username>:<password>@<proxy-server-url>:<port>
* - npm config set https-proxy http://<username>:<password>@<proxy-server-url>:<port>
* - Escolhe um diretório para o novo projeto NodeJs e inicia o NPM {npm init} (cria um projeto node na pasta selecionada)
* - Testar o novo projeto com o comando {node <app>}
* - Instala o Express {npm install express --save} (--save inclue a instalação na pasta node_modules do projeto)
* - Instalar EJS {npm install ejs --save} (Estrutura de página HTML com abertura para javascript server side)
* - Instalar o NodeMon {npm install -g nodemon} (plugin que recompila o código ao perceber qualquer alteração no codigo fonte, -g instala de forma global)
* - Testar o nodemon passando a levantar a aplicação com o comando {nodemon <app>}
* - Instala modulo do banco de dados {npm install pg --save} (pg = plugin do PostgreSQL)
* - Instalar o consign {npm install consign --save} (plugin que facilita a localização das rotas e módulos)
* - Instalar body-parser {npm install body-parser --save} (plugin do express para preencher os dados enviados pelo post no model)
* - Instala express validator {npm install express-validator --save} (plugin que valida os dados do post)
* - 
*/

var express = require('express'); //Framework para aplicações web
var consign = require('consign'); //gerencia os routes e módulos
var bodyParser = require('body-parser'); //facilita a comunicação view <--> model
var expressValidator = require('express-validator'); //lib de validações server side

var app = express(); //inclui express no projeto

app.set('view engine', 'ejs'); //seta o tecnologia usada nas views

app.set('views', './app/views'); //Seta a pasta onde estão as views

app.use(express.static('./app/views/assets')); //mapeia a pasta assets (onde estão os arquivos estaticos: css, js, img, etc)

app.use(bodyParser.urlencoded({extended: true})); //pega os dados do submit e coloca em um json indexados pela tag name

app.use(expressValidator()); //valida submits


consign()
	.include('app/routes')//roteia os views
	.then('config/dbConnection.js')//adiciona o connection em cada pagina roteada (lembrar de por extenção quando apontamento não for pasta)
	.then('app/models')//aplica os models
	.then('app/controllers')//aplica os controllers
	.into(app);

module.exports = app;