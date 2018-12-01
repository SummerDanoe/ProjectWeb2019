var opslaan = "img/opslaan.png";
var opgeslagen = "img/opgeslagen.png";
var state = false;
var opslaanImg = document.getElementById("img");

	opslaanImg.addEventListener("click", imgToggle)

function imgToggle(){
	if(state){
  	img.src = opgeslagen;
    state = false;
  }
  else{
  	img.src = opslaan;
    state = true;
  }
}