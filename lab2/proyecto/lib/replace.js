exports.replace = function(objetivo,reemplazo){
	var param_encontrados = objetivo.match(/%(.*?)%/g);
	if(param_encontrados){
		var nombre_param = null,
		valor_remplazo = null;
		for (var i =0;i<param_encontrados.length; i++) {
		nombre_param = param_encontrados[i].replace(/%/g, '');
		valor_remplazo = reemplazo[nombre_param];
		objetivo = objetivo.replace(param_encontrados[i], valor_remplazo);
		}
	}
	return objetivo;
};