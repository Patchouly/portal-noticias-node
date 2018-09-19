module.exports = function(application) {
	
	application.get('/news', function(req, res) {
		application.app.controllers.news.listNews(application, req, res);
	});
	
	application.get('/new', function(req, res) {
		application.app.controllers.news.showNew(application, req, res);	
	});
};