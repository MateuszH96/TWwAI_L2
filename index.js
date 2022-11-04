const express = require('express');
const ejs = require('ejs')
const config = require('./public/js/config').config;
const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname+'public/css'))
app.use('/cjs', express.static(__dirname+'public/js'))
app.use('/img', express.static(__dirname+'public/img'))

app.set('view engine','html');
app.engine('html',ejs.renderFile);


app.get('/', (request, response) => {
	response.render(__dirname+'/views/index.html',
	{subject: 'Nazwa zmieniającego się nagłowka'});
});

app.listen(config.port, function(){
	console.info('Serwer is running at port 3000')
});