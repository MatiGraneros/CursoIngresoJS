function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroUno=prompt("primer numero");
	var numeroDos=prompt("segundo numero");
	var numeroTres=prompt("tercer numero");
	var numeroCuatro=prompt("cuarto numero");
	var numeroCinco=prompt("quinto numero");


while(numeroUno<5)
{
	numeroUno=parseInt(numeroUno)
	numeroUno=numeroUno+1
	alert(numeroUno);
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN