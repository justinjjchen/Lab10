var cnm = prompt("What is your age?");
console.log(cnm);

var data = new Date();
var currentYear = data.getFullYear();

var bYear = currentYear - cnm;

document.getElementById("para").innerHTML= bYear;