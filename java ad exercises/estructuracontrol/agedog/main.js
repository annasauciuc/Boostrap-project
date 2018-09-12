//Ex 3 edad del perro
var agedog = prompt("What is your dog age?");
var firstYear = 1 * 15;
var secondYear = 1 * 9;

if (agedog == 1) {
  alert("Your dog has : " + firstYear + " years");
} else if (agedog == 2) {
  alert("Your dog has :" + (firstYear + secondYear) + " years");
} else {
  alert(
    "your dog has :" + ((agedog - 2) * 5 + (firstYear + secondYear)) + " years"
  );
}
//ex 3 class age dog
if (edadPerro == 1) {
  edadHumana = 15;
  console.log("Edad:" + edadHumana);
} else if (edadPerro == 2) {
  edadHumana = 15 + 9;
} else {
  edadHumana = 15 + 9 + 5 * (edadPerro - 2);
  console.log("Edad:" + edadHumana);
}
