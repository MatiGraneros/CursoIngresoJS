function mostrar()
{

var planeta;

	planeta=prompt("ingrese un planeta");
	
	switch(planeta)
	{
		case "tierra":
			alert("aca vivimos");
			break;

		case "mercurio":
		case "venus":
			alert("acá hace más calor");
			break;
	
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			alert("acá hace más frio");
			break;

		default:
			alert("no es un planeta valido");
			break;	
	}














}
