var http = require('http');

var manejador = function(form_hora){
	console.log("si conecto");

	
	var diaactual = 12;
	var diasdelmes = 30;
	var dia_url = 25;

	if(diaactual>dia_url){
		var resultado = (((diaactual - diasdelmes)*-1) + dia_url);
		console.log("faltan ",resultado," dias"," para ",dia_url);
	}
	else if (diaactual<dia_url) {
	var resultado = ((((diaactual - diasdelmes)*-1) + dia_url)-30);
		console.log('faltan ',resultado,' dias'," para ",dia_url);
	}
	else{
		console.log('error')
	}
}

var servidor =http.createServer(manejador);
servidor.listen(8080);
	