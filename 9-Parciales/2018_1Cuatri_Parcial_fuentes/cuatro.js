function mostrar()
{

var cantidad;
var descuento;
var precio=500;
var descuento2;
var	descuento3;
var descuento4;
var metodoDePago;
var TARJETA;
var EFECTIVO;
var recargo;
	
	metodoDePago=prompt("escriba el metodo de pago, si es tarjeta escribir SI, si es efectivo escribir NO");


	cantidad=prompt("Cada producto vale $500, ingrese la Cantidad de productos");
		parseInt(cantidad);

		


 if(cantidad>=2 && metodoDePago=="NO")
  precio=cantidad*precio;
	precio=parseFloat(precio);
	 	descuento=precio*10/100;
	 		descuento=precio-descuento;
	 {
		 	if(precio>=2000)
			{
			descuento=precio*10/100;
				precio=precio-descuento;

			descuento2=precio*15/100;
				precio=precio-descuento;
			}	 		
	 }

alert(descuento);

 
// -10
// -15
// tarjeta+10


}