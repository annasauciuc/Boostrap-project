//Funcions
//EJERCICIO 4
//Calculador de modelo de caja
//box-sizing: content-box (default):
//Width and height only apply to the content of the element:
//box-sizing: border-box:
//Width and height apply to all parts of the element: content, padding and borders:
var x = y + z;
var w = prompt("Border");
w = parseInt(w) * 4;
var y = prompt("Box width");
y = parseInt(y) * 4;
var z = prompt("Padding");
z = parseInt(z) * 4;
function box(x, y, z, w) {
  if (x) {
    return y;
  } else {
    return y + z + w;
  }
}

var borderBox = box(true, y, z, w);
alert("border-box:" + borderBox);
var contentBox = box(false, y, z, w);
alert("content-box:" + contentBox);
// console.log('borderBox ', borderBox);
// console.log('contentBox ', contentBox);

//Class exercises

function calculador(tipo, ancho, padding, border) {
  if (tipo == true) {
    return ancho - padding - border;
  } else {
    var valor = ancho + padding + border;
    return valor;
  }
}
var variable = calculador();
console.log("resultado:" + variable);
