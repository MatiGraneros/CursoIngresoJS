function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//console.log (mesDelAño);


switch(mesDelAño)
{
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			console.log("Ya pasamos el frio, ahora calor!!!.")
			break;	

		case "Julio":
		case "Agosto":
			console.log("Abrigate que hace frio.")
			break;

		default:
		console.log("Falta para el invierno.")
		break;
		
	}












}//FIN DE LA FUNCIÓN