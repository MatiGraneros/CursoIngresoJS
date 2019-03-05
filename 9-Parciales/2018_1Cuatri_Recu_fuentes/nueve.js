function mostrar()
{

	var animal;
	var peso;
	var temperaturaHabitat;
	var respuesta=true;
	var contadorTemperaturasPares=0;
	var pesoMaximo=1;
	var pesoMinimo=1000;
	var nombreTemperaturaMasPesado;
	var nombreTemperaturaMasliviano;
	var contadorAnimalesBajoCero=0;
	var sumaPeso=0;
	var contadorPesos=0;
	var pesoMaximoBajoCero=1;
	var pesoMinimoBajoCero=1000;


	while(respuesta==true)
	{
		animal=prompt("ingrese un animal del zoologico");
		while(isNaN(animal)==false || animal.length<2)
		{
			animal=prompt("ERROR, ingrese un animal valido");
		}

		peso=prompt("ingrese el peso");
		peso=parseFloat(peso);
		while(isNaN(peso) || !(peso>=1 && peso<=1000))
		{
			peso=prompt("ERROR, ingrese un peso valido");
			peso=parseFloat(peso);
		}
			
		temperaturaHabitat=prompt("ingrese la temperatura del habitat");
		temperaturaHabitat=parseFloat(temperaturaHabitat);
		while(isNaN(temperaturaHabitat) || !(temperaturaHabitat>=-30 && temperaturaHabitat<=30))
		{
			temperaturaHabitat=prompt("ERROR, ingrese una temperatura de habitat valida");
			temperaturaHabitat=parseFloat(temperaturaHabitat);
		}	

		if (temperaturaHabitat%2==0) 
		{
			contadorTemperaturasPares++;
		}

		if (peso>pesoMaximo) 
		{
			pesoMaximo=peso;
			nombreTemperaturaMasPesado=animal+" a una temperatura de "+temperaturaHabitat;
			if (temperaturaHabitat<0) 
			{
				pesoMaximoBajoCero=peso;
			}
		}
		if (peso<pesoMinimo) 
		{
			pesoMinimo=peso;
			nombreTemperaturaMasliviano=animal+" a una temperatura de "+temperaturaHabitat+"°";
			if (temperaturaHabitat<0) 
			{
				pesoMinimoBajoCero=peso;
			}
		}

		if (temperaturaHabitat<0) 
		{
			contadorAnimalesBajoCero++;
		}

		contadorPesos++;
		sumaPeso=peso+sumaPeso;









		respuesta=confirm("desea seguir ingresando valores?");

	}


	promedio=sumaPeso/contadorPesos;


	document.write("La cantidad de temperaturas pares es "+contadorTemperaturasPares+"<br>");
	document.write("El nombre y temperatura del animal más pesado es "+nombreTemperaturaMasPesado+"<br>");
	document.write("La cantidad de animales que viven a menos de 0 grados es "+contadorAnimalesBajoCero+"<br>");
	document.write("El promedio del peso de todos los animales es "+promedio+"<br>");
	document.write("el peso maximo bajo cero es "+pesoMaximoBajoCero+"<br>");
	document.write("el peso minimo bajo cero es "+pesoMinimoBajoCero+"<br>");








}
