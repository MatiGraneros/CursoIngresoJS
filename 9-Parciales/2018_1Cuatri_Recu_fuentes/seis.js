function mostrar()
{

	var hora;
	var mensaje;

	hora=document.getElementById('laHora').value;
	hora=parseFloat(hora);

	switch(hora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="es de mañana";
			break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje="es de tarde";
			break;	

		default:
			if (hora>0 && hora<6 || hora>19 && hora<25) 
			{
				mensaje="es de noche";
				if (hora>19 && hora<25) 
				{
					alert("a dormir");
				}
			}	
			else
			{
				mensaje="no es una hora valida";
			}
	}

	alert(mensaje);







}
