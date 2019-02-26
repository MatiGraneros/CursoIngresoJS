function mostrar()
{




var acumulador=0;
var contador=0;
var respuesta=true;
var numero;


while(respuesta==true)
	{	
	contador++;
	numero=prompt("insertar numero "+ contador);
	numero=parseFloat(numero);
 	while(isNaN(numero))
 		{
 		numero=prompt("insertar numero "+ contador);
		numero=parseFloat(numero);
 		}	
 	acumulador=numero+acumulador;
 	respuesta=confirm("queres otro numero? (escribi si, de lo contrario dejalo en blanco)");
 	}

 document.getElementById('suma').value=acumulador;
 document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN