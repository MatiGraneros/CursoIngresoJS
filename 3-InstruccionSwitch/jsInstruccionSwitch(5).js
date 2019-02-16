function mostrar()
{


var hora;
var mañana;

hora=document.getElementById('hora').value;
mañana=(hora>6 && hora<12)


switch(mañana)
{
	case true:
	alert("Es de mañana.")
	break;
}




}//FIN DE LA FUNCIÓN