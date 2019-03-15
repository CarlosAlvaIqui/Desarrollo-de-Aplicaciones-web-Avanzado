var http = require('http');

var manejador = function(form_hora){
	console.log("si conecto");
	var hora_actual = new Date();
	var dia = hora_actual.getDay();

	var horas = hora_actual.getHours();
	var minutos = hora_actual.getMinutes();
	var segundos = hora_actual.getSeconds();

	console.log("la hora es : ",horas," con ",minutos," minutos "," y ",segundos," segundos");

};
var servidor =http.createServer(manejador);
servidor.listen(8080);
	