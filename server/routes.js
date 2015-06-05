module.exports = {
	'/api/menu': require('./controllers/MenuController'),
	'/api/config': require('./controllers/ConfigController'),
	'/api/page/:index': require('./controllers/PageController'),
	'/api/file/:name': require('./controllers/FileController'),
	'/api/file': require('./controllers/FileController')
};