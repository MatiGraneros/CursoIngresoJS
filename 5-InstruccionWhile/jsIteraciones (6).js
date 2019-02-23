function mostrar()
{


	
	
	var numeroUno=prompt("primer numero");
	numeroUno=parseInt(numeroUno);

	var numeroDos=prompt("segundo numero");
	numeroDos=parseInt(numeroDos);

	var numeroTres=prompt("tercer numero");
	numeroTres=parseInt(numeroTres);

	var numeroCuatro=prompt("cuarto numero");
	numeroCuatro=parseInt(numeroCuatro);

	var numeroCinco=prompt("quinto numero");
 	numeroCinco=parseInt(numeroCinco);

 	var acumulador;
		

	
	

while(!(numeroUno>0 || numeroUno<0))
{
	console.log(numeroUno);
		numeroUno=prompt("incorrecto el primer valor, ingrese un NÚMERO");
}
	
while(!(numeroDos>0 || numeroDos<0))
{
	console.log(numeroDos);
		numeroDos=prompt("incorrecto el segundo valor, ingrese un NÚMERO");
}

while(!(numeroTres>0 || numeroTres<0))
{
	console.log(numeroTres);
		numeroTres=prompt("incorrecto el tercer valor, ingrese un NÚMERO");
}

while(!(numeroCuatro>0 || numeroCuatro<0))
{
	console.log(numeroCuatro);
		numeroCuatro=prompt("incorrecto el cuarto valor, ingrese un NÚMERO");
}

while(!(numeroCinco>0 || numeroCinco<0))
{
	console.log(numeroCinco);
		numeroCinco=prompt("incorrecto el quinto valor, ingrese un NÚMERO");
}

		
	acumulador=numeroUno+numeroDos+numeroTres+numeroCuatro+numeroCinco;
		document.getElementById('suma').value=acumulador;
			document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN