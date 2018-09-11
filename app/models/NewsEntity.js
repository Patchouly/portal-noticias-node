function NewsEntity(connection){
	this._connection = connection;
}

NewsEntity.prototype.getNoticias = function(callback){
	this._connection.query("SELECT * from noticias", callback);
};

NewsEntity.prototype.getNoticia = function(callback){
	this._connection.query("SELECT * from noticias where id = 1", callback);
};

NewsEntity.prototype.inserNew = function(noticia, callback){
	this._connection.query("insert into noticias(titulo, noticia, autor, data_noticia) values($1, $2, $3, $4)",
	[noticia.titulo, noticia.noticia, noticia.autor, noticia.data_noticia], callback);
};

module.exports = function(){
	return NewsEntity;
};