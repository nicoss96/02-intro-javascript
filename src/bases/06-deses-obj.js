const persona = {
    nombre: "Tony",
    edad: "28",
    clave:"Ironman"
};

const UseContext = ({clave, nombre, edad, rango= "Capitan"}) => {
 
    return {
        nombreClave: clave,
        años: edad, 
        latlng:{
            lat: 1518483,
            lng:-154886
        }
    }
}

const {nombreClave, años, latlng:{lat, lng}} = UseContext(persona);
console.log(nombreClave, años)
console.log(lat, lng)

