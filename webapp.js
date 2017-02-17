// Declaring Global Variables //

var time=0;
var score=0;
var level=3;
var array=0;

// JavaScript Document

// random number from 0-255

function getRndColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function assignRndColor() {

}
function beginGame()	{
	document.getElementById('animation').style.visibility = "hidden";
	document.getElementById('animation2').style.visibility = "hidden";
	document.getElementById('text').style.visibility = "hidden";
	document.getElementById('button1').style.backgroundColor = getRndColor();
	document.getElementById('button2').style.backgroundColor = getRndColor();
    document.getElementById('button3').style.backgroundColor = getRndColor();
}
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


/*
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





/*

thoughts: assign random color to grid of buttons

replace one button in a different position with math.random

make sure that different button has all the same properties except onClick and color

have a level var that keeps going up to 20 and increases the grid

*/