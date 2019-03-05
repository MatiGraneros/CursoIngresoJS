function mostrar()
{


	var precio;
	var porcentaje;
	var descuento;
	var precioFinal;

	precio=prompt("ingrese el precio");
	precio=parseFloat(precio);
	porcentaje=prompt("ingrese el porcentaje de descuento");
	porcentaje=parseFloat(porcentaje);

	descuento=precio*porcentaje/100;
	precioFinal=precio-descuento;

	document.getElementById('elPrecioFinal').value=precioFinal;











}
