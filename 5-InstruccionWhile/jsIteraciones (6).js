function mostrar()
{

// 	var contador=0;
// 	var acumulador=0;



// document.getElementById('suma').value=acumulador;
// document.getElementById('promedio').value=acumulador/5;
	
	
	var numeroUno=prompt("primer numero");
	numeroUno=parseFloat(numeroUno);

	var numeroDos=prompt("segundo numero");
	numeroDos=parseFloat(numeroDos);

	var numeroTres=prompt("tercer numero");
	numeroTres=parseFloat(numeroTres);

	var numeroCuatro=prompt("cuarto numero");
	numeroCuatro=parseFloat(numeroCuatro);

	var numeroCinco=prompt("quinto numero");
 	numeroCinco=parseFloat(numeroCinco);

 	var acumulador;
		
		while(!(numeroUno>0 || numeroUno<0))
		{
			console.log(numeroUno);
				numeroUno=prompt("incorrecto el primer valor, ingrese un NÚMERO");
				numeroUno=parseFloat(numeroUno);
		}
			
		while(!(numeroDos>0 || numeroDos<0))
		{
			console.log(numeroDos);
				numeroDos=prompt("incorrecto el segundo valor, ingrese un NÚMERO");
				numeroDos=parseFloat(numeroDos);
		}

		while(!(numeroTres>0 || numeroTres<0))
		{
			console.log(numeroTres);
				numeroTres=prompt("incorrecto el tercer valor, ingrese un NÚMERO");
				numeroTres=parseFloat(numeroTres);
		}

		while(!(numeroCuatro>0 || numeroCuatro<0))
		{
			console.log(numeroCuatro);
				numeroCuatro=prompt("incorrecto el cuarto valor, ingrese un NÚMERO");
				numeroCuatro=parseFloat(numeroCuatro);
		}

		while(!(numeroCinco>0 || numeroCinco<0))
		{
			console.log(numeroCinco);
				numeroCinco=prompt("incorrecto el quinto valor, ingrese un NÚMERO");
				numeroCinco=parseFloat(numeroCinco);
		}

				
			acumulador=numeroUno+numeroDos+numeroTres+numeroCuatro+numeroCinco;
				document.getElementById('suma').value=acumulador;
					document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN