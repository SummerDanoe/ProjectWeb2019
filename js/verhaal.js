//Selecteer originele afbeelding en knop
var img = document.querySelector('button img');
var button =  document.querySelector('button');

//afbeeldingslocatie animatie wit
var opslaan = "img/hart/opslaan.png";
var opgeslagen = "img/hart/opgeslagen.png";
var gif = "img//hart/gif.gif";
var gifReverse = "img/hart/gifreverse.gif";

//boolean state
var state = false;

//popup element maken en text toegoeven
//bron:https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom
var popUp = document.createElement('p');
var pijl = document.createElement('div');

//textuele inhoud van popups
var toegevoegd = document.createTextNode('"Managerstaal" is toegevoegd aan je opgeslagen verhalen');
var verwijderd = document.createTextNode('"Managerstaal" is verwijderd uit je opgeslagen verhalen');

//Toggle image bron: https://stackoverflow.com/questions/39892794/toggle-image-in-pure-javascript
function animatie(){

if(state){
//verander afbeelding
	state = false;
	img.src = gifReverse;
	setTimeout(function(){img.src = opslaan;},500);
	
//elementen aanmaken
	document.querySelector('body').appendChild(popUp);
	document.querySelector('body').appendChild(pijl);
	popUp.appendChild(verwijderd);
	
//elementen verwijderen 
	setTimeout(function(){
	popUp.parentNode.removeChild(popUp);
	verwijderd.parentNode.removeChild(verwijderd);
	pijl.parentNode.removeChild(pijl);
	},3000);
  }
	

  else{
	  
//verander afbeelding
    	state = true;
	img.src = gif;
	setTimeout(function(){
	img.src = opgeslagen;},500);
	  
//elementen aanmaken
	document.querySelector('body').appendChild(popUp);
	document.querySelector('body').appendChild(pijl);
	popUp.appendChild(toegevoegd);
	  
//elementen verwijderen 
	setTimeout(function(){
	popUp.parentNode.removeChild(popUp);
	toegevoegd.parentNode.removeChild(toegevoegd);
	pijl.parentNode.removeChild(pijl);
	},3000);
  }
}

button.addEventListener("click", animatie); 