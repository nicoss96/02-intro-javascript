const personajes = ["Juan", "Anderson", "Nicolas"];

const [p1] = personajes;
console.log(p1);

const retornaArreglo = () => {
    return ["ABC", 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
    return [valor, () => { console.log("Hola Mundo") }];
}

const [nombre, setNombre] = useState("Juan");
console.log(nombre);
setNombre();