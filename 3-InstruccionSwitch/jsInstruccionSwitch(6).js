function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
laHora=parseFloat(laHora);

switch(laHora)
{
	case 7:
	case 8:
	case 9:
	case 10:	
	case 11:
		console.log("Es de mañana.")
		break;

	case 12:
	case 13:
	case 14:	
	case 15:	
	case 16:
	case 17:
	case 18:
	case 19:
		console.log("es de tarde")
		break;
		
	default:
	 	console.log("es de noche")
}







// var mañana=(laHora>=7 && laHora<=11);
// var tarde=(laHora>=12 && laHora<=19);
// var noche=(laHora>=20 && laHora<=24);
// var madrugada=(laHora>=1 && laHora<=6);

//  switch(laHora)
//  {
// 	case mañana:
// 	alert("Es de mañana.")
// 	break;
	
// 	case tarde:
// 	alert("Es de tarde")
// 	break;
	
// 	case noche:
// 	alert("Es de noche")
// 	break;

// 	case madrugada:
// 	alert("Es de noche")
// 	break;


// }

}//FIN DE LA FUNCIÓN