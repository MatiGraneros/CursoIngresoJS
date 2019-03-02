function mostrar()
{

	var contador=0;
	var notas;
	var sexo;
	var maximo=1;
	var minimo=10;
	var sexoNotaMaxima;
	var sexoNotaMinima;
	var acumulador=0;
	var promedio;
	var contadorMasculinosMayorIgualSeis=0;

	while(contador<5)
	{
		contador++;
		notas=prompt("ingrese las notas");
		notas=parseFloat(notas);
		while(isNaN(notas) || !(notas>=1 && notas<=10))
		{
			notas=prompt("ERROR, ingrese una nota valida")
		}

		sexo=prompt("ingrese el sexo");
		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("ERROR, ingrese un sexo valido");
		}

		if (notas>maximo) 
		{
			maximo=notas;
			sexoNotaMaxima=maximo+sexo;
		}
		if (notas<minimo)
		{
			minimo=notas;
			sexoNotaMinima=sexo;
			if(sexoNotaMinima=="f")
			{
				sexoNotaMinima="femenino";
			}
			else
			{
				sexoNotaMinima="masculino";
			}
		}

		acumulador=notas+acumulador;
		
		if (notas>=6 && sexo=="m") 
		{
			contadorMasculinosMayorIgualSeis++;
		}
	}
	
	promedio=acumulador/contador;
	/*A*/alert("el promedio es "+promedio);
	/*B*/alert("el sexo de la nota minima es "+sexoNotaMinima);
	/*C*/alert("cantidad de varones con seis o mas "+contadorMasculinosMayorIgualSeis);









}
