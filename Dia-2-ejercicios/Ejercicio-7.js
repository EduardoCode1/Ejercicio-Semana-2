let personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 20 },
    { nombre: "Carlos", edad: 25 }
];

personas.sort((a, b) => a.edad - b.edad);

console.log(personas);
