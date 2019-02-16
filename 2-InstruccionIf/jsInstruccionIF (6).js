function mostrar()
{
//tomo la edad  


var edad1;
	edad1=document.getElementById('edad').value;
	edad1=parseInt(edad1);
	

if(edad1<13)
{
	alert("Usted es un niño");
}

	
	else
	{
		if(edad1>17)
		{
		alert("Usted es un adulto");	
		}
			else 
			{
				alert("usted es un adolescente");
			}
	}
				

}//FIN DE LA FUNCIÓN