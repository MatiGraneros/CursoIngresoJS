/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{


var largo=document.getElementById('Largo').value;
var ancho=document.getElementById('Ancho').value;

var perimetro=(largo*2)+(ancho*2);

var alambre=perimetro*3;

alert(alambre);





}
function Circulo () 
{


var pi=3.14159265358979;
var radio=document.getElementById('Radio').value;
	var alambre=(2*pi)*radio;
	var resultado=alambre*3;
		alert(resultado);



}
function Materiales () 
{


var largo=document.getElementById('Largo').value;
var ancho=document.getElementById('Ancho').value;
	

var materiales=(largo*ancho)//*(largo*ancho);

var cemento=2*materiales;
var cal=3*materiales;


alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");







}