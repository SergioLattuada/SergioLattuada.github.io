document.getElementById('contactame').onclick = function () {
    console.log ("capturamos el click");    
    document.getElementById("contenedor_del_boton").style.display = 'none'; 
    document.getElementById("datos_de_contacto").style.visibility = 'visible'; 
}