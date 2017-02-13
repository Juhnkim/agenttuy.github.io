

var operand1;
var operand2;

function getNumbers(){
 operand1 = Math.floor(Math.random() * 20) + 1;
 operand2 = Math.floor(Math.random() * 20) + 1;
 document.getElementById("operand1").innerHTML=operand1;
 document.getElementById("operand2").innerHTML=operand2;
 document.getElementById("userAnswer").value="";
}

function checkAnswer(){
  var userAnswer = document.getElementById("userAnswer").value;
  var sum = operand1 + operand2;
  
  if(userAnswer == sum){
    document.getElementById("results").innerHTML="Correct!";
  }
  else{
    document.getElementById("results").innerHTML="Incorrect!";
  }
}


/**
  JavaScript for the gallery

**/
var pics = [
              "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
              "http://static.boredpanda.com/blog/wp-content/uploads/2016/10/worlds-most-beautiful-cats-52-57fc9cb29d61b__700.jpg",
              "https://www.petfinder.com/wp-content/uploads/2012/11/86525557-general-cat-care-632x475.jpg"
            ];

var picIndex = 0;

function goLeft(){
  if(picIndex > 0){
    picIndex = picIndex - 1;
    document.getElementById("pic").src=pics[picIndex];
  }
}

function goRight(){
  if(picIndex < (pics.length - 1)){
    picIndex = picIndex + 1;
    document.getElementById("pic").src=pics[picIndex];
  }
}

