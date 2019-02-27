function mostrar()
{

var acumulador=0;
var contador=0;
var respuesta=true;
var numero;
var negativo=0;
var positivos=0;
var resultado;
var contadorPositivos=0;
var contadorNegativos=0;
var contadorCeros=0;
var contadorPares=0;
var promedioNegativos;


while(respuesta==true)
	{	
	contador++;
	numero=prompt("insertar numero "+ contador);
	numero=parseFloat(numero);
	while(isNaN(numero))
	 		{
	 		numero=prompt("insertar numero "+ contador);
			numero=parseFloat(numero);
	 		}
		if (numero==0)
			{
				contadorCeros++;
			}
		
		else
		{
		if (numero<0) 
		 	{
		 		negativo=numero+negativo;	
		 	}
		else
			{
			if (numero>0)
				{
				positivos=numero+positivos;
				}
			}		
		
		if (numero>0) 
			{
				contadorPositivos++;
			} 	
		else
			{
			if (numero<0)
				{
				contadorNegativos++;
				}
			}
		
		if (numero%2==0) 
			{
				contadorPares++;
			}		

		}
 	respuesta=confirm("queres otro numero? (escribi si, de lo contrario dejalo en blanco)");
 	}

console.log("negativos suma: "+negativo);
console.log("postivos suma: "+positivos);
console.log("contar +: "+contadorPositivos);
console.log("contar -: "+contadorNegativos);
console.log("contar 0's: "+contadorCeros);
console.log("contar pares: "+contadorPares);
promedioNegativos=negativo/contadorNegativos;
console.log("promedio negativos: "+promedioNegativos);



}//FIN DE LA FUNCIÓN