function mostrar()
{

var precio=prompt("ingrese el precio");

var descuento=prompt("ingrese descuento");

var resultado=precio*descuento/100;

var preciofinal=precio-resultado;

document.getElementById('elPrecioFinal').value=preciofinal;




/*1.quiero la request
2.quiero el descuento
3.quiero el precio descontado
3.quiero mostrarlo en el value (alert en otros casos)*/

















}
