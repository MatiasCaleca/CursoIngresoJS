/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var sueldo;
    var aumento;
    var nuevosueldo;

    sueldo = document.getElementById("sueldo").value;
    sueldo = parseFloat(sueldo);

    aumento = sueldo * 0.1;

    nuevosueldo = sueldo + aumento;

    document.getElementById("resultado").value = nuevosueldo;

            
}
