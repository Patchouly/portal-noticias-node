module.exports = function(application) {
	
	application.get('/addnew', function(req, res) {
		application.app.controllers.admin.addnew(application, req, res);
	});
	
	application.post('/news/salvar', function(req, res) {
		application.app.controllers.admin.saveNews(application, req, res);
	});
};