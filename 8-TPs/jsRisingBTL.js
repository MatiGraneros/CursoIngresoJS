/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 

	var edad;
	var sexo;
	var estadoCivil;
	var	sueldo;
	var legajo;
	var nacionalidad;

	var respuesta=true;
	var contador=0;


	while(respuesta==true)
	{
		contador++
		edad=prompt("Ingrese su edad");
		while(isNaN(edad) || !(edad>=18 && edad<=90))
		{
			edad=prompt("ERROR, ingrese una edad valida");
		}

		sexo=prompt("Ingrese su sexo");
		while(isNaN(sexo)==false || sexo!="F" && sexo!="M")
		{
			sexo=prompt("ERROR, ingrese un sexo valido");
		}	
		if(sexo=="F")
		{
			sexo="femenino";	
		}
		else
		{
			sexo="masculino";
		}

		estadoCivil=prompt("Ingrese su estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		while(isNaN(estadoCivil) || !(estadoCivil>=1 && estadoCivil<=4))
		{
			estadoCivil=prompt("ERROR, ingrese un estado civil valido (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)");
		}
		if(estadoCivil==1)
		{
			estadoCivil="soltero";
		}
		else
		{
			if(estadoCivil==2)
			{
				estadoCivil="casado";
			}
			else
			{
				if(estadoCivil==3)
				{
					estadoCivil="divorciado";
				}
				else
				{
					estadoCivil="viudo";
				}
			}
		}

		sueldo=prompt("ingrese su sueldo bruto (no menor a 8000)");
		while(isNaN(sueldo) || !(sueldo>=8000))	
		{
			sueldo=prompt("ERROR, ingrese un sueldo valido (no menor a 8000)");
		}

		legajo=prompt("Ingrese numero del legajo");
		// var largo=legajo.length;
		while(isNaN(legajo) || !(legajo.length==4) || !(legajo>999))
		{
			legajo=prompt("EROR, Ingrese numero del legajo valido");
		}

		nacionalidad=prompt("Ingrese su nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
		while(isNaN(nacionalidad)==false || nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
		{		
			nacionalidad=prompt("ERROR, ingrese una nacionalidad valida (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");
		}
		if (nacionalidad=="A") 
		{
			nacionalidad="argentino";
		}
		else
		{
			if (nacionalidad=="E") 
			{
				nacionalidad="extranjero";
			}
			else
			{
				nacionalidad="nacionalizado";
			}
		}	

		break;
	}


	document.getElementById('Edad').value=edad;
	document.getElementById('Sexo').value=sexo;
	document.getElementById('EstadoCivil').value=estadoCivil;
	document.getElementById('Sueldo').value=sueldo;
	document.getElementById('Legajo').value=legajo;
	document.getElementById('Nacionalidad').value=nacionalidad;
}
