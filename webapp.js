// JavaScript Document

// random number from 0-255
function getRndInteger() {
	return Math.floor(Math.random() * 256);
}

function getRndColor() {
	var r = getRndInteger(); // 0 = 00
	var g = getRndInteger(); // 255 = FF
	var b = getRndInteger(); // 30 = 1f
	
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);
	
	return "#" + r + g + b;
}