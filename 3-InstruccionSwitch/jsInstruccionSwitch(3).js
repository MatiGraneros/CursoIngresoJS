function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño=="Febrero")
	{
		case true:
			console.log("Este mes no tiene más de 29 días.")
			break;
	
		case false:
			console.log("Este mes tiene 30 o más días")
			break;
	 }


	switch(mesDelAño)
	{
		case "Febrero":
			console.log("Este mes no tiene más de 29 días.")
			break;
	
		default:
			console.log("Este mes tiene 30 o más días")
			break;
	 }



}




		//FIN DE LA FUNCIÓN