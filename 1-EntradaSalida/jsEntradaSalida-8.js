/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

var numero1;
var numero2;
var entero1;
var entero2;


	numero1=document.getElementById('numeroDividendo').value;

	numero2=document.getElementById('numeroDivisor').value;



	entero1=parseInt(numero1);
	//entero2=parseInt(numero2);

	
	//var resultado=entero1%entero2;

	var resultado=numero1%numero2

	alert("El resto es "+resultado);

}




	


//https://cdnblog-199133.c.cdn77.org/blog/wp-content/uploads/divisiones-por-dos-cifras-1.png