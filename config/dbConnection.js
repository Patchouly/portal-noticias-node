var pg = require('pg');
const connectionString = 'postgresql://postgres:cabong@localhost:5432/nodeTraining';

//faz com que não conecte com o banco ao subir o servidor
var connPG = function() { 
	console.log('Conexão recuperada');
	return new pg.Client({
		connectionString: connectionString,
	});
}

module.exports = function() {
	console.log('Carregou conexão');
	return connPG; //retorna um objeto com a conexão, sem necessariamente conecta-lo
}