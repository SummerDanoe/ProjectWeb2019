img.src = gif;img.src = gif;img.src = gif;img.src = gif;img.src = gif;img.src = gif;var opslaan = "img/opslaan.png";
var opgeslagen = "img/opgeslagen.png";
var gif = "img/opslaanwit.gif";
var state = false;
var img = document.getElementById("img");

	img.addEventListener("click", test);
	//img.addEventListener("click", imgToggle);

/*function microInteractie(){
	animatie();
	//setTimeout(reset, 500);
	setTimeout(imgToggle, 500);
}*/

/*function animatie(){
	img.src = gif;
}*/
function opgeslagenTimeout(){
	img.src = opgeslagen;
}
/*function reset(){
	img.src = opgeslagen;
}*/
//Toggle image bron: https://stackoverflow.com/questions/39892794/toggle-image-in-pure-javascript
/*function imgToggle(){
	if(state){
	state = false;
  	img.src = opgeslagen;
    
  }
  else{
    state = true;
	img.src = opslaan;
  }
}*/

function test(){
	if(state){
	state = false;
	img.src = gif;
	setTimeout(opgeslagenTimeout,500);
	}
  else{
    state = true;
	img.src = opslaan;
  }
}