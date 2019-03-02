function mostrar()
{

	var planeta;

		planeta=prompt("ingrese un planeta");
		
		switch(planeta)
		{
			case "tierra":
				mensaje=("aca vivimos");
				break;

			case "mercurio":
			case "venus":
				mensaje=("acá hace más calor");
				break;
		
			case "marte":
			case "jupiter":
			case "saturno":
			case "urano":
			case "neptuno":
			case "pluton":
				mensaje=("acá hace más frio");
				break;

			default:
				mensaje=("no es un planeta valido");
				break;	
		}

	alert(mensaje);	












}
