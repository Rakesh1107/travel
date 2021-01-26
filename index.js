const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const exploreButton = document.querySelector('.explore');

menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('active');
	showcase.classList.toggle('active');
})

exploreButton.addEventListener('click', () => {
	var music1 = new Audio('Short Guitar Clip - Audionautix.mp3');
	music1.play();
})

