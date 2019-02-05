/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	var x;


	x=document.getElementById('importe').value;
	
	var entero=parseInt(x);

	var y= entero-(entero*25/100);



	document.getElementById('resultado').value=y;





























	
}
