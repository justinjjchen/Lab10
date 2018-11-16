//var numOne = document.getElementById("rigel").value;
//var numTwo = document.getElementById("wayne").value;

function Equal(){
	var numOne = document.getElementById("rigel").value;
	var numTwo = document.getElementById("wayne").value;
	var sum = parseFloat(numOne) + parseFloat(numTwo);
	document.getElementById("OUTPUUT").innerHTML=sum;
	
}