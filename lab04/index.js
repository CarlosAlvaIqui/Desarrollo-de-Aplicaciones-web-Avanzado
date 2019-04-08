var express = require('express')
var app = express()

app.get('/', function (req,res) {
    res.send('hola mundo en express by carlos alvarez')
})

app.listen(3000, function(){
    console.log('Aplicacion de ejemplo escuchando en el puerto 3000!')
})