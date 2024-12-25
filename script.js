


let icon = document.getElementById('icon');
let navbar = document.getElementById('navbar');



if (localStorage.getItem('theme') == null) {
	localStorage.setItem('theme', 'light');
}
let localData = localStorage.getItem('theme');


if (localData == 'light') {
	icon.src = 'moon.png';
	document.body.classList.remove('navbar-dark');
}

else if (localData == 'dark') {
	icon.src = 'moon.png';
	document.body.classList.add('navbar-dark');
}

icon.onclick = function () {

	document.body.classList.toggle('navbar-dark');
	if (document.body.classList.contains('navbar-dark')) {
		icon.src = 'sunny.png';
		navbar.classList.add('navbar-border');
		localStorage.setItem('theme', 'dark');
	} else {
		icon.src = 'moon.png';
		navbar.classList.remove('navbar-border');
		localStorage.setItem('theme', 'light');
	}
}