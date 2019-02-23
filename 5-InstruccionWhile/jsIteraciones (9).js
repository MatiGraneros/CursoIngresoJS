function mostrar()
{

	var contador=0;
	// declarar variables
// 	var numero;
// 	var maximo;
// 	var minimo;
// 	var respuesta='si';
// 	var candidad=0;
	
// 	while(respuesta!='no')
// 	{
// 		numero=prompt("ingrese numero");
// 		if(candidad==0)
// 		{
// 			maximo=numero;
// 			minimo=numero;
// 		}
// 		if(numero<minimo)
// 		{
// 			maximo=numero;
// 			minimo=numero;
// 		}
		
// 		else
// 		{
// 			if(numero>maximo)
// 			{
// 				maximo=numero;
// 			}
// 		}
		
// 		candidad++;		
// 		respuesta=prompt("desea ingresar otro numero?");
// 	}

// document.getElementById('minimo').value=minimo;
// document.getElementById('maximo').value=maximo;

	var numero;
	var maximo;
	var minimo;
	var respuesta='si';
	var candidad=0;
	var flag=false;

	while(respuesta!='no')
	{
		numero=prompt("ingrese numero");
		if(flag==false || numero>maximo)
		{
			maximo=numero;
		}
		if(flag==false || numero<minimo)
		{
			minimo=numero;
			flag=true;
		}

		
	
	}

document.getElementById('minimo').value=minimo;
document.getElementById('maximo').value=maximo;


}//FIN DE LA FUNCIÓN