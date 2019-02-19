function mostrar()
{

var hora=document.getElementById('hora').value;
hora=parseFloat(hora)

switch(hora)
{
	case 7:
	case 8:
	case 9:
	case 10:	
	case 11:
		console.log("mañana")
		break;			
}



}//FIN DE LA FUNCIÓN