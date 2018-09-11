var pg = require('pg');
const connectionString = 'postgresql://postgres:cabong@localhost:5432/nodeTraining';

var connPG = function() {
	console.log('Conexão recuperada');
	return new pg.Client({
		connectionString: connectionString,
	});
}

module.exports = function() {
	console.log('Carregou conexão');
	return connPG;
}