$( document ).ready(function(){


	//var randomnum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	var numGiven = "";
	var blueNum = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
	var greenNum = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
	var redNum = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
	var yellowNum = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
	var total = 0;
	var wins = 0;
	var losses = 0;
	


	$("#play").on ("click", function()
	{
		var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		numGiven = randomNum;
		document.getElementById("randomNum").innerHTML = numGiven;
		total = 0;
		$("#won-lost-alert").empty();
		$("#score").empty();

	});


	function newTotal()
	{
		document.getElementById("score").innerHTML = total;
	}



	function alert()
	{
		if(total == numGiven)
		{
			document.getElementById("won-lost-alert").innerHTML = "You Won!";
			wins++;
			document.getElementById("won-stat").innerHTML = "Wins: " + wins;
		}
		else if(total > numGiven)
		{
			document.getElementById("won-lost-alert").innerHTML = "You Lost!";
			losses++;
			document.getElementById("lost-stat").innerHTML = "Losses: " + losses;
		}
	}
	


	$("#blue").on ("click", function()
	{
		total = blueNum + total;
		newTotal();
		alert();	
		console.log(total);
	})


	$('#green').on ('click', function()
	{
		total = greenNum + total;
		newTotal();
		alert();
		console.log(total);
	})


	$('#red').on ('click', function()
	{
		total = redNum + total;
		newTotal();
		alert();
		console.log(total);
	})


	$('#yellow').on ('click', function()
	{
		total = yellowNum + total;
		newTotal();
		alert();
		console.log(total);
	})
})




