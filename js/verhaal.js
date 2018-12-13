<<<<<<< HEAD
//Selecteer originele afbeelding en knop
var img = document.querySelector('button:nth-of-type(3) img');
var button =  document.querySelector('button:nth-of-type(3)');

//afbeeldingslocatie animatie wit
var opslaan = "img/hart/opslaan.png";
var opgeslagen = "img/hart/opgeslagen.png";
var gif = "img//hart/gif.gif";
var gifReverse = "img/hart/gifreverse.gif";

//boolean state
var state = false;

//popup element maken en text toegoeven
var popUp = document.createElement('p');
var pijl = document.createElement('div');

var toegevoegd = document.createTextNode('"Managerstaal" is toegevoegd aan je favorieten');

var verwijderd = document.createTextNode('"Managerstaal" is verwijderd uit je favorieten');

//waar we het aangemaakte element later terugvinden;
var popUpLocatie = document.querySelector('body > div');
var pijlLocatie = document.querySelector('body > p'); 


//document.querySelector('body').appendChild(popUp);
//document.querySelector('body').appendChild(pijl);
	//popup


=======
// JavaScript Document
var button = document.querySelector('button:nth-of-type(3)');
var buttonImage = document.querySelector('button:nth-of-type(3) img').src;
>>>>>>> parent of 141bec3... microinteractie werkt!

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