// Vamos a convertir el código del ejercicio del árbol de navidad de la sesión 2.2 en una función. Esta función tendrá tres parametros: número de líneas,
// si lleva estrella y si lleva tronco. La función debe devolver un string que represente el árbol de navidad.

// Si vemos que alguna de las partes del código se puede sacar a otra función, podemos hacerlo.
//  La idea es que el código quede lo más sencillo posible para que otra persona que no haya visto el enunciado ni el código pueda entenderlo sin problemas.

// Probaremos a realizar tres árboles con argumentos distintos para que veamos si funciona correctamente.
function tree(lines, withstar, withtronco) {
  var triangle = "▲";
  var max = lines;
  var star = "★";
  var tulp = "|";
  for (let index = 0; index < max; index++) {
    if (index == 0) {
      if (withstar) {
        console.log(star + " \n");
      }

      console.log(triangle + " \n");
    } else if (index == max - 1) {
      if (withtronco) {
        console.log(tulp);
      }
    } else {
      triangle = triangle + "▲";
      console.log(triangle + " \n");
    }
  }
}
tree(20, true, true);
