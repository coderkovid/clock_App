function clock() {
	var hour = new Date().getHours();
	var min = new Date().getMinutes();
	var sec = new Date().getSeconds();

	if (hour < 10){
		hour = "0" + hour
	}
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}

	document.getElementById('hour').innerHTML = hour + " : ";
	document.getElementById('min').innerHTML = min + " : ";
	document.getElementById('sec').innerHTML = sec;
}

setInterval(clock, 500);