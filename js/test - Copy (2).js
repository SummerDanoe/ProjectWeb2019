//Selecteer originele afbeelding
var img = document.getElementById("img");

//afbeeldingslocatie animatie wit
var opslaan = "img/hart/opslaan.png";
var opgeslagen = "img/hart/opgeslagen.png";
var gif = "img//hart/gif.gif";
var gifReverse = "img/hart/gifreverse.gif";

//afbeeldingslocatie animatie blauw
var opslaanBlauw = "img/hart/opslaanblauw.png";
var opgeslagenBlauw = "img/hart/opgeslagenblauw.png";
var gifBlauw = "img//hart/gifblauw.gif";
var gifReverseBlauw = "img/hart/gifreverseblauw.gif";
//boolean state
var state = false;




function getSize(){
//https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 16;
console.log(width + " rem");
 if (width < 45){
	 img.addEventListener("click", wit);
 }
 if ( width >= 45){
	img.addEventListener("click", blauw); 
 }
}

setInterval(getSize,1000)

img.addEventListener("click", wit);

//Toggle image bron: https://stackoverflow.com/questions/39892794/toggle-image-in-pure-javascript

function wit(){
	img.src = opslaan;
	if(state){
	state = false;
	img.src = gifReverse;
	setTimeout(function(){img.src = opslaan;},500);


	}
  else{
    state = true;
	img.src = gif;
	setTimeout(function(){img.src = opgeslagen;},500);
	
  }
}

function blauw(){
	img.src = opslaanBlauw;
	if(state){
	state = false;
	img.src = gifReverseBlauw;
	setTimeout(function(){img.src = opslaanBlauw;},500);


	}
  else{
    state = true;
	img.src = gifBlauw;
	setTimeout(function(){img.src = opgeslagenBlauw;},500);
	
  }
}



//tabletSize();


//++++++++++++++++++++++++++++++++++++++++++++

/*var opslaan = "img/hart/opslaan.png";
var opgeslagen = "img/hart/opgeslagen.png";
var gif = "img//hart/gif.gif";
var gifReverse = "img/hart/gifreverse.gif";
var state = false;
var img = document.getElementById("img");
*/
//https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
/*var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 16;
console.log(width + " rem");


img.addEventListener("click", test);*/

//Toggle image bron: https://stackoverflow.com/questions/39892794/toggle-image-in-pure-javascript
/*
function test(){
	if(state){
	state = false;
	img.src = gifReverse;
	setTimeout(function(){img.src = opslaan;},500);


	}
  else{
    state = true;
	img.src = gif;
	setTimeout(function(){img.src = opgeslagen;},500);
	
  }
}

function tabletSize(){
	
	if(width >= 45){
		alert("hallo");
	}

}*/

