exports.registroContacto=function(req,res)
{
	res.render('registroContacto',{titulo:'Registro de Contacto'});
}

exports.respuestaContacto=function(req, res)
{
res.render('respuestaContacto',{mensaje:'Se registraron el contacto'});
}