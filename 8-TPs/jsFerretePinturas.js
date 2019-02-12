/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{


var temperatura;
var Fahrenheit;
var resultado;


	temperatura=document.getElementById('Temperatura').value;
	Fahrenheit=(temperatura-32)*(5/9);

		resultado=parseFloat(Fahrenheit);

			alert("La temperatura de Fahrenheit a Centígrados es: "+resultado);


}

function CentigradosFahrenheit () 
{


var temperatura;
var Celcius;	
var resultado;

	temperatura=document.getElementById('Temperatura').value;
	celcius=(temperatura*(9/5)+32);

		resultado=parseFloat(Celcius);

			alert("La temperatura de Centígrados a Fahrenheit es: "+resultado);






}
