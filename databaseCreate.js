use structure
db.dropDatabase()
use structure
db.menu.insert({index: 0, label: 'Objective'})
db.menu.insert({index: 1, label: 'Architecture'})
db.menu.insert({index: 2, label: 'Controllers'})
db.menu.insert({index: 3, label: 'Directives'})
db.menu.insert({index: 4, label: 'Filters'})
db.menu.insert({index: 5, label: 'Services'})
db.menu.insert({index: 6, label: 'Models'})
db.menu.insert({index: 7, label: 'CSS'})
db.menu.insert({index: 8, label: 'HTML'})

db.config.insert({title: 'Structure Project', author: 'Leandro Lacau', year: 2015, github: 'https://github.com/lacau/structure'})

db.page.insert({index: 0, title: 'Objective', name: 'objective.html', path: '/client/views/', description: '<p>This project has been made to show how the author would code a MEAN application from scratch. Main goal is demonstrate some of this stack capabilities, going through angularJS directives, controllers, services, nodeJS modules, mongoDB access and so forth.</p><p>Another thing in mind when it was build, was that should be able to show its own source code by asking to server to read its own system folders and files.</p><p>Every page, including this one, have a "(source code)" link that will show how current page was built.</p>'})
db.page.insert({index: 1, title: 'Architecture', name: 'architecture.html', path: '/client/views/', description: 'description teste'})
db.page.insert({index: 2, title: 'Controllers', name: 'controllers.html', path: '/client/views/', description: 'description teste'})
db.page.insert({index: 3, title: 'Directives', name: 'directives.html', path: '/client/views/', description: 'description teste'})
db.page.insert({index: 4, title: 'Filters', name: 'filters.html', path: '/client/views/', description: 'description teste'})
db.page.insert({index: 5, title: 'Services', name: 'services.html', path: '/client/views/', description: 'description teste'})
db.page.insert({index: 6, title: 'Models', name: 'models.html', path: '/client/views/', description: 'description teste'})
db.page.insert({index: 7, title: 'CSS', name: 'css.html', path: '/client/views/', description: 'description teste'})
db.page.insert({index: 8, title: 'HTML', name: 'html.html', path: '/client/views/', description: 'description teste'})
