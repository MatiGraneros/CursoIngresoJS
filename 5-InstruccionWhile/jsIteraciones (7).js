function mostrar()
{

	// var contador=0;
	// var acumulador=0;
	// var respuesta='si';
	var numero;
	var numero2;

numero=prompt("ingrese valor, parar con si");
	if(numero<=0 || numero>0)
	{
		numero=parseFloat(numero);		
	}//primer ingreso

while(numero!="si")
{
	numero2=prompt("ingrese valor, parar con si");
	if(numero2<=0 || numero2>0)
	{
		numero2=parseFloat(numero2);		
		numero2=numero+numero2;
		alert(numero2);
	}
}
	
alert(numero);





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;



}//FIN DE LA FUNCIÓN