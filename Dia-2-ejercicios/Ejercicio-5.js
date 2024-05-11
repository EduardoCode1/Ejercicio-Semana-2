let Arreglo = [1,2,3,4,5,6,7,8,9,10];
let SumaPares =0;
for(let i=0; i<Arreglo.length; i++){
    if (Arreglo[i] % 2 === 0) {
        SumaPares += Arreglo[i];
    }
}
console.log(SumaPares);