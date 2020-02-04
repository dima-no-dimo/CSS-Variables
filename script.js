'use strict'

const inputs = document.querySelectorAll('input');
const stockImg = document.getElementById('stock');
const container = document.getElementById('imgContainer');
const button = document.querySelectorAll('button');


let deg = 0;

function flip() {
	document.documentElement.style.setProperty(`--${this.name}`, `${deg+=90}deg`)
}

button.forEach(elem => elem.addEventListener('click', flip));


function newValue() {
	let units = this.dataset.sizing;
	document.documentElement.style.setProperty(`--${this.name}`, this.value + units);
}

inputs.forEach(elem => elem.addEventListener('change', newValue));
inputs.forEach(elem => elem.addEventListener('mousemove', newValue));


function handleFileSelect(evt) {
	let files = evt.target.files;

	let output = [];
	for(let i = 0, f; f = files[i]; i++) {

		if(!f.type.match('image.*')) continue

		let reader = new FileReader();

		reader.onload = (function(theFile) {
			return function(e) {
				container.innerHTML = `<img class="changeble" src="${e.target.result}"/>`;

			}
		})(f);
		reader.readAsDataURL(f);
	}
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);


