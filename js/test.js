//Selecteer originele afbeelding
var img = document.getElementById("img");

//afbeeldingslocatie animatie wit
var opslaan = "img/hart/opslaan.png";
var opgeslagen = "img/hart/opgeslagen.png";
var gif = "img//hart/gif.gif";
var gifReverse = "img/hart/gifreverse.gif";

//boolean state

var state = false;
//Toggle image bron: https://stackoverflow.com/questions/39892794/toggle-image-in-pure-javascript
function animatie(){

if(state){
	//verander afbeelding
	state = false;
	img.src = gifReverse;
	setTimeout(function(){img.src = opslaan;},500);
	
	}
  else{
	  //verander afbeelding
    state = true;
	img.src = gif;
	setTimeout(function(){img.src = opgeslagen;},500);
	
  }
}

img.addEventListener("click", animatie); 