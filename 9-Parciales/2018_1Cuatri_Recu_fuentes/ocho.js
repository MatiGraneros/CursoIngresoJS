function mostrar()
{


	var letra;
	var numero;
	var respuesta=true;
	var contador=0;
	var contadorPares=0;
	var contadorInpares=0;
	var contadorCeros=0;
	var sumaPositivos=0;
	var contadorPositivos=0;
	var promedio;
	var sumaNegativos=0;
	var maximo=-100;
	var minimo=100;
	var letraNumeroMaximo;
	var letraNumeroMinimo;

	while(respuesta==true)
	{
		letra=prompt("ingrese una letra");
		while(isNaN(letra)==false || letra.length>1)
		{
			letra=prompt("ERROR, ingrese un valor valido");
		}

		numero=prompt("ingrese un numero");
		numero=parseFloat(numero);
		while(isNaN(numero) || !(numero>=-100 && numero<=100))
		{
			numero=prompt("ERROR, ingrese un numero valido");
			numero=parseFloat(numero);	
		}

		if (numero%2==0)
		{
			contadorPares++;
		}
		else
		{
			contadorInpares++;
		}

		if (numero==0) 
		{
			contadorCeros++;
		}

		if (numero>0) 
		{
			contadorPositivos++;
			sumaPositivos=numero+sumaPositivos;
		}
		else
		{
			sumaNegativos=numero+sumaNegativos;
		}

		if (numero>maximo) 
		{
			maximo=numero;
			letraNumeroMaximo=numero+letra;
		}
		if (numero<minimo) 
		{
			minimo=numero;
			letraNumeroMinimo=numero+letra;
		}









		respuesta=confirm("Desea seguir ingresando valores?");
	}


	promedio=sumaPositivos/contadorPositivos;


	document.write("La cantidad de números pares es "+contadorPares+"<br>");
	document.write("La cantidad de números impares es "+contadorInpares+"<br>");
	document.write("La cantidad de ceros es "+contadorCeros+"<br>");
	document.write("El promedio de todos los números positivos ingresados es "+promedio+"<br>");
	document.write("La suma de todos los números negativos es "+sumaNegativos+"<br>");
	document.write("El número y la letra del máximo son "+letraNumeroMaximo+"<br>");
	document.write(" El número y la letra del minimo son "+letraNumeroMinimo+"<br>");









}
