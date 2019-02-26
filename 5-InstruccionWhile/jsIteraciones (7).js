function mostrar()
{




var acumulador=0;
var contador=0;
var respuesta=true;
var num1;


while(respuesta==true)
	{	
	contador++;
	num1=prompt("insertar numero "+ contador);
	num1=parseFloat(num1);
 	while(isNaN(num1));
 		{
 		num1=prompt("insertar numero"+ contador);
		num1=parseFloat(num1);
 		}	
 	acumulador=num1+acumulador;
 	respuesta=confirm("queres otro numero? (escribi si, de lo contrario dejalo en blanco)");
 	}

 document.getElementById('suma').value=acumulador;
 document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN