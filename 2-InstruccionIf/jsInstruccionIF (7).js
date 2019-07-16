function mostrar()
{
//tomo la edad  

     var edad
     var estado

     edad = parseInt(document.getElementById("edad").value);
     estado = parseInt(document.getElementById("estadoCivil"));


     if(edad < 18 && estado != "Soltero"){

        alert("Es muy niño para no ser soltero");
        
     }

	


}//FIN DE LA FUNCIÓN