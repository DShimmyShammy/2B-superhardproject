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
	
// ASSIGN A RANDOM COLOR //

function assignRndPos()	{
		var rnd = Math.random()*256;
		if	(rnd<16)	{
			document.getElementById('cell1').style.backgroundColor = q;
			document.getElementById('cell1').addEventListener("click", thingy, true); 
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
			document.getElementById('cell2').addEventListener("click", thingy, true);
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
			document.getElementById('cell3').addEventListener("click", thingy, true); 
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
			document.getElementById('cell4').addEventListener("click", thingy, true); 
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
			document.getElementById('cell5').addEventListener("click", thingy, true);
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
			document.getElementById('cell6').addEventListener("click", thingy, true);
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
			document.getElementById('cell7').addEventListener("click", thingy, true); 
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
			document.getElementById('cell8').addEventListener("click", thingy, true); 
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
			document.getElementById('cell9').addEventListener("click", thingy, true); 
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
			document.getElementById('cell10').addEventListener("click", thingy, true); 
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
			document.getElementById('cell11').addEventListener("click", thingy, true); 
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
			document.getElementById('cell12').addEventListener("click", thingy, true); 
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
			document.getElementById('cell13').addEventListener("click", thingy, true); 
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
			document.getElementById('cell14').addEventListener("click", thingy, true); 
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
			document.getElementById('cell15').addEventListener("click", thingy, true); 
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
			document.getElementById('cell16').addEventListener("click", thingy, true); 
		}
	}
	
function beginGame()	{
	"use strict";
	//	HIDE FRONT PAGE ELEMENTS //
	
	document.getElementById('animation').style.visibility = "hidden";
	document.getElementById('animation2').style.visibility = "hidden";
	document.getElementById('text').style.visibility = "hidden";
	document.getElementById('wrapper').style.display = "block";
	
	// ASSIGN A RANDOM COLOR POSITION //
	
	assignRndPos();
}

// win function //

function thingy() {
	alert("You issssssssss the champion!!");
	location.reload();
}

/*
function appendChild()	{
	var btn1 = document.createElement('button');
	var btn2 = document.createElement('button');
	var btn3 = document.createElement('button');
	var btn4 = document.createElement('button');
	var btn5 = document.createElement('button');
	var btn6 = document.createElement('button');
	var btn7 = document.createElement('button');
	var btn8 = document.createElement('button');
	var btn9 = document.createElement('button');
	btn1.setAttribute("id", "btn1");
	btn2.setAttribute("id", "btn2");
	btn3.setAttribute("id", "btn3");
	btn4.setAttribute("id", "btn4");
	btn5.setAttribute("id", "btn5");
	btn6.setAttribute("id", "btn6");
	btn7.setAttribute("id", "btn7");
	btn8.setAttribute("id", "btn8");
	btn9.setAttribute("id", "btn9");
}
document.getElementById('container').style.display = "block";
	document.getElementById('button1').appendChild(btn1);
	document.getElementById('button1').appendChild(btn2);
	document.getElementById('button1').appendChild(btn3);
	document.getElementById('button2').appendChild(btn4);
	document.getElementById('button2').appendChild(btn5);
	document.getElementById('button2').appendChild(btn6);
	document.getElementById('button3').appendChild(btn7);
	document.getElementById('button3').appendChild(btn8);
	document.getElementById('button3').appendChild(btn9);



    function genBtns(v){ 
      var e = document.body;
      for(var level = 0; level < v; level++){ 
        var row = document.createElement("button"); 
        row.className = "row";
        for(var x = 1; x <= v; x++){ 
            var cell = document.createElement("button"); 
            cell.className = "gridsquare"; 
            cell.innerText = (level * v) + x;
            row.appendChild(cell); 
        } 
        e.appendChild(row); 
      } 
      document.getElementById("code").innerText = e.innerHTML;

    }
}







thoughts: assign random color to grid of buttons

replace one button in a different position with math.random

make sure that different button has all the same properties except onClick and color

have a level var that keeps going up to 20 and increases the grid

*/