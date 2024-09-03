//const saludar = function saludar(nombre){
//    return `Hola,${nombre}`;
//}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = (nombre) => `Hola Mundo`;

console.log(saludar2("Nicolas"));
console.log(saludar3("Ronald"));
console.log(saludar4());


const getUser = () => ({
    uid: "ABCD",
    username: "Nicoss96"
});

const user = getUser();
console.log(user);

//TAREA

const getUsuarioActivo = (nombre) => ({
        uid: "ABCD",
        username: nombre
})

const usuarioActivo = getUsuarioActivo("Nicolas");

console.log(usuarioActivo);



