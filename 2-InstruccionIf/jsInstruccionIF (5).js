function mostrar()
{
//tomo la edad  


var edad1;
	edad1=document.getElementById('edad').value;
	edad1=parseInt(edad1);

		if(edad1>17)
			{
			alert("Usted NO es adolescente");
			}

		if (edad1<13)
			{
			alert("Usted NO es adolescente");
			}

		if(edad1>17 || edad1<13)
			{
			alert("Usted NO es adolescente");
			}


		if (!(edad1<17  edad1>13))
			{
			alert("Usted NO es adolescente");
			}






}//FIN DE LA FUNCIÓN