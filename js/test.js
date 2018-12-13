var opslaan = "img/opslaan.png";
var opgeslagen = "img/opgeslagen.png";
var gif = "img/gif.gif";
var gifReverse = "img/gifreverse.gif";
var state = false;
var img = document.getElementById("img");

	img.addEventListener("click", test);

//Toggle image bron: https://stackoverflow.com/questions/39892794/toggle-image-in-pure-javascript

/*function test(){
	if(state){
	state = false;
	img.src = gif;
	setTimeout(function(){img.src = opgeslagen;},500);

	}
  else{
    state = true;
	img.src = gifReverse;
	setTimeout(function(){img.src = opslaan;},500);
  }
}*/
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