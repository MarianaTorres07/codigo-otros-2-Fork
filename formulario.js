//Traer elementos del HTML, pero como en el HTML es una clase, hay que cambiarlo a . y el nombre.
//agregar el ; al final (de todos las lineas)
var formulario = document.querySelector(".formulario");

//Traer el id del input
var enviar = document.querySelector("#enviar");

//Se le agrega un addEventListener (para cuando la persona le click en Submit, se pueda agregar la informacion a lista de invitados.)
enviar.addEventListener("click", function(e){

  e.preventDefault(); //Se le agrega el Default.
  
  var nombreInput = formulario.elements[0]; //Reasignar el nombre para que sean más claros
  var edadInput = formulario.elements[1]; //Reasignar el nombre de e
  var nacionalidadSelect = formulario.elements[2]; //Reasignar el nombre 

  var nombre = nombreInput.value; //Conseguir el valor del Input del nombre
  var edad = edadInput.value;  //Conseguir el valor del Input del edad

  var i = nacionalidadSelect.selectedIndex; //se tiene el indiceSeleccionado
  var nacionalidad = nacionalidadSelect.options[i].value;
  //Se imprime en consola... (nombre, edad)
  console.log(nombre, edad);
  //...y la nacionalidad cuando le las click en Submit
  console.log(nacionalidad);

  //Si la longitud del nombre no tiene nada...
  if (nombre.length === 0) {
    //entonces agregar "error"
    nombreInput.classList.add("error");
  } //Si la edad es menor que 18 o si la edad es mayor a 120 ...
  if (edad < 18 || edad > 120) {
    //entonces hay un error
    edadInput.classList.add("error");
  }
//Si el la longitud del nombre es mayor que 0 y la edad es mayor que 18 y menor de 120, entonces
if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
  //...Se llama a la funcion (agregarInvitado)
  agregarInvitado(nombre, edad, nacionalidad);
  }
});  //fin de funcion formulario.onsubmit



//Elimnar el boton de Eliminar invitado porque aparece doble 
// var botonBorrar = document.createElement("button");
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"

//Eliminar el elemento br
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);




//Funcion para agregar un invitado (tres parametros)
function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  //Traer del html, el id del div (lista-de-invitados)
var lista = document.getElementById("lista-de-invitados");

//Crear un elemento (div)
var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); //debe ser .add
lista.appendChild(elementoLista);

//Eliminar este codigo porque abajo se crea la funcion para crearElemento con los mismos datos
// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

//funcion crearElemento (con 2 parametros)
function crearElemento(descripcion, valor) {
  //Create element
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor; 
//appendChild
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

//Invocar las funciones
crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);



//create element --> (button) Eliminar invitado 
var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"

//Crear un elemento --> (br)
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
//Aqui se hace el appendChild de botonBorrar
elementoLista.appendChild(botonBorrar);

//Cuando se le hace click, en el boton de Eliminar invitado:
 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
} //fin de funcion de agregarInvitados