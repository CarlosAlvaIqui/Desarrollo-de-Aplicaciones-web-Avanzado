var express = require('express');
var app = express();
//var app = express.Router();

/* GET home page. */

app.use('/static', express.static('public'))


app.use(function(err, req, res, next){
  console.error(err.stack)
  res.status(505).send("Algo salio mal!")
})

app.get('/', function (req,res) {
    res.send('hola mundo en express by carlos alvarez')
})

app.post('/', function (req,res) {
  res.send('LLamada POST misma url')
})

app.put('/user', function (req,res) {
  res.send('Recibimos un PUT en /user')
})

app.delete('/user', function (req,res) {
  res.send('Recibimos un DELETE en /user')
})

app.use(function(req,res, next){
  res.status(404).send("Eso no existe!")
})


module.exports = app;
