function mostrar()
{
  

var precioEfectivo;
var porcentaje;
var resultado;
	
	precioEfectivo=document.getElementById('elNombre').value;
		precioEfectivo=parseInt(precioEfectivo);
	
		porcentaje=precioEfectivo*10/100;
			porcentaje=parseInt(porcentaje);
	
			resultado=precioEfectivo-porcentaje
	  			resultado=parseInt(resultado);


				 	alert("el precio en efectivo es: $"+precioEfectivo+", con tarjeta tiene un recargo del 10% que seria $"+porcentaje+" de recargo, cotandole final $"+resultado);























}
