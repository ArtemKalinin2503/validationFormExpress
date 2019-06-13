//Подключим express
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( cors({ origin: '*' }) );

app.get('/', function (req, res) {
   res.send('Hello Api') 
});

app.listen(3080, function() {
    console.log('Api app started')
});

//Команда для запуска сервера node server.js

//Post запрос для формы

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get("/test", urlencodedParser, function (request, response) {
  response.sendFile(__dirname + "../index.html");
});
app.post("/test", urlencodedParser, function (request, response) {
  if (!request.body) return response.sendStatus(400);
  console.log(request.body);
  response.send(`${'Телефон:'+ request.body.phone} - ${'Пароль:' + request.body.password}`);
});

app.get("/", function (request, response) {
  response.send("Главная страница");
});