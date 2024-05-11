// estudiantes
let estudiantes = [
    { nombre: "Juan Quijotes", rol: "Estudiante" },
    { nombre: "Ana Flank", rol: "Estudiante" },
    { nombre: "Carlos Antonio Solis", rol: "Estudiante" }
];

//profesores
let profesores = [
    { nombre: "María Jose", rol: "Profesor" },
    { nombre: "Pedro Navaja", rol: "Profesor" },
    { nombre: "Sofía Rosita", rol: "Profesor" }
];

function combinarListas(lista1, lista2) {
    return [...lista1, ...lista2];
}

let comunidadEducativa = combinarListas(estudiantes, profesores);

function separarRoles(comunidad) {
    let estudiantesSeparados = [];
    let profesoresSeparados = [];

    for (let i = 0; i < comunidad.length; i++) {
        if (comunidad[i].rol === "Estudiante") {
            estudiantesSeparados.push(comunidad[i]);
        } else if (comunidad[i].rol === "Profesor") {
            profesoresSeparados.push(comunidad[i]);
        }
    }

    return { estudiantesSeparados, profesoresSeparados };
}

let { estudiantesSeparados, profesoresSeparados } = separarRoles(comunidadEducativa);
console.log("Estudiantes:", estudiantesSeparados);
console.log("Profesores:", profesoresSeparados);
