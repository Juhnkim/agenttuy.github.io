var pics = [
           "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg",
           "https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg"
           ];

var location = 0;

function goLeft(){
  location = location + 1;
  document.getElementById("pic").src=pics[location];
}

function goRight(){
  location = location - 1;
  document.getElementById("pic").src=pics[location];
}