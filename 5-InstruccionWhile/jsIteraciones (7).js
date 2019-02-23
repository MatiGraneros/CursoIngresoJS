function mostrar()
{

	// var contador=0;
	// var acumulador=0;
	// var respuesta='si';
	var numero

numero=prompt("ingrese valor, parar con si");
	if(numero<0 || numero>0)
	{
		numero=parseFloat(numero);		
	}//primer ingreso

while(numero!="si")
{
	numero=prompt("ingrese valor, parar con si");
	if(numero<0 || numero>0)
	{
		numero=parseFloat(numero);		
		numero=numero+numero;
		alert(numero);
	}
}
	
alert(numero);





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;



}//FIN DE LA FUNCIÓN