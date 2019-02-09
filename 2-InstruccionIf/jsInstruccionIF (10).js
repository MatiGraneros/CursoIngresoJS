function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	

var nroran=Math.floor(Math.random()*11);

	

if(nroran>=9)
{
	alert(nroran+" EXCELENTE");
}

else if(4<=nroran && nroran<=8)
{
	alert(nroran+" APROBÓ");
}

else if(nroran<4)
{
	alert(nroran+" Vamos, la proxima se puede");
}






}//FIN DE LA FUNCIÓN