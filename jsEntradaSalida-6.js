/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{


var numero1
var numero2
var entero1
var entero2


	numero1=document.getElementById('numeroUno').value

	numero2=document.getElementById('numeroDos').value



	entero1=parseInt(numero1)
	entero2=parseInt(numero2)


	var resultado=entero1+entero2

	alert(resultado)






}

