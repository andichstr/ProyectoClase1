//Variables que obtengo del DOM para utilizar en la funcion.
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const resultado = document.getElementById("divResultado");

//Funcion flecha sin parametros. Concatena nombre y apellido que se obtienen del formulario, y los imprime en un div.
const concatenarDatos = () => resultado.textContent = `Su nombre completo es: ${nombre.value} ${apellido.value}`;

//Funcion flecha sin parametros. Se utiliza para limpiar el div en un boton.
const borrarDatos = () => resultado.textContent = "";