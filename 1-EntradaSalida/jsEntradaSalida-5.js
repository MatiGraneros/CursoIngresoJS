/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	var nombre;	
	var edad;


	//nombre=prompt("usted se llama"+nombre+ "y tiene"+ edad);
	//alert("usted se llama"+nombre+ "y tiene"+ edad);
	
	//document.getElementById('elNombre').value=nombre;
	//document.getElementById('laEdad').value=edad;


	nombre=document.getElementById('elNombre').value;
	edad=document.getElementById('laEdad').value;




	alert("usted se llama "+nombre+" y tiene "+edad);


}

