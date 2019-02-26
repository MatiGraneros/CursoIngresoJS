function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero

while(contador<5)							
	{
		contador++;				
		numero=prompt("ingrese otro numero "+contador);
		numero=parseFloat(numero);
		while(isNaN(numero))
	 		{
	 		numero=prompt("insertar numero "+ contador);
			numero=parseFloat(numero);
	 		}
		acumulador=numero+acumulador;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;




}//FIN DE LA FUNCIÓN