let personas =[
    {Nombre: "Eduardo", Edad: 21, ciudad:"Santa Ana"},
    {Nombre: "Sonia", Edad: 50, ciudad:"San Vicente"},
    {Nombre: "Emiliano", Edad: 35, ciudad:"la Union"},
    {Nombre: "Sofia", Edad: 81, ciudad:"La Libertad"},
];

function FiltrarPersonas(PersonaObjeto, ciudad) {
    return PersonaObjeto.filter(persona => persona.Edad > 30 && persona.ciudad === ciudad)
}

let PersonasFiltradas = FiltrarPersonas(personas,"la Union")
console.log(PersonasFiltradas);
