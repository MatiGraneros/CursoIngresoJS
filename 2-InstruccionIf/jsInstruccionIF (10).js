function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	

var numeroRandom=Math.floor(Math.random()*10)+1;

	

if(numeroRandom>=9)
{
	console.log(numeroRandom+" EXCELENTE");
}	

else{
	if (numeroRandom<4)
	 {
	 	console.log(numeroRandom+" Vamos, la proxima se puede");
	 }
	 else
	 {
	 	console.log(numeroRandom+" APROBÓ");
	 }
}



// else 
// 	{
// 		if(4<=numeroRandom && numeroRandom<=8)
// 		{
// 			console.log(numeroRandom+" APROBÓ");
// 		}
// 	}


// if(numeroRandom<4)
// {
// 	console.log(numeroRandom+" Vamos, la proxima se puede");
// }







}//FIN DE LA FUNCIÓN