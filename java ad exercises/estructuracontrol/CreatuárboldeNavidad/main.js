//Web example
var txt = "";
for (i = 1; i <= 10; i++) {
  txt = "";
  for (j = i; j < 10; j++) {
    txt += " ";
  }
  for (k = 0; k < i * 2 - 1; k++) {
    txt += "*";
  }
  console.log(txt);
}

//Ex 7

var triangle = "▲";
var max = 6;
var star = "★";
var tulp = "|";
for (let index = 0; index < max; index++) {
  if (index == 0) {
    console.log(star + " \n");
    console.log(triangle + " \n");
  } else if (index == max - 1) {
    console.log(tulp);
  } else {
    triangle = triangle + "▲";
    console.log(triangle + " \n");
  }
}
//Dany version 1
let max = 25;
let whitespace = " ";
var i = 0;
var ast = "*";

for (let line = 0; line < max; line++) {
  ast = ast + "*";
  console.log(whitespace + ast + " \n");
}
//2
let lines = 25;
let whitespace = " ";
for (let line = 1; line <= lines; line++) {
  console.log(
    `${whitespace.repeat(lines - line)}${"*".repeat(line)}${"*".repeat(line)}`
  );
}
