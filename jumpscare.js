/*const LOBSTER_JUMPSCARE = new Audio("lobsterSounds.mp3");

function playAudio() {
	LOBSTER_JUMPSCARE.play();
}

playAudio();
*/

let lobsters = document.querySelectorAll('img');
let currentSpeed = 6;

let button = document.getElementById("button");


function cow() {
	currentSpeed /= 2;
	for (let i = 0; i < lobsters.length; i++) {
		lobsters[i].style.animationDuration = currentSpeed + 's';
	} 
}
button.addEventListener('click', cow);


