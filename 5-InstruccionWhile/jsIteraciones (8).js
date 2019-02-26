function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta=true;

	var numero;

while(respuesta==true)
	{	
	contador++;
	numero=prompt("insertar numero "+ contador);
	numero=parseFloat(numero);
	if (numero>0) 
	 	{
	 		positivo=numero+positivo;
	 	}
		else
		{
			if (numero<0)
			{
				negativo=numero*negativo;
			}
		}
	respuesta=confirm("queres otro numero? (escribi si, de lo contrario dejalo en blanco)");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN