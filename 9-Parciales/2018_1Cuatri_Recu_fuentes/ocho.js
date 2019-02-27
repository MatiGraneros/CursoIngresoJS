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
			}
			if (minimo>numero)
			{
			minimo=numero;
			}	


			// numeroYLetra=numero+letra;
}

	promedioPositivos=sumaPositivos/contadorPositivos;




console.log("cantidad de pares "+contadorPares);
console.log("cantidad de inpares "+contadorInpares);
console.log("cantidad de ceros "+contadorCeros);
console.log("promedio de Positivos "+promedioPositivos);
console.log("suma de negativos "+sumaNegativos);
// console.log(" "numeroYLetra);

console.log("maximo "+maximo);
console.log("minimo "+minimo);
}
