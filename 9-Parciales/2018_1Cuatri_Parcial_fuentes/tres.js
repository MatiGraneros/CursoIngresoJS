function mostrar()
{

var precio;
var descuento;
var descontado;
var preciofinal;

	precio=prompt("Precio");
		precio=parseInt(precio);

	descuento=prompt("Porcentaje de descuento");
		descuento=parseInt(descuento);

	descontado=precio*descuento/100;
		descontado=parseInt(descontado);

	preciofinal=precio-descontado;
		preciofinal=parseInt(preciofinal);

			document.getElementById('elPrecioFinal').value=preciofinal;





/*1.quiero la request
2.quiero el descuento
3.quiero el precio descontado
3.quiero mostrarlo en el value (alert en otros casos)*/






}
