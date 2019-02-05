/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

var numero1;
var numero2;
var entero1;
var entero2;


	numero1=document.getElementById('numeroUno').value;

	numero2=document.getElementById('numeroDos').value;



	entero1=parseInt(numero1);
	entero2=parseInt(numero2);


	var resultado=entero1+entero2;

	alert("la Suma es "+resultado);

}

function restar()
{

var numero1;
var numero2;
var entero1;
var entero2;


	numero1=document.getElementById('numeroUno').value;

	numero2=document.getElementById('numeroDos').value;



	entero1=parseInt(numero1);
	entero2=parseInt(numero2);


	var resultado=entero1-entero2;

	alert("la Resta es "+resultado);







}

function multiplicar()
{ 



var numero1;
var numero2;
var entero1;
var entero2;


	numero1=document.getElementById('numeroUno').value;

	numero2=document.getElementById('numeroDos').value;



	entero1=parseInt(numero1);
	entero2=parseInt(numero2);


	var resultado=entero1*entero2;

	alert("la Multiplicación es "+resultado);


	
}

function dividir()
{


var numero1;
var numero2;
var entero1;
var entero2;


	numero1=document.getElementById('numeroUno').value;

	numero2=document.getElementById('numeroDos').value;



	entero1=parseInt(numero1);
	entero2=parseInt(numero2);


	var resultado=entero1/entero2;

	alert("la Multiplicación es "+resultado);


}

//https://www.w3schools.com/js/js_operators.asp