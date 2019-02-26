function mostrar()
{

	var contador=0;
	var acumulador=0;
	var Numero

while(contador<5)							
	{
		contador++;				
		Numero=prompt("ingrese otro numero "+contador);
		Numero=parseFloat(Numero);
		acumulador=Numero+acumulador;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;




}//FIN DE LA FUNCIÓN