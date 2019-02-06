function mostrar()
{

var precio=prompt("Precio");

var descuento=prompt("Porcentaje de descuento");

var descontado=precio*descuento/100;

var preciofinal=precio-descontado;

document.getElementById('elPrecioFinal').value=preciofinal;





/*1.quiero la request
2.quiero el descuento
3.quiero el precio descontado
3.quiero mostrarlo en el value (alert en otros casos)*/






}
