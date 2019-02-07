/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

var importe=document.getElementById('sueldo').value;
importe=parseInt(importe);

var recargo=importe*10/100;
var display=importe+recargo;

var display;
document.getElementById('resultado').value=display;




}
