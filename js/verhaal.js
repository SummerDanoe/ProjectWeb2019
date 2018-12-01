// JavaScript Document
var button = document.querySelector('button:nth-of-type(3)');
var buttonImage = document.querySelector('button:nth-of-type(3) img').src;

/*function toggleImage() {
	
	if (buttonImage.indexOf('opslaan.png')!=-1) {
		document.querySelector('button:nth-of-type(3) img').src  = 'img/opgeslagen.png';
        }
	else {
		document.querySelector('button:nth-of-type(3) img').src = 'img/opslaan.png';
       }

}*/

function toggleImage() {
	
	if (buttonImage.indexOf('opslaan.png')!=-1) {
		document.querySelector('button:nth-of-type(3) img').src  = 'img/opslaanwit.gif';
		setTimeout(200);
		document.querySelector('button:nth-of-type(3) img').src  = 'img/opgeslagen.png';
        }
	else {
		document.querySelector('button:nth-of-type(3) img').src = 'img/opslaan.png';
       }
}
button.addEventListener("click", toggleImage);