$( document ).ready(function(){


	//var randomnum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	var numgiven = "";
	var bluenum = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
	var greennum = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
	var rednum = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
	var yellownum = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
	var total = 0;
	var wins = 0;
	var losses = 0;
	


	$("#play").on ("click", function()
	{
		var randomnum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		numgiven = randomnum;
		document.getElementById("randomnum").innerHTML = numgiven;
		total = 0;
		$("#won-lost-alert").empty();
		$("#score").empty();

	});


	function newtotal()
	{
		document.getElementById("score").innerHTML = total;
	}



	function alert()
	{
		if(total == numgiven)
		{
			document.getElementById("won-lost-alert").innerHTML = "You Won!";
			wins = wins + 1;
			document.getElementById("won-stat").innerHTML = "Wins: " + wins;
		}
		else if(total > numgiven)
		{
			document.getElementById("won-lost-alert").innerHTML = "You Lost!";
			losses = losses + 1;
			document.getElementById("lost-stat").innerHTML = "Losses: " + losses;
		}
	}
	


	$("#blue").on ("click", function()
	{
		total = bluenum + total;
		newtotal();
		alert();	
		console.log(total);
	})


	$('#green').on ('click', function()
	{
		total = greennum + total;
		newtotal();
		alert();
		console.log(total);
	})


	$('#red').on ('click', function()
	{
		total = rednum + total;
		newtotal();
		alert();
		console.log(total);
	})


	$('#yellow').on ('click', function()
	{
		total = yellownum + total;
		newtotal();
		alert();
		console.log(total);
	})
})




