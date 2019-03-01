function mostrar()
{

	var numeroUno;
	var numeroDos;
	var resultado; 

	numeroUno=prompt("ingrese primer numero");
	numeroUno=parseFloat(numeroUno);
	numeroDos=prompt("ingrese segundo numero");
	numeroDos=parseFloat(numeroDos);

	if (numeroUno==numeroDos) 
	{
		resultado=(numeroUno+""+numeroDos);
	}
	else
	{
		if (numeroUno>numeroDos) 
		{
			resultado=numeroUno-numeroDos;
		}
		else
		{
			resultado=numeroUno+numeroDos;
			if (resultado>10) 
			{
				resultado="la suma es "+resultado+" y supero el 10";
			}
		}
	}

	alert(resultado);
}