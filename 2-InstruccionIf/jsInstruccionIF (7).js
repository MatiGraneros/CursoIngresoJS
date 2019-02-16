function mostrar()
{
//tomo la edad  

	var estadoCivil
	var edad1
		estadoCivil=document.getElementById('estadoCivil').value;
		edad1=document.getElementById('edad').value;
			edad1=parseInt(edad1);


	if(edad1<18)
	{
		if(estadoCivil!="Soltero")
			alert("Es muy pequeño para NO ser soltero.");
	}
				
}//FIN DE LA FUNCIÓN