// Declaring Global Variables //

var time=0;
var score=0;
var level=3;
var array=0;

// random number from 0-255 //	 

	function getRndColor(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	var Random = Math.random()*20;
	var r = getRndColor(0, 255);
    var g = getRndColor(0, 255);
   	var b = getRndColor(0, 255);
	var p = "rgb(" + r + "," + g + "," + b + ")";
	var q = "rgb(" + (r+10) + "," + (g+10) + "," + (b-10) + ")";
	
// ASSIGN RANDOM COLORS AND RANDOM POSITIONS //

function assignRndPosFour()	{
		var rnd = Math.random()*256;
		if	(rnd<16)	{
			document.getElementById('cell1').style.backgroundColor = q;
			document.getElementById('cell1').addEventListener("click", changeToFive, true); 
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=16 && rnd<32)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = q;
			document.getElementById('cell2').addEventListener("click", changeToFive, true);
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=32 && rnd<48)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = q;
			document.getElementById('cell3').addEventListener("click", changeToFive, true); 
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=48 && rnd<64)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = q;
			document.getElementById('cell4').addEventListener("click", changeToFive, true); 
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=64 && rnd<80)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = q;
			document.getElementById('cell5').addEventListener("click", changeToFive, true);
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=80 && rnd<96)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = q;
			document.getElementById('cell6').addEventListener("click", changeToFive, true);
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=96 && rnd<112)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = q;
			document.getElementById('cell7').addEventListener("click", changeToFive, true); 
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=112 && rnd<128)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = q;
			document.getElementById('cell8').addEventListener("click", changeToFive, true); 
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=128 && rnd<144)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = q;
			document.getElementById('cell9').addEventListener("click", changeToFive, true); 
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=144 && rnd<160)		{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = q;
			document.getElementById('cell10').addEventListener("click", changeToFive, true); 
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=160 && rnd<176)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = q;
			document.getElementById('cell11').addEventListener("click", changeToFive, true); 
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=176 && rnd<192)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = q;
			document.getElementById('cell12').addEventListener("click", changeToFive, true); 
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=192 && rnd<208)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = q;
			document.getElementById('cell13').addEventListener("click", changeToFive, true); 
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=208 && rnd<224)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = q;
			document.getElementById('cell14').addEventListener("click", changeToFive, true); 
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=224 && rnd<240)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = q;
			document.getElementById('cell15').addEventListener("click", changeToFive, true); 
			document.getElementById('cell16').style.backgroundColor = p;
		}
		if (rnd>=240 && rnd<256)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = q;
			document.getElementById('cell16').addEventListener("click", changeToFive, true); 
		}
	}
	function assignRndPosFive	{
		var rnd = Math.random()*625;
		if	(rnd<25)	{
			document.getElementById('cell1').style.backgroundColor = q;
			document.getElementById('cell1').addEventListener("click", changeToSix, true); 
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=25 && rnd<50)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = q;
			document.getElementById('cell2').addEventListener("click", changeToSix, true);
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=50 && rnd<75)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = q;
			document.getElementById('cell3').addEventListener("click", changeToSix, true); 
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=75 && rnd<100)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = q;
			document.getElementById('cell4').addEventListener("click", changeToSix, true); 
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=100 && rnd<125)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = q;
			document.getElementById('cell5').addEventListener("click", changeToSix, true);
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=125 && rnd<150)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = q;
			document.getElementById('cell6').addEventListener("click", changeToSix, true);
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=150 && rnd<175)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = q;
			document.getElementById('cell7').addEventListener("click", changeToSix, true); 
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=175 && rnd<200)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = q;
			document.getElementById('cell8').addEventListener("click", changeToSix, true); 
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=200 && rnd<225)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = q;
			document.getElementById('cell9').addEventListener("click", changeToSix, true); 
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=225 && rnd<250)		{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = q;
			document.getElementById('cell10').addEventListener("click", changeToSix, true); 
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=250 && rnd<275)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = q;
			document.getElementById('cell11').addEventListener("click", changeToSix, true); 
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=275 && rnd<300)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = q;
			document.getElementById('cell12').addEventListener("click", changeToSix, true); 
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=300 && rnd<325)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = q;
			document.getElementById('cell13').addEventListener("click", changeToSix, true); 
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=325 && rnd<350)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = q;
			document.getElementById('cell14').addEventListener("click", changeToSix, true); 
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=350 && rnd<375)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = q;
			document.getElementById('cell15').addEventListener("click", changeToSix, true); 
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=375 && rnd<400)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = q;
			document.getElementById('cell16').addEventListener("click", changeToSix, true);
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=400 && rnd<425)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = q;
			document.getElementById('cell17').addEventListener("click", changeToSix, true);
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=425 && rnd<450)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = q;
			document.getElementById('cell18').addEventListener("click", changeToSix, true);
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=450 && rnd<475)		{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = q;
			document.getElementById('cell19').addEventListener("click", changeToSix, true);
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=475 && rnd<500)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = q;
			document.getElementById('cell20').addEventListener("click", changeToSix, true);
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;		
		}
		if (rnd>=500 && rnd<525)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = q;
			document.getElementById('cell21').addEventListener("click", changeToSix, true);
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=525 && rnd<550)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = q;
			document.getElementById('cell22').addEventListener("click", changeToSix, true);
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=550 && rnd<575)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = q;
			document.getElementById('cell23').addEventListener("click", changeToSix, true);
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=575 && rnd<600)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = q;
			document.getElementById('cell24').addEventListener("click", changeToSix, true);
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rnd>=600 && rnd<625)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = q;
			document.getElementById('cell25').addEventListener("click", changeToSix, true);
		}
	}
	
function beginGame()	{
	"use strict";
	//	HIDE FRONT PAGE ELEMENTS //
	
	document.getElementById('animation').style.visibility = "hidden";
	document.getElementById('animation2').style.visibility = "hidden";
	document.getElementById('text').style.visibility = "hidden";
	document.getElementById('four').style.display = "block";
	
	// ASSIGN A RANDOM COLOR POSITION //
	
	assignRndPosFour();
}

// TRANSFER FUNCTIONS //

function changeToFive() {
	document.getElementById('four').style.display = "none";
	document.getElementById('five').style.display = "block";
}







/*

thoughts: assign random color to grid of buttons

replace one button in a different position with math.random

make sure that different button has all the same properties except onClick and color

have a level var that keeps going up to 20 and increases the grid

*/