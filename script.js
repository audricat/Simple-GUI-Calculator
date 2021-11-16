function btn(n) {
	document.getElementById('dispResult').innerHTML += n;
}
function clr() {
	document.getElementById('dispResult').innerHTML = '';
}
function solve() {
	let x = document.getElementById('dispResult').innerHTML;
	let y = eval(x);

	document.getElementById('dispResult').innerHTML = y;
}

function back() {
	var value = document.getElementById("dispResult").innerHTML;
	document.getElementById("dispResult").innerHTML = value.substr(0, value.length - 1);
}