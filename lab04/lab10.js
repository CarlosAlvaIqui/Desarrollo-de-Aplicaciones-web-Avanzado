var express = require('express'),
path = require('path'),
app = express(),
bodyParser = require('body-parser')
producto = require('./models/prod')

app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','jade');


app.get('/',function(req,res){
    res.send('hola mundo by carlos alvarez');
})
app.get('/table',function(req,res){
    res.render('table');
});
app.get('/login',function(req,res){
    res.render('login');
});

app.get('/producto', producto.show);
app.post('/producto', producto.create);
app.post('/producto/update', producto.update);
app.post('/producto/delete', producto.delete);

app.listen(9090,function(){
    console.log('Inciando!');
});

module.exports = app;