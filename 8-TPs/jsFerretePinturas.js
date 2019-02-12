/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{


var temperatura
var Fahrenheit
var resultado
var Celcius

temperatura=document.getElementById('Temperatura').value;
Fahrenheit=(temperatura-32)*(5/9);

resultado=parseFloat(Fahrenheit);

alert(resultado);


}

function CentigradosFahrenheit () 
{
	

temperatura=document.getElementById('Temperatura').value;
celcius=(temperatura*(9/5)+32);

resultado=parseFloat(celcius);

alert(resultado);







}
