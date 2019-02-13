function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	

var nroran=Math.floor(Math.random()*10)+1;

	

if(nroran>=9)
{
	console.log(nroran+" EXCELENTE");
}

if(4<=nroran && nroran<=8)
{
	console.log(nroran+" APROBÓ");
}

if(nroran<4)
{
	console.log(nroran+" Vamos, la proxima se puede");
}






}//FIN DE LA FUNCIÓN