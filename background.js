$(document).ready(function() {
	var chance = Math.floor(Math.random() * 100);
	if(chance == 1 || chance == 2 || chance == 3 || chance == 4 || chance == 5 || chance == 6 || chance == 7 || chance == 8 || chance == 9 || chance == 10 || chance == 11 || chance == 12 || chance == 13 || chance == 14 || chance == 15 || chance == 16 || chance == 17 || chance == 18 || chance == 19 || chance == 20 || chance == 21 || chance == 22 || chance == 23 || chance == 24 || chance == 25 || chance == 26 || chance == 27 || chance == 28 || chance == 29 || chance == 30 || chance == 31 || chance == 32 || chance == 33 || chance == 34 || chance == 35 || chance == 36 || chance == 37 || chance == 38 || chance == 39 || chance == 40 || chance == 41 || chance == 42 || chance == 43 || chance == 44 || chance == 45 || chance == 46 || chance == 47 || chance == 48 || chance == 49 || chance == 50) {
		cenafy();
	}
});

var generateHTML = function() {
	var html = "<video autoplay loop style='height: 100vh; width: 100vw'><source src='https://raw.githubusercontent.com/martinpwner/JCena/master/cena.webm' type='video/webm'><source src='https://raw.githubusercontent.com/martinpwner/JCena/master/cena.mp4' type='video/mp4'></video>";
	return html;
};

var cenafy = function() {
	setTimeout(function() { // Wait 3 seconds before cenafying
		var html = generateHTML();
		$('body').html(html);
		document.body.style.backgroundColor = "black";
		setTimeout(function() { // Wait 20 seconds for cena to finish
			window.location.replace(document.URL);
		}, 20000);
	}, 3000);
};
