const persona = {
    nombre: "Nicolas",
    apellido: "Suarez",
    edad: 28,
    direccion: {
        ciudad: "Quito",
        Provincia: "Pichincha"
    }

};

//console.table(persona);
console.log(persona);

const persona2 = { ...persona };
persona2.nombre = "Ronald";

console.log(persona);
console.log(persona2)