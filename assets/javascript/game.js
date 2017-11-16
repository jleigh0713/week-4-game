
var randomnum = [];
var numgiven ="";

function startGame(){

	var numgiven = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	    
	randomnum.push(numgiven);

	console.log(numgiven);

	document.getElementById("randomnum").innerHTML = numgiven;

}	

