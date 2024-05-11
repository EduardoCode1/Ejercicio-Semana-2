let listaDeCompras = {
    "Manzanas": 5,
    "Guineos": 10,
    "Leche": 2,
    "Pan": 1,
    "Huevos": 12,
    "Galletas": 10
};

function generarLista(objeto) {
    let listaLegible = [];

    for (let elemento in objeto) {
        listaLegible.push(elemento + ": " + objeto[elemento]);
    }

    return listaLegible.join("\n");
}

console.log(generarLista(listaDeCompras));
