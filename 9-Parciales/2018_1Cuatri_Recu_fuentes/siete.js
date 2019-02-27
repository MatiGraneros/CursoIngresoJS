function mostrar()
{

var notas;
var respuesta=true;
var contador=0;
var acumulador=0;
var sexo;
var acumuladorSexo="Sexos: ";

while(contador<5)
{
	contador++
	notas=prompt("ingrese sus notas");
	notas=parseFloat(notas);
	while(isNaN(notas))
	{
		notas=prompt("Incorrecto, Ingrese valor valido");
		notas=parseFloat(notas);
	}
	while(!(notas<=10 && notas>0))
	{
		notas=prompt("Incorrecto, Ingrese valor valido");
		notas=parseFloat(notas);	
	}
	acumulador=notas+acumulador;
	respuesta=confirm("queres ingresar otra nota?")


}

	

	while(contador<5)
	{
		contador++
		sexo=prompt("ingresar sexo");
		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("error");
		}
			acumuladorSexo=sexo+acumuladorSexo;
	}

	alert(acumulador);
	






}
