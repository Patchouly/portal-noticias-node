function NewsEntity(connection){
	this._connection = connection;
}

NewsEntity.prototype.getNoticias = function(callback){
	this._connection.query("SELECT * from noticias order by data desc", callback);
};

NewsEntity.prototype.getNoticia = function(param, callback){
	this._connection.query("SELECT * from noticias where id = "+ param.id, callback);
};

NewsEntity.prototype.getLastNews = function(callback){
	this._connection.query("SELECT * from noticias order by data limit 5", callback);
};

NewsEntity.prototype.inserNew = function(noticia, callback){
	this._connection.query("insert into noticias(titulo, noticia, autor, data_noticia) values($1, $2, $3, $4)",
	[noticia.titulo, noticia.noticia, noticia.autor, noticia.data_noticia], callback);
};

module.exports = function(){
	return NewsEntity;
};