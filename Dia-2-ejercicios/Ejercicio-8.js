function validarObjeto(objeto) {
    let propiedadesRequeridas = ["nombre", "direccion", "telefono"];

    for (let i = 0; i < propiedadesRequeridas.length; i++) {
        if (!objeto.hasOwnProperty(propiedadesRequeridas[i])) {
            return false; // Si falta alguna propiedad, retorna false
        }
    }

    return true;
}

let persona = {
    nombre: "Juan",
    direccion: "Calle 123",
    telefono: "1234567890"
};

console.log(validarObjeto(persona)); 
