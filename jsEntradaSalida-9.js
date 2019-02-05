/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var x;


	x=document.getElementById('sueldo').value;
	
	var entero=parseInt(x);

	var y= entero+ (entero*10/100);



	document.getElementById('resultado').value=y;























}
