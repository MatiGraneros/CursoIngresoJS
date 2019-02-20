function mostrar()
{

// 4 importes

//  mostrar mayor

// decir total

// si supera 50 5

// menos de 50 sumer 15%


// 49 51

var valor1;
var valor2;
var valor3;
var valor4;
var suma;
var porcentaje;

valor1=prompt("Ingrese pimer valor");
valor1=parseInt(valor1);
valor2=prompt("Ingrese segundo valor");
valor2=parseInt(valor2);
valor3=prompt("Ingrese tercer valor");
valor3=parseInt(valor3);
valor4=prompt("Ingrese cuarto valor");
valor4=parseInt(valor4);

suma=valor1+valor2+valor3+valor4;
// suma=parseInt(suma);

// alert(valor1);

if (suma>99) 
{
	// suma=suma*90/100;
	porcentaje=90;
}

else
{
	if (suma>49)
	{
		// suma=suma*95/100;
		porcentaje=95;
	}	
	else 
	{
		if (suma<50) 
		{
			porcentaje=115;
		}

	}//(suma>=50)	

}

if(valor1>valor2 && valor1>valor3 && valor1>valor4)
{
	mensaje="el valor mayor es "+valor1
}

else
{
	if (valor2>valor1 && valor2>valor3 && valor2>valor4) 
	{
		mensaje="el valor mayor es "+valor2
	}
	else
	{
		if (valor3>valor2 && valor3>valor1 && valor3>valor4) 
		{
			mensaje="el valor mayor es "+valor3
		}
		else
		{
			if(valor4>valor2 && valor4>valor3 && valor4>valor1)
			{
				mensaje="el valor mayor es "+valor4
			}
			else
			{
				if (suma>99) 
				{
					// suma=suma*90/100;
					porcentaje=90;
				}

				else
				{
					if (suma>49)
					{
						// suma=suma*95/100;
						porcentaje=95;
					}	
					else 
					{
						if (suma<50) 
						{
							porcentaje=115;
						}

					}//(suma>=50)	

				}
			}
		}
	}
}

suma=suma*porcentaje/100;
alert(suma);
alert(mensaje);
}
