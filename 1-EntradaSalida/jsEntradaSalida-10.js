/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

var importe=document.getElementById('importe').value;
importe=parseInt(importe);

var descuento=importe*25/100;
var display=importe-descuento;

var display;
document.getElementById('resultado').value=display;


/*            primer comando de consola              */


























	
}
