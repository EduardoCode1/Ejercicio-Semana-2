function contarPalabras(arregloCadenas) {
    let contadorPalabras = {};

    for (let cadena of arregloCadenas) {
        let palabras = cadena.split(' ');

        for (let palabra of palabras) {
            if (contadorPalabras[palabra]) {
                contadorPalabras[palabra]++;
            } else {
                contadorPalabras[palabra] = 1;
            }
        }
    }

    return contadorPalabras;
}

// Ejemplo de uso:
let arregloCadenas = ['hola buenos dias', 'hola buenas tardes', 'hola buenas noches'];
console.log(contarPalabras(arregloCadenas));
