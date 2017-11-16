
var randomnum = [];
var numgiven = "";
var bluenum = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
var greennum = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
var rednum = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
var yellownum = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
var total = "";

function startGame()
{
	var numgiven = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	    
	randomnum.push(numgiven);

	console.log(randomnum);

	document.getElementById("randomnum").innerHTML = numgiven;
}	

$('#blue').on ('click', function()
{
	document.getElementById("score").innerHTML = bluenum;
	console.log(total);
})



