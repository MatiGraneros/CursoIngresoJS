function mostrar()
{

	var precio;
	var porcentaje;
	var descuento;
	var precioConporcentaje;

	precio=prompt("Ingrese el precio");
	precio=parseFloat(precio);
	porcentaje=prompt("Ingrese el porcentaje");
	porcentaje=parseFloat(porcentaje);

	descuento=precio*porcentaje/100;
	precioConDescuento=precio-descuento;

	document.getElementById('elPrecioFinal').value=precioConDescuento;






}
