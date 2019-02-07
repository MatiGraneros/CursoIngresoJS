/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

var numero1=document.getElementById('numeroDividendo').value;
var numero2=document.getElementById('numeroDivisor').value;

var resultado=parseInt(numero1)%parseInt(numero2);

alert("El resto es: "+resultado);
}




	


//https://cdnblog-199133.c.cdn77.org/blog/wp-content/uploads/divisiones-por-dos-cifras-1.png