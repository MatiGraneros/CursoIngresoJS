function mostrar()
{

	var sexo;
	var notas;
	var contador=0;
	var maximo=1;
	var minimo=10;
	var sexoNotaMinima;
	var suma=0;
	var promedio;
	var contadorVaronesMasDeSeis=0;

	while(contador<5)
	{
		contador++;
		notas=prompt("ingrese la nota");
		notas=parseFloat(notas);
		while(isNaN(notas) || !(notas<=10 && notas>=1))
		{
			notas=prompt("ERROR, ingrese una nota valida");
			notas=parseFloat(notas);
		}

		sexo=prompt("ingrese el sexo");
		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("ERROR, ingrese un sexo valido");
		}

		if (notas>maximo) 
		{
			maximo=notas;
		}
		if (notas<minimo) 
		{
			minimo=notas;
			sexoNotaMinima=sexo;
			if (sexoNotaMinima=="f") 
			{
				sexoNotaMinima="femenino";
			}
			else
			{
				sexoNotaMinima="masculino";
			}
		}

		suma=notas+suma;

		if (sexo=="m") 
		{
			if (notas>=6) 
			{
				contadorVaronesMasDeSeis++;
			}
		}
	}

promedio=suma/contador;

alert("el promedio de notas es de: "+promedio+". La nota mas baja es de "+minimo+" y el sexo de esa persona es "+sexoNotaMinima+". La cantidad de varones con 6 o mas es de "+contadorVaronesMasDeSeis);

}
