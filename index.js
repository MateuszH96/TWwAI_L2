//odpowiedź do pytania w zadanie 1: Event emiter
const express = require('express');
const questions = require('./questions').questions;
const config = require("./config").config

const app = express();

app.get('/api/questions', (request,response) =>{
	response.send(questions)
})

app.listen(3000, function () {
	console.info('Server is running at port 3000');
});
