//2.3 Funciones
//ex3
//"Precio sin IVA: 10, IVA: 2,1 y Total: 12,1"
"use strict";
function precio(n) {
  var precioSinIVA = n;
  var IVA = 21 / 100; //procentaje
  var IvaDelProducto = precioSinIVA * IVA;
  var total = precioSinIVA + IvaDelProducto;
  var result = "Precio sin Iva:" + n + " ,IVA:" + IVA + " y Total: " + total;
  alert(result);
}
var n = prompt("Un precio");
n = parseInt(n);
precio(n);
