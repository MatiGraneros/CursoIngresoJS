/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

var precio1=document.getElementById('PrecioUno').value;

var precio2=document.getElementById('PrecioDos').value;

var precio3=document.getElementById('PrecioTres').value;

var entero1=parseInt(precio1)

var entero2=parseInt(precio2)

var entero3=parseInt(precio3)

var resultado=entero1+entero2+entero3;




alert(resultado);




	
}
function Promedio () 
{


var precio1=document.getElementById('PrecioUno').value;

var precio2=document.getElementById('PrecioDos').value;

var precio3=document.getElementById('PrecioTres').value;

var entero1=parseInt(precio1)

var entero2=parseInt(precio2)

var entero3=parseInt(precio3)

var resultado=entero1+entero2+entero3;

alert(resultado/3);







	
}
function PrecioFinal () 
{


var precio1=document.getElementById('PrecioUno').value;

var precio2=document.getElementById('PrecioDos').value;

var precio3=document.getElementById('PrecioTres').value;

var entero1=parseInt(precio1)

var entero2=parseInt(precio2)

var entero3=parseInt(precio3)

var resultado=entero1+entero2+entero3;

var IVA=resultado*21/100

var preciofinal=resultado+IVA



alert(preciofinal);















	
}