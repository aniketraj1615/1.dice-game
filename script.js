// var randome_number1 = Math.floor(Math.random() * 6 + 1);

// var randome_number2 = Math.floor(Math.random() * 6 + 1);

// var im = "dice" + randome_number1 + ".png";
// var ran_image = "images/" + im;
// var pic1 = document.querySelectorAll("img")[0];
// pic1.setAttribute("src", ran_image);

// var im2 = "dice" + randome_number2 + ".png";
// var ran_image2 = "images/" + im2;
// var pic1 = document.querySelectorAll("img")[1];
// pic1.setAttribute("src", ran_image2);
// if (randome_number1 == randome_number2) {
//   document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML =
//     "Draw";
// }
// if (randome_number1 > randome_number2) {
//   document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML =
//     "Player 1 won!!!";
// }
// if (randome_number1 < randome_number2) {
//   document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML =
//     "Player 2 won!!!!!";
// }

// modified version--
console.log("hiii");
var num1 = Math.floor(Math.random() * 6 + 1);
a = num1;
console.log(num1);
var rand_image1 = "images/dice" + num1 + ".png";
console.log(rand_image1);

var pick1 = document.querySelectorAll("img")[0];

var num2 = Math.floor(Math.random() * 6 + 1);
console.log(num2);
b = num2;
var rand_image2 = "images/dice" + num2 + ".png";
console.log(rand_image2);

var pick2 = document.querySelectorAll("img")[1];
$("#a_dicee").click(function () {
  pick1.setAttribute("src", rand_image1);

  return false;
});

$("#b_dicee").click(function () {
  pick2.setAttribute("src", rand_image2);
  if (num1 > num2) {
    var heading = document.querySelectorAll("h1")[0];
    heading.innerHTML = "Aniket Won 😀";
  } else if (num1 < num2) {
    var heading = document.querySelectorAll("h1")[0];
    heading.innerHTML = "Shivam Won 🍔";
  } else if (num1 == num2) {
    var heading = document.querySelectorAll("h1")[0];
    heading.innerHTML = "Draw";
  }

  return false;
});
