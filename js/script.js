document.getElementById('boton_Habilidades').onclick = function () {
    console.log ("capturamos el click sobre boton_Habilidades");    
    document.getElementById("contenedor_Habilidades").style.display = 'block'; 
    document.getElementById("contenedor_Estudios").style.display    = 'none'; 
    document.getElementById("contenedor_Experiencia").style.display = 'none'; 
    document.getElementById("contenedor_Contacto").style.display    = 'none'; 
}

document.getElementById('boton_Estudios').onclick = function () {
    console.log ("capturamos el click sobre boton_Habilidades");    
    document.getElementById("contenedor_Habilidades").style.display = 'none'; 
    document.getElementById("contenedor_Estudios").style.display    = 'block'; 
    document.getElementById("contenedor_Experiencia").style.display = 'none'; 
    document.getElementById("contenedor_Contacto").style.display    = 'none'; 
}

document.getElementById('boton_Experiencia').onclick = function () {
    console.log ("capturamos el click sobre boton_Habilidades");    
    document.getElementById("contenedor_Habilidades").style.display = 'none'; 
    document.getElementById("contenedor_Estudios").style.display    = 'none'; 
    document.getElementById("contenedor_Experiencia").style.display = 'block'; 
    document.getElementById("contenedor_Contacto").style.display    = 'none'; 
}
document.getElementById('boton_Contacto').onclick = function () {
    console.log ("capturamos el click sobre boton_Habilidades");    
    document.getElementById("contenedor_Habilidades").style.display = 'none'; 
    document.getElementById("contenedor_Estudios").style.display    = 'none'; 
    document.getElementById("contenedor_Experiencia").style.display = 'none'; 
    document.getElementById("contenedor_Contacto").style.display    = 'block'; 
}