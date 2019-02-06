function mostrar()
{

var precio=prompt("Precio");

var descuento=prompt("Porcentaje de descuento");

var descontado=precio*descuento/100;

preciofinal=precio-descontado;

document.getElementById('elPrecioFinal').value=preciofinal;











}
