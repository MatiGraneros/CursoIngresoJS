/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=1;
var numero;
var intentos;
var sePaso;
var falta;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(Math.random()*10)+1;		 
			alert(numeroSecreto);
}






function verificar()
{
	numero=document.getElementById('numero').value;
	numero=parseInt(numero);



		if(numero!=numeroSecreto)
		{
			document.getElementById('intentos').value=contadorIntentos++;
			if (numero>numeroSecreto) 
			{
				sePaso=numero-numeroSecreto;
				alert("Se paso "+sePaso+" numeros");
			}
			else
			{
				falta=numeroSecreto-numero;
				alert("faltan "+falta+" numeros");
			}
		}

		else
		{
			document.getElementById('intentos').value=contadorIntentos++;
			alert("Usted es un ganador!!! y en solo "+document.getElementById('intentos').value+" intentos");
			contadorIntentos=contadorIntentos-contadorIntentos+1;
		}

}