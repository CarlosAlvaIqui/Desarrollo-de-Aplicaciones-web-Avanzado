var _ = require("underscore")
/*
var lista =[1,2,3,4,5,6]; _.each(lista,function(item) {
	// body...

	console.log(item);*/
	/*
var employeesCollection =[
	{
	"id":1,
	"name":"Soni",
	"designation":"SE",
	"salary":25000		
	},
	{
	"id":2,
	"name":"Rohit",
	"designation":"SSE",
	"salary":35000		
	},
	{
	"id":3,
	"name":"Akanksha",
	"designation":"Manager",
	"salary":45000		
	},
	{
	"id":4,
	"name":"Mohan",
	"designation":"Accountant",
	"salary":30000		
	},
	{
	"id":5,
	"name":"Gita",
	"designation":"SSE",
	"salary":35000		
	}
];
var cargos = _.map(employeesCollection,function(employee){
	return {nombre: employee.name, cargo: employee.designation};
	});/*
console.log(_.pluck(employeesCollection, "name"));

var empleados_sse = _.chain(employeesCollection)
.filter(function(employee){
	return employee.designation === "SSE";
})
.map(function(employee){
	return {nombre: employee.name, id: employee.id};
}).value();
console.log(empleados_sse);
*/
var param_replacer = require('./lib/replace');
/*
var objetivo = "%hello% %world%! -- %world% %hello%!";
var idioma = "es";
var reemplazos = {
	"en":{
		"hello": "Hello",
		"world": "World"
	},
	"es":{
		"hello": "Hola",
		"world": "Mundo"
	}
};
var resultado = param_replacer.replace(objetivo, reemplazos[idioma]);

console.log(resultado);*//*
if(typeof exports !== "undefined"){
	if(typeof module !== "undefined" && module.exports){
		exports = module.exports = module_replacer;
	}
	exports.param_replacer = param_replacer;
}else{
	root.param_replacer = param_replacer;
}*//*
function printing(){
	console.log(1);
	setTimeout(function(){ console.log(2);}, 1000);
	setTimeout(function(){ console.log(3);}, 0);
	console.log(4);
}
printing();*//*
if(persona){
	var nombre = persona.obtenerNombre();
}*//*
var nombre = persona && persona.obtenerNombre();
if(nombre){
	var encargado = nombre;
}else{
	var encargado ="Algun nombre";
}
*//*
function funcionExterna(variable){
	var variableDeLaFuncionExterna = variable;
	return function funcionInterna(){
		return variableDeLaFuncionExterna;
	}

}
var foo = funcionExterna(20);
foo();
console.log(foo);*//*
var futbolista = {
	"goles": 0,
	"anotaGol": function(gol){
		if(gol > 0) this.goles += gol;
	}
};
futbolista.anotaGol(5);
console.log(futbolista.goles);
futbolista.anotaGol(3);
console.log(futbolista.goles);
*//*
var jugador = function(){
	var acumuladorPrivado = 0;
	return{
		"ObtenerGoles":function(){
			return acumuladorPrivado;
		},
		"anotaGol":function(gol){
			if(gol > 0) acumuladorPrivado += gol;
		}
	};
};

var sergio = new jugador();
console.log(sergio.acumuladorPrivado);
console.log(sergio.ObtenerGoles());
sergio.anotaGol(4);
console.log(sergio.ObtenerGoles());*//*
var Persona = function(nombre,edad){
	return{
		nombre: nombre,
		ingresarEdad: function(e) {edad: e;},
		obtenerEdad: function(){return edad;}
	};
};

var Pragramador = function(nombre, edad, especialidad){
	var e = Persona(nombre, edad);
	e.especialidad = especialidad;
	return e;
};

var aurora = new Persona("Aurora", 27);
var sergio = new Pragramador("Sergio", 29, "Javascript");

sergio.obtenerEdad();
console.log(sergio.obtenerEdad());*/
/*
(function(){
	var mayor = function(o1, o2){
	if( o1.tamano > o2.tamano){
		console.log('o1 es mayor');
	}else{
		console.log('o2 es mayor');
	}
	};
	var y = [5,6,7,8],
	var x = [5,6,7,8,6,8];
	mayor(x, y);
})*//*
(function(){
	var album_favorito = function(coleccion){
		if(coleccion.length === 0){
			return;
		}
		var mas_reproducido = coleccion[0].tocado,
		mas_indice = 0;
		for (var i = 0,len = coleccion.length; i<len; i++) {
			if(coleccion[i].tocado > mas_reproducido){
				mas_reproducido = coleccion[i].tocado;
				mas_indice = i;
			}
		}
		return {play: mas_reproducido, index: mas_indice};
	};
	var music =que,
	var fav = album_favorito(music);
	console.log("Tu album favorito fue tocado "+ fav.play +"veces");
});*//*
(function(){
	var s1 = Sumar();
	var s2 = Sumar();

	s1.agregar(10);
	s1.agregar(20);

	s2.agregar(30);
	s2.agregar(5);

	console.log(s1.obtenerSumaActual());
	console.log(s2.obtenerSumaActual());
});*/
(function(){
	var box = MusicBox(),
	a1 = Album("The Who", "Tommy"),
	a2 = Album("Tom Waits", "Closing Time"),
	a3 = Album("John Cale", "Paris 1919"),
	favorito;
	box.addAlbum(a1);
	box.addAlbum(a2);
	box.addAlbum(a3);

	a1.play();
	a2.play();
	a1.play();

	favorito = box.favoritoAlbum();

	console.log("Tu album favorito es " + favorito);
})