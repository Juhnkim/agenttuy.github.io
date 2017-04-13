var pics = ["http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/shop6.jpg",
           "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg",
           "http://f.tqn.com/y/cats/1/S/6/V/4/cat-deadmouse2081x1446.jpg",
           "https://s-media-cache-ak0.pinimg.com/originals/a3/53/72/a353723027c108d19e0a2776fd0e2b47.jpg"
           ];


var divLocation = 0;


function goLeft(){
  divLocation = divLocation - 1;
  
  if(divLocation > 0){
    document.getElementById("pic").src=pics[divLocation];
  }
}

function goRight(){
  divLocation = divLocation + 1;
  
  if(divLocation < pics.length){
    document.getElementById("pic").src=pics[divLocation];
  }
}
