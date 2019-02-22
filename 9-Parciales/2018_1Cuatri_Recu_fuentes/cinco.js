function mostrar()
{

var metodo;
var descuento;	
var habitacion;
var paquete;

metodo=prompt("Ingrese el metodo de pago");
habitacion=prompt("Ingrese Habitacion");
paquete=prompt("Ingrese el paquete");

switch(habitacion)
{
case "1":
precio=100
	switch(metodo)
	{
	case "Visa":
	case "MercadoPago":
		precio=precio*90/100
		break;

	case "PayPal":
		precio=precio*85/100
		break;

	case "Efectivo":	
		switch (paquete)
		{
			case "soloDesayunos":
				precio=precio*70/100
				break;

			case "todoIncluido":
				precio=precio*65/100
				break;

			default:
			precio=precio*80/100	
		}
		break;

	case "Otro":
		precio=precio*95/100
		break;	

	case "todoIncluido":
	case "PayPal":
		precio=precio*75/100
		break;
	}//switch(metodo)


}


alert(precio);







// switch(metodo)
// {
// 	case "Visa":
// 	case "MercadoPago":
// 		descuento=90
// 		break;

// 	case "PayPal":
// 		descuento=85
// 		break;

// 	case "Efectivo":	
// 		descuento=80
// 		switch (paquete)
// 		{
// 			case "soloDesayunos":
// 				descuento=descuento+10
// 				break;

// 			case "todoIncluido":
// 				descuento=descuento+15
// 		}
// 		break;

// 	case "Otro":
// 		descuento=95
// 		break;	

// 	case "todoIncluido":
// 	case "PayPal":
// 		descuento=75
// 		break;

// }










}
