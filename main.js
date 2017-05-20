console.log("Hello");
var num1 = document.getElementById("input1");
var num2 = document.getElementById("input2");
var ade = document.getElementById("btn1");
var sub = document.getElementById("btn2");
var mul = document.getElementById("btn3");
var dub = document.getElementById("btn4");
var displayoutput = document.getElementById("displayoutput");


ade.addEventListener("click", sum);
sub.addEventListener("click", subtract);
mul.addEventListener("click", multiply);
dub.addEventListener("click", divide);


function sum(){
	var sum = Number(num1.value) + Number(num2.value);
		console.log(sum);
	displayoutput.innerHTML = sum;
}

function subtract(){
	var subtract = Number(num1.value) - Number(num2.value);
		console.log(subtract);
	displayoutput.innerHTML = subtract;
}


function multiply(){
	var multiplication = Number(num1.value) * Number(num2.value);
	//console.log(num1.value * num2.value);
	console.log(multiplication);
	displayoutput.innerHTML = multiplication;
}


function divide(){
	var divide = Number(num1.value) / Number(num2.value);
	console.log(divide);
	displayoutput.innerHTML = divide;
}

