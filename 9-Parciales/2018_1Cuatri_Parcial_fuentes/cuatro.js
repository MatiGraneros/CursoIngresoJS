function mostrar()
{

var cantidad;
var descuento;
var precio=500;
var descuento2;
var metodoDePago;
var recargo;
var final;	



	metodoDePago=prompt("escriba el metodo de pago, si es tarjeta escribir SI, si es efectivo escribir NO");
	cantidad=prompt("Cada producto vale $500, ingrese la Cantidad de productos");
		parseInt(cantidad);

		


 if(cantidad>=2)
 	{
 	 if(metodoDePago=="NO")
 		{
 	 	precio=cantidad*precio;
 	 	precio=parseFloat(precio);
 	 	descuento=precio*10/100;
 	 	final=precio-descuento;
 	 	if(precio>=2000)
 	 		{
 	 			descuento2=precio*15/100;
				final=precio-descuento-descuento2;

			}	 		
		}

	}
				else
				{
					final=cantidad*precio
				}




 
if(metodoDePago=="SI")
{
	precio=cantidad*precio;
 	 	precio=parseFloat(precio);
 	 	recargo=precio*10/100;
 	 	final=precio+recargo;
}

alert(final);

}