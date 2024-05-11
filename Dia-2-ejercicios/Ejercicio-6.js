let personas =[
    {Nombre: "Eduardo", Edad: 21, Sexo:"Masculino"},
    {Nombre: "Sonia", Edad: 50, Sexo:"Femenino"},
    {Nombre: "Emiliano", Edad: 35, Sexo:"Masculino"},
    {Nombre: "Sofia", Edad: 81, Sexo:"Femenino"},
];

function BuscarPorNombre(arrayPersona, nombre) {
    return arrayPersona.find(Objeto=> Objeto.Nombre === nombre)
}

let PersonaBuscada = BuscarPorNombre(personas, "Sonia")
console.log(PersonaBuscada);
