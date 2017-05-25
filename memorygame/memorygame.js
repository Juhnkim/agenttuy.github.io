var randomLoc=["", "", "", "", "", "", "", "" , "", 
				"", "", "", "", "", "", "", "" , ""];
var firstPicChosen = false;
var secondPicChosen = false;
				
function startGame(){
  randomizeImages(getRandomNum(10, 1));
  //test to see images placed
  placeImg();
}

function makeMove(id){
  document.getElementById(id +"img").src="";
}

function getRandomNum(max, min){
  return Math.floor((Math.random()*max)*min);
}

var pics=["images/Boats.jpg",
          "images/Castle.jpg",
          "images/City.jpg",
          "images/Cliff.jpg",
          "images/Coral.jpg",
          "images/daniel.jpg",
          "images/Earth.jpg",
          "images/Harbor.jpg",
          "images/Harrison.jpg",
          "images/Heart.jpg",
          "images/Hotel.jpg",
          "images/Jessy.jpg",
          "images/Mountain.jpg",
          "images/Plants.jpg",
          "images/S.jpg",
          "images/Star.jpg",
          "images/Turtle.jpg",
          "images/Wave.jpg"
         ];



function randomizeImages(mixCount){
	var num = 0;
	var num2 = 0;
  for(var i=0; i<mixCount; i++){
	  num=getRandomNum(17, 1) -1;
	  num2=getRandomNum(17, 1) -1;
	  var temp=pics[num2]
	  //alert(temp);
	  pics[num2]=pics[num];
	  pics[num]=temp;
  }
  
  for(var j = 0; j < 18; j++){
	  
	  randomLoc[j] = pics[j];
  }
}

function placeImg(){
	var h = 0;

  for(var i=0; i<6; i++){
	  for(var j=0; j<6; j++){
  
		document.getElementById("row"+ (j +1)+"col"+(i+1)+"img").src=randomLoc[h];
		h++;
		
		if(h == 17){
			h = 0;  
			randomizeImages(getRandomNum(5, 1));
		}
	  }
	  

  }

}