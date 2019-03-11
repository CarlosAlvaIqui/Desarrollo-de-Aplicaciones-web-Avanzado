var http = require('http');

var manejador = function(solicitud,respuesta){
	console.log('Conexion entrante');
	respuesta.write('Hola mundo cruell')
};

var servidor = http.createServer(manejador);

servidor.listen(8080);