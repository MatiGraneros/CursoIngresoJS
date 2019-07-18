function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var contadorNegativos=0;
	
	var respuesta=true;

	var numero;

	while(respuesta==true)
	{	
	contador++;
	numero=prompt("insertar numero "+ contador);
	numero=parseFloat(numero);
	while(isNaN(numero))
	{
		numero=prompt("ERROR, insertar numero "+ contador);
		numero=parseFloat(numero);
	}
	if (numero>0) 
		{
			positivo=numero+positivo;
		}
		else
		{
			if (numero<0)
			{
				negativo=numero*negativo;
				contadorNegativos++;
			}
		}
		respuesta=confirm("queres otro numero? (escribi si, de lo contrario dejalo en blanco)");
	}
	if(contadorNegativos<1)
	{
		negativo=0;
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN