function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;


 var mañana=(laHora>=7 && laHora<=11);
 var tarde=(laHora>=12 && laHora<=19);



// if(laHora>=7 && laHora<=11){

//  switch(mañana){
// 	case mañana:
// 	alert("Es de mañana.")
// 	break;
// 	}	

// else if(laHora>=12 && laHora<=19){

//  switch(tarde){
// 	case mañana:
// 	alert("Es de tarde")
// 	break;
// 	}

switch(laHora){
	case mañana:
	alert("es de mañana")
	break;
}



}//FIN DE LA FUNCIÓN