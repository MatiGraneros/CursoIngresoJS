function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

var dia=(laHora>=0)

var mañana=(laHora>=7 && laHora<=11);
var tarde=(laHora>=12 && laHora<=19);
var noche=(laHora>=20 && laHora<=24);
var madrugada=(laHora>=0 && laHora<=6);



// if(laHora>=7 && laHora<=11){

 switch(dia){
	case mañana:
	alert("Es de mañana.")
	break;
	
	case tarde:
	alert("Es de tarde")
	break;
	
	case noche:
	alert("Es de noche")
	break;

	case madrugada:
	alert("Es de noche")
	break;

	}
// {
// switch(laHora){
// 	case mañana:
// 	alert("es de mañana")
// 	break;
// }



}//FIN DE LA FUNCIÓN