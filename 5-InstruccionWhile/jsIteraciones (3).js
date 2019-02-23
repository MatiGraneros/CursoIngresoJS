function mostrar()
{

var clave=prompt("ingrese el número clave."); 				//1
var intentos=0

while(clave!="utn750")											//2
{
	intentos=intentos+1
	console.log(clave);
	clave=prompt("incorrecto, ingrese el número clave.");		//3		
	if(intentos==3)
	{
		break;
	}
}




//validacion: repedir el dato (si esta mal).

//tp 13

}//FIN DE LA FUNCIÓN
