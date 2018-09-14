//function returning the Square of a passed value

var buttonJumbotron = document.getElementById("btn-send");

buttonJumbotron.addEventListener("click", function() {
  var buttonSend = document.getElementById("btn-send");
  // console.log("texto", buttonSend);
  // buttonSend.style =
  //  "width:100px;   margin-left:10px; background-color:blue; color:black; transition: all 0.8s ease 0s;";
  var userInput = document.getElementById("input-number");
  var value = square(userInput.value);
  document.getElementById("p-result").innerText = "result : " + value;
  document.getElementById("p-result").className = "paragraph";

  setTimeout(function() {
    buttonSend.style =
      "width:100px;   margin-left:10px; background: #428BCA; transition: all 0.9s ease-in 0s";
  }, 100);
});

function square(number) {
  return number * number;
}
//Exercise 2

var num1 = 50;
var num2 = 30;
var res = num1 - num2;

if (res < 30) {
  console.log("El número es true");
} else {
  console.log("el número es false");
}

//Exercise 3

let max = 25;
let whitespace = " ";
var i = 0;
var ast = "*";

for (let line = 0; line < max; line++) {
  ast = ast + "*";
  console.log(whitespace + ast + " \n");
}
