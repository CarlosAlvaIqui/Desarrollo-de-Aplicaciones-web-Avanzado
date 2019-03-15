var http = require('http');

var manejador = function(solicitud,respuesta){
	console.log("si conecto");
	var i=0;
	while(true){
		respuesta.end(i+'-->');
		i++
	}
};

var servidor =http.createServer(manejador);
servidor.listen(8080);
