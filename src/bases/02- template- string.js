const nombre = "Nicolas";
const apellido = "Suarez";

//const nombreCompleto = nombre + "" + apellido;

const nombreCompleto = `Hola `;

console.log(nombreCompleto); 


function getSaludo(nombre){
    return "Hola " + nombre;

}

console.log(`Este es un texto: ` + getSaludo(nombre));