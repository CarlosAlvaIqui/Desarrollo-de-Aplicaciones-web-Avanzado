var express = require('express'),
app = express(),
http = require('http').Server(app),
io = require('socket.io')(http),
user = require('./models/user'),
port = process.env.PORT || 3000;


app.set('view engine','jade');

app.use('/static', express.static('public'));

app.get('/', function(req, res){
    res.render('main');
});


io.on('connection', function(socket){
    console.log('Usuario conectado! ');
    socket.on('disconnect', function () {
        console.log('usuario desconectado');  
    });
    user.show(function(data){
        socket.emit('listar',data);
    });
    socket.on('actualizar',function(data){
        user.update(data,function(rpta){
            io.emit('nuevo',rpta)
        });
    });
    socket.on('crear',function(data){
    user.create(data,function(rpta){
        io.emit('nuevo',rpta);
        });
    });  
    socket.on('eliminar',function(data){
        user.delete(data,function(rpta){
            io.emit('borrado',rpta);
        });
    });
});

http.listen(port, function(){
    console.log('Servidor conectado en *:' + port);
});
/*
    socket.on('eliminar',function(data){
        user.delete(data,function(rpta){
            io.emit('borrado',rpta);
        });
    });*/