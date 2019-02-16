function mostrar()
{
//tomo la edad  


var edad1;
	edad1=document.getElementById('edad').value;
	edad1=parseInt(edad1);
var mensaje;	

if(edad1<13)
{
	mensaje="Usted es un niño";
}

	
	else
	{
		if(edad1>29)
		{
		mensaje="Usted tiene 30 o mas";	
		}

			else 
			{
				if(edad1<18)
				{
				mensaje="usted es un adolescente";	
				}
					else
					{
					mensaje="usted es un mayor de edad";
					}
			}
	}
				
	alert(mensaje);			


/*------------|--------|-------|------------
			13		18		29
*/
}//FIN DE LA FUNCIÓN