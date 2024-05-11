let prodcutoA ={
    nombre:"camisa",
    precio: 25,
    cantidad:5
}

let productoB ={
    nombre:"jeans",
    precio:40,
    cantidad: 3
}

let CostoTotalProductoA = prodcutoA.precio * prodcutoA.cantidad;
let CostoTotalProductoB = productoB.precio * productoB.cantidad;
let CostoTotalProducto = CostoTotalProductoA + CostoTotalProductoB

console.log(CostoTotalProductoA);
console.log(CostoTotalProductoB);
console.log("Total:" + " " +  CostoTotalProducto);