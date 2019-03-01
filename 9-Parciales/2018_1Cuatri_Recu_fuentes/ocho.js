function mostrar()
{

var letra;
var numero;
var respuesta=true;
var contador=0;
var contadorPares=0;
var	contadorInpares=0;
var contadorCeros=0 
var contadorPositivos=0;
var promedioPositivos;
var sumaPositivos=0;
var contadorNegativos=0;
var sumaNegativos=0;
var numeroYLetra;
var maximo=-100;
var minimo=100;
var letraNumeroMaximo;
var letraNumeroMinimo; 

while(respuesta==true)
{
	contador++
	letra=prompt("ingrese la letra");
		while(isNaN(letra)==false)
		{
			letra=prompt("error, ingrese letra");
		}
	
	numero=prompt("ingrese un numero");
	numero=parseFloat(numero);
		while(isNaN(numero) || !(numero>= -100 && numero<=100))
		{
			numero=prompt("ingrese un numero valido");
		}
		respuesta=confirm("Desea seguir ingreando valores");	

			if (numero%2==0) 
			{
				contadorPares++;
			}
			else
			{
				contadorInpares++;
			}

			if (numero==0)
			{
				contadorCeros++;
			}

			if (numero>0)
			{
				contadorPositivos++;
				sumaPositivos=numero+sumaPositivos;
				
			}
			else
			{
				contadorNegativos++;
				sumaNegativos=numero+sumaNegativos;
			}

			if(maximo<numero)
			{
			maximo=numero;
			letraNumeroMaximo=maximo+letra;	
			}
			if (minimo>numero)
			{
			minimo=numero;
			letraNumeroMinimo=minimo+letra;
			}	


			// numeroYLetra=numero+letra;
}

	promedioPositivos=sumaPositivos/contadorPositivos;




document.write("cantidad de pares "+contadorPares+"<br>"); 
document.write("cantidad de inpares "+contadorInpares+"<br>");
document.write("cantidad de ceros "+contadorCeros+"<br>");
document.write("promedio de Positivos "+promedioPositivos+"<br>");
document.write("suma de negativos "+sumaNegativos+"<br>");
// document.write(" "numeroYLetra);

document.write("maximo "+maximo+"<br>");
document.write("minimo "+minimo+"<br>");
document.write("letra maximo"+letraNumeroMaximo+"<br>");
document.write("letra minimo "+letraNumeroMinimo+"<br>");
}
