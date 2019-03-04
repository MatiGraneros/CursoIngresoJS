function mostrar()
{
	var numero;
	var letra;
	var acumulador=0;
	var respuesta=true;
	var contadorPares=0;
	var contadorInpares=0;
	var contadorCeros=0;
	var contadorPositivos=0;
	var sumaPositivos=0;
	var promedioPositivos;
	var sumaNegativos=0;
	var maximo=-100;
	var minimo=100;
	var letraNumeroMaximo;
	var letraNumeroMinmo;

	while(respuesta==true)
	{
		letra=prompt("ingrese una letra");
		while(isNaN(letra)==false || letra.length>1)
		{
			letra=prompt("ERROR, ingrese una letra valida");
		}

		numero=prompt("ingrese el numero");
		numero=parseFloat(numero);
		while(isNaN(numero) || !(numero<=100 && numero>=-100))
		{
			numero=prompt("ERROR, pone un numero valido");
		}

		if(numero%2==0)
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
			sumaPositivos=numero+sumaPositivos;
			contadorPositivos++;
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
			letraNumeroMinmo=numero+letra;
		}

		respuesta=confirm("¿desea seguir ingresando datos?");
	}


	promedioPositivos=sumaPositivos/contadorPositivos;



	
	alert(letraNumeroMaximo+" "+letraNumeroMinmo);






}
