function mostrar()
{


var valor1=prompt("ingrese valor primero");
var valor2=prompt("ingrese valor segundo");

if(valor1==valor2){
	alert(valor1+valor2);
}
else{
	var entero1=parseFloat(valor1);
	var entero2=parseFloat(valor2);
	alert(entero1+entero2);
}


}
