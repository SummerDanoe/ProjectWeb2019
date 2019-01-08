//Selecteer originele afbeelding en knop
var img = document.querySelector('button img');
var button =  document.querySelector('button');

//afbeeldingslocatie animatie
var maan = "img/darkmode.png";
var zon = "img/zon.png";
var maanzon = "img/maanzon.gif";
var zonmaan = "img/zonmaan.gif";

//boolean state
var state = false;

//Locatie van darkmode stylesheet
//https://guides.codechewing.com/js/disable-enable-stylesheet-javascript
var stylesheet = document.styleSheets[3];

//disable stylesheet als default
stylesheet.disabled = true;

//Toggle image bron: https://stackoverflow.com/questions/39892794/toggle-image-in-pure-javascript
function animatie(){

if(state){
//verander afbeelding
	state = false;
	img.src = zonmaan;
	setTimeout(function(){img.src = maan;},600);
// darkmode stylesheet verwijderen
	stylesheet.disabled = true;
  }
	

  else{
//verander afbeelding
    	state = true;
	img.src = maanzon;
	setTimeout(function(){
	img.src = zon;},500);
// darkmode stylesheet toevoegen
	stylesheet.disabled = false;
  }
}

button.addEventListener("click", animatie); 