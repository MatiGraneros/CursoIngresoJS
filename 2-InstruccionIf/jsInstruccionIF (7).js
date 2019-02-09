function mostrar()
{
//tomo la edad  

	var estcivil=document.getElementById('estadoCivil').value;
	var edad1=document.getElementById('edad').value;


if (edad1<18 && estcivil=="Casado")
      alert("Es muy pequeño para NO ser soltero.");	
  
else if (edad1<18 && estcivil=="Divorciado")
      alert("Es muy pequeño para NO ser soltero.");
}//FIN DE LA FUNCIÓN