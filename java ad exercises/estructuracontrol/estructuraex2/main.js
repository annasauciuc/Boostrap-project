"use strict";
var name = "Ana";
var name = prompt("¿Cuál es tu nombre?");
if (name === "Ana") {
  alert("Welcome Ana"); //Esta línea se ejecuta solo si se cumple la condición
} else if (name === "Marta") {
  alert("welcome Marta"); //Esta línea se ejecuta solo si se NO cumple la primera condición y SÍ se cumple la segunda
} else if (name === "Ana") {
  alert("Welcome"); //Esta línea se ejecuta solo si se NO cumplen la primeras condiciones y SÍ se cumple la última
} else {
  alert("Username not found"); //Esta línea se ejecuta solo si se NO cumplen ninguna de las condiciones anteriores
}
