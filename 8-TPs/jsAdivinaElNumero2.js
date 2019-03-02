/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=1;
var numero;
var intentos;
var sePaso;
var falta;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(Math.random()*100)+1;		 
			// alert(numeroSecreto);
}






function verificar()
{
	numero=document.getElementById('numero').value;
	numero=parseInt(numero);



		if(numero!=numeroSecreto)
		{

			document.getElementById('intentos').value=parseInt(contadorIntentos++);
			if (numero>numeroSecreto) 
			{
				sePaso=numero-numeroSecreto;
				mensaje=("Se paso "+sePaso+" numeros");
			}
			else
			{
				falta=numeroSecreto-numero;
				mensaje=("faltan "+falta+" numeros");
			}
		}

		else
		{
			document.getElementById('intentos').value=contadorIntentos++;
			switch(document.getElementById('intentos').value)
			{
				case "1":
					mensaje="usted es un Psíquico";
					break;

				case "2":
					mensaje="excelente percepción";
					break;

				case "3":
					mensaje="Esto es suerte";
					break;
				case "4":
					mensaje="Excelente técnica";
					break;

				case "5":
				  	mensaje="usted está en la media";
				  	break;

				case "6":
				case "7":
				case "8":
				case "9":
				case "10":
					mensaje="falta técnica";  		
					break;	

				default:
					if (document.getElementById('intentos').value>10) 
					{
						mensaje="amor";
					}	

					
			}
			contadorIntentos=contadorIntentos-contadorIntentos+1;
		}
alert(mensaje);
}