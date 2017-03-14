// RANDOM NUMBER FROM MINIMUM VALUE TO MAXIMUM VALUE //	 

function getRndColor(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// DIFFERENT COLOR RBG'S FOR GRID //

function assignColors()	{
	var r = [];
	var g = [];
	var b = [];
	var p = [];
	var q = [];
	for	( i = 4; i <= 15; i++ )	{
	r[i] = getRndColor(17, 240);
	g[i] = getRndColor(17, 240);
	b[i] = getRndColor(17, 240);
	
	var colorRandom = getRndColor( i-1, i+1 );
	var colorRandom2 = getRndColor( -i+1, -i-1 );
	
	var rnd = Math.random();
	if	( rnd < 0.5 )	{
		var diff = colorRandom;
	}
	
	if  ( rnd > 0.5 )	{
		var diff = colorRandom2;
	}
	
	p[i] = "rgb(" + r[i] + "," + g[i] + "," + b[i] + ")";
	q[i] = "rgb(" + (r[i]+diff) + "," + (g[i]+diff) + "," + (b[i]+diff) + ")";
	}
	return [p, q];
}

var assign = assignColors();
var p = assign[0];
var q = assign[1];

// TRANSFER FUNCTIONS //

function changeToFive() {
	document.getElementById('four').style.display = "none";
	document.getElementById('five').style.display = "block";
	assignRndPosFive();
}

function changeToSix()	{
	document.getElementById('five').style.display = "none";
	document.getElementById('six').style.display = "block";
	assignRndPosSix();
}

function changeToSeven()	{
	document.getElementById('six').style.display = "none";
	document.getElementById('seven').style.display = "block";
	assignRndPosSeven();
}

function changeToEight()	{
	document.getElementById('seven').style.display = "none";
	document.getElementById('eight').style.display = "block";
	assignRndPosEight();
}

function changeToNine()	{
	document.getElementById('eight').style.display = "none";
	document.getElementById('nine').style.display = "block";
	assignRndPosNine();
}

function changeToTen()	{
	document.getElementById('nine').style.display = "none";
	document.getElementById('ten').style.display = "block";
	assignRndPosTen();
}

function changeToEleven()	{
	document.getElementById('ten').style.display = "none";
	document.getElementById('eleven').style.display = "block";
	assignRndPosEleven();
}
	
function changeToTwelve()	{
	document.getElementById('eleven').style.display = "none";
	document.getElementById('twelve').style.display = "block";
	assignRndPosTwelve();
}

function changeToThirteen()	{
	document.getElementById('twelve').style.display = "none";
	document.getElementById('thirteen').style.display = "block";
	assignRndPosThirteen();
}

function changeToFourteen()	{
	document.getElementById('thirteen').style.display = "none";
	document.getElementById('fourteen').style.display = "block";
	assignRndPosFourteen();
}

function changeToFifteen()	{
	document.getElementById('fourteen').style.display = "none";
	document.getElementById('fifteen').style.display = "block";
	assignRndPosFifteen();
}

function tempWinFunction()	{
	alert('You Win!');
	location.reload();
}

// ASSIGN RANDOM COLORS, POSITIONS, AND ATTRIBUTES //

// 4X4 //

function assignRndPosFour()	{
	var rndFour = Math.ceil(Math.random() * 16);
	for( var i = 1; i <= 16; i++ ) {
	if(i==rndFour) {
	document.getElementById('cell4.' + i).style.backgroundColor = q[4];
	document.getElementById('cell4.' + i).addEventListener("click", changeToFive, true);
	document.getElementById('cell4.' + i).style.height = "100px";
	document.getElementById('cell4.' + i).style.width = "100px";
	document.getElementById('cell4.' + i).style.cssFloat = "left";
	document.getElementById('cell4.' + i).style.border = "3px solid black";
	document.getElementById('cell4.' + i).style.margin = "0px auto";
	}
	else	{
	document.getElementById('cell4.' + i).style.backgroundColor = p[4];
	document.getElementById('cell4.' + i).style.height = "100px";
	document.getElementById('cell4.' + i).style.width = "100px";
	document.getElementById('cell4.' + i).style.cssFloat = "left";
	document.getElementById('cell4.' + i).style.border = "3px solid black";
	document.getElementById('cell4.' + i).style.margin = "0px auto";
	}
	}
}

// 5X5 //

function assignRndPosFive()	{
	var rndFive = Math.ceil(Math.random() * 25);
	for( var x = 1; x <= 25; x++ ) {
	if(x==rndFive) {
	document.getElementById('cell5.' + x).style.backgroundColor = q[5];
	document.getElementById('cell5.' + x).addEventListener("click", changeToSix, true);
	document.getElementById('cell5.' + x).style.height = "100px";
	document.getElementById('cell5.' + x).style.width = "100px";
	document.getElementById('cell5.' + x).style.cssFloat = "left";
	document.getElementById('cell5.' + x).style.border = "3px solid black";
	document.getElementById('cell5.' + x).style.margin = "0px auto";
	}
	else	{
	document.getElementById('cell5.' + x).style.backgroundColor = p[5];
	document.getElementById('cell5.' + x).style.height = "100px";
	document.getElementById('cell5.' + x).style.width = "100px";
	document.getElementById('cell5.' + x).style.cssFloat = "left";
	document.getElementById('cell5.' + x).style.border = "3px solid black";
	document.getElementById('cell5.' + x).style.margin = "0px auto";
	}
	}
}

// 6X6 //

function assignRndPosSix()	{
	var rndSix = Math.ceil(Math.random() * 36);
	for( var x = 1; x <= 36; x++ ) {
	if(x==rndSix) {
	document.getElementById('cell6.' + x).style.backgroundColor = q[6];
	document.getElementById('cell6.' + x).addEventListener("click", changeToSeven, true);
	document.getElementById('cell6.' + x).style.height = "100px";
	document.getElementById('cell6.' + x).style.width = "100px";
	document.getElementById('cell6.' + x).style.cssFloat = "left";
	document.getElementById('cell6.' + x).style.border = "3px solid black";
	document.getElementById('cell6.' + x).style.margin = "0px auto";
	}
	else	{
	document.getElementById('cell6.' + x).style.backgroundColor = p[6];
	document.getElementById('cell6.' + x).style.height = "100px";
	document.getElementById('cell6.' + x).style.width = "100px";
	document.getElementById('cell6.' + x).style.cssFloat = "left";
	document.getElementById('cell6.' + x).style.border = "3px solid black";
	document.getElementById('cell6.' + x).style.margin = "0px auto";
	}
	}
}

// 7X7 //

function assignRndPosSeven()	{
	var rndSeven = Math.ceil(Math.random() * 49);
	for( var x = 1; x <= 49; x++ ) {
	if(x==rndSeven) {
	document.getElementById('cell7.' + x).style.backgroundColor = q[7];
	document.getElementById('cell7.' + x).addEventListener("click", changeToEight, true);
	document.getElementById('cell7.' + x).style.height = "100px";
	document.getElementById('cell7.' + x).style.width = "100px";
	document.getElementById('cell7.' + x).style.cssFloat = "left";
	document.getElementById('cell7.' + x).style.border = "3px solid black";
	document.getElementById('cell7.' + x).style.margin = "0px auto";
	}
	else	{
	document.getElementById('cell7.' + x).style.backgroundColor = p[7];
	document.getElementById('cell7.' + x).style.height = "100px";
	document.getElementById('cell7.' + x).style.width = "100px";
	document.getElementById('cell7.' + x).style.cssFloat = "left";
	document.getElementById('cell7.' + x).style.border = "3px solid black";
	document.getElementById('cell7.' + x).style.margin = "0px auto";
	}
	}
}

// 8X8 //

function assignRndPosEight()	{
	var rndEight = Math.ceil(Math.random() * 64);
	for( var x = 1; x <= 64; x++ ) {
	if(x==rndEight) {
	document.getElementById('cell8.' + x).style.backgroundColor = q[8];
	document.getElementById('cell8.' + x).addEventListener("click", changeToNine, true);
	document.getElementById('cell8.' + x).style.height = "100px";
	document.getElementById('cell8.' + x).style.width = "100px";
	document.getElementById('cell8.' + x).style.cssFloat = "left";
	document.getElementById('cell8.' + x).style.border = "3px solid black";
	document.getElementById('cell8.' + x).style.margin = "0px auto";
	}
	else	{
	document.getElementById('cell8.' + x).style.backgroundColor = p[8];
	document.getElementById('cell8.' + x).style.height = "100px";
	document.getElementById('cell8.' + x).style.width = "100px";
	document.getElementById('cell8.' + x).style.cssFloat = "left";
	document.getElementById('cell8.' + x).style.border = "3px solid black";
	document.getElementById('cell8.' + x).style.margin = "0px auto";
	}
	}
}

// 9X9 //

function assignRndPosNine()	{
	var rndNine = Math.ceil(Math.random() * 81);
	for( var x = 1; x <= 81; x++ ) {
	if(x==rndNine) {
	document.getElementById('cell9.' + x).style.backgroundColor = q[9];
	document.getElementById('cell9.' + x).addEventListener("click", changeToTen, true);
	document.getElementById('cell9.' + x).style.height = "100px";
	document.getElementById('cell9.' + x).style.width = "100px";
	document.getElementById('cell9.' + x).style.cssFloat = "left";
	document.getElementById('cell9.' + x).style.border = "3px solid black";
	document.getElementById('cell9.' + x).style.margin = "0px auto";
	}
	else	{
	document.getElementById('cell9.' + x).style.backgroundColor = p[9];
	document.getElementById('cell9.' + x).style.height = "100px";
	document.getElementById('cell9.' + x).style.width = "100px";
	document.getElementById('cell9.' + x).style.cssFloat = "left";
	document.getElementById('cell9.' + x).style.border = "3px solid black";
	document.getElementById('cell9.' + x).style.margin = "0px auto";
	}
	}
}

// 10X10 //

function assignRndPosTen()	{
	var rndTen = Math.ceil(Math.random() * 100);
	for( var x = 1; x <= 100; x++ ) {
	if(x==rndTen) {
	document.getElementById('cell10.' + x).style.backgroundColor = q[10];
	document.getElementById('cell10.' + x).addEventListener("click", changeToEleven, true);
	document.getElementById('cell10.' + x).style.height = "100px";
	document.getElementById('cell10.' + x).style.width = "100px";
	document.getElementById('cell10.' + x).style.cssFloat = "left";
	document.getElementById('cell10.' + x).style.border = "3px solid black";
	document.getElementById('cell10.' + x).style.margin = "0px auto";
	}
	else	{
	document.getElementById('cell10.' + x).style.backgroundColor = p[10];
	document.getElementById('cell10.' + x).style.height = "100px";
	document.getElementById('cell10.' + x).style.width = "100px";
	document.getElementById('cell10.' + x).style.cssFloat = "left";
	document.getElementById('cell10.' + x).style.border = "3px solid black";
	document.getElementById('cell10.' + x).style.margin = "0px auto";
	}
	}
}

// 11X11 //

function assignRndPosEleven()	{
	var rndEleven = Math.ceil(Math.random() * 121);
	for( var x = 1; x <= 121; x++ ) {
	if(x==rndEleven) {
	document.getElementById('cell11.' + x).style.backgroundColor = q[11];
	document.getElementById('cell11.' + x).addEventListener("click", changeToTwelve, true);
	document.getElementById('cell11.' + x).style.height = "100px";
	document.getElementById('cell11.' + x).style.width = "100px";
	document.getElementById('cell11.' + x).style.cssFloat = "left";
	document.getElementById('cell11.' + x).style.border = "3px solid black";
	document.getElementById('cell11.' + x).style.margin = "0px auto";
	}
	else	{
	document.getElementById('cell11.' + x).style.backgroundColor = p[11];
	document.getElementById('cell11.' + x).style.height = "100px";
	document.getElementById('cell11.' + x).style.width = "100px";
	document.getElementById('cell11.' + x).style.cssFloat = "left";
	document.getElementById('cell11.' + x).style.border = "3px solid black";
	document.getElementById('cell11.' + x).style.margin = "0px auto";
	}
	}
}

// 12X12 //

function assignRndPosTwelve()	{
	var rndTwelve = Math.ceil(Math.random() * 144);
	for( var x = 1; x <= 144; x++ ) {
	if(x==rndTwelve) {
	document.getElementById('cell12.' + x).style.backgroundColor = q[12];
	document.getElementById('cell12.' + x).addEventListener("click", changeToThirteen, true);
	document.getElementById('cell12.' + x).style.height = "100px";
	document.getElementById('cell12.' + x).style.width = "100px";
	document.getElementById('cell12.' + x).style.cssFloat = "left";
	document.getElementById('cell12.' + x).style.border = "3px solid black";
	document.getElementById('cell12.' + x).style.margin = "0px auto";
	}
	else	{
	document.getElementById('cell12.' + x).style.backgroundColor = p[12];
	document.getElementById('cell12.' + x).style.height = "100px";
	document.getElementById('cell12.' + x).style.width = "100px";
	document.getElementById('cell12.' + x).style.cssFloat = "left";
	document.getElementById('cell12.' + x).style.border = "3px solid black";
	document.getElementById('cell12.' + x).style.margin = "0px auto";
	}
	}
}

// 13X13 //

function assignRndPosThirteen()	{
	var rndThirteen = Math.ceil(Math.random() * 169);
	for( var x = 1; x <= 169; x++ ) {
	if(x==rndThirteen) {
	document.getElementById('cell13.' + x).style.backgroundColor = q[13];
	document.getElementById('cell13.' + x).addEventListener("click", changeToFourteen, true);
	document.getElementById('cell13.' + x).style.height = "100px";
	document.getElementById('cell13.' + x).style.width = "100px";
	document.getElementById('cell13.' + x).style.cssFloat = "left";
	document.getElementById('cell13.' + x).style.border = "3px solid black";
	document.getElementById('cell13.' + x).style.margin = "0px auto";
	}
	else	{
	document.getElementById('cell13.' + x).style.backgroundColor = p[13];
	document.getElementById('cell13.' + x).style.height = "100px";
	document.getElementById('cell13.' + x).style.width = "100px";
	document.getElementById('cell13.' + x).style.cssFloat = "left";
	document.getElementById('cell13.' + x).style.border = "3px solid black";
	document.getElementById('cell13.' + x).style.margin = "0px auto";
	}
	}
}

// 14X14 //

function assignRndPosFourteen()	{
	var rndFourteen = Math.ceil(Math.random() * 196);
	for( var x = 1; x <= 196; x++ ) {
	if(x==rndFourteen) {
	document.getElementById('cell14.' + x).style.backgroundColor = q[14];
	document.getElementById('cell14.' + x).addEventListener("click", changeToFifteen, true);
	document.getElementById('cell14.' + x).style.height = "100px";
	document.getElementById('cell14.' + x).style.width = "100px";
	document.getElementById('cell14.' + x).style.cssFloat = "left";
	document.getElementById('cell14.' + x).style.border = "3px solid black";
	document.getElementById('cell14.' + x).style.margin = "0px auto";
	}
	else	{
	document.getElementById('cell14.' + x).style.backgroundColor = p[14];
	document.getElementById('cell14.' + x).style.height = "100px";
	document.getElementById('cell14.' + x).style.width = "100px";
	document.getElementById('cell14.' + x).style.cssFloat = "left";
	document.getElementById('cell14.' + x).style.border = "3px solid black";
	document.getElementById('cell14.' + x).style.margin = "0px auto";
	}
	}
}

// 15X15 //

function assignRndPosFifteen()	{
	var rndFifteen = Math.ceil(Math.random() * 225);
	for( var x = 1; x <= 225; x++ ) {
	if(x==rndFifteen) {
	document.getElementById('cell15.' + x).style.backgroundColor = q[15];
	document.getElementById('cell15.' + x).addEventListener("click", tempWinFunction, true);
	document.getElementById('cell15.' + x).style.height = "100px";
	document.getElementById('cell15.' + x).style.width = "100px";
	document.getElementById('cell15.' + x).style.cssFloat = "left";
	document.getElementById('cell15.' + x).style.border = "3px solid black";
	document.getElementById('cell15.' + x).style.margin = "0px auto";
	}
	else	{
	document.getElementById('cell15.' + x).style.backgroundColor = p[15];
	document.getElementById('cell15.' + x).style.height = "100px";
	document.getElementById('cell15.' + x).style.width = "100px";
	document.getElementById('cell15.' + x).style.cssFloat = "left";
	document.getElementById('cell15.' + x).style.border = "3px solid black";
	document.getElementById('cell15.' + x).style.margin = "0px auto";
	}
	}
}

function beginGame()	{
	
	//	HIDE FRONT PAGE ELEMENTS //
	
	document.getElementById('animation').style.visibility = "hidden";
	document.getElementById('animation2').style.visibility = "hidden";
	document.getElementById('text').style.visibility = "hidden";
	document.getElementById('four').style.display = "block";
	
	// ASSIGN A RANDOM COLOR POSITION //
	
	assignRndPosFour();
}