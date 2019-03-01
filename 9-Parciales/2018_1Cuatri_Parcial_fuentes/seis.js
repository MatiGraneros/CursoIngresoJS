function mostrar()
{

	var hora;
	var mensaje;

	hora=document.getElementById('laHora').value;
	hora=parseFloat(hora);


	switch(hora)
	{
		case hora:
			if (hora>=6 && hora<=11) 
			{
				mensaje="es de mañana";
			}
			else
			{
				if (hora>=12 && hora<=19) 
				{
					mensaje="es de tarde";
				}
			}
			break;

		default:
			mensaje="es de noche";
	}



alert(mensaje);






}
