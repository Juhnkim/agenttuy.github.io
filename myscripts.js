var character = "";

function chooseX(){
  character = 'X';
}

function chooseO(){
  character = 'O';
}

function makeMove(divLocation){
  var insideDiv = document.getElementById(divLocation).innerHTML;
  
  if(insideDiv === ""){
    document.getElementById(divLocation).innerHTML=character;
    document.getElementById("notes").innerHTML="";
  }
  else{
    document.getElementById("notes").innerHTML="Already made a move here" +
      "<p>Try another spot!</p>";
  }
  
  if(checkWinner()){
    document.getElementById("notes").innerHTML=character +" wins!";
    alert(character + " won! Let's play again!");
    location.reload();
  }
}

function checkWinner(){
    var r1c1 = document.getElementById("row1col1").innerHTML;
    var r1c2 = document.getElementById("row1col2").innerHTML;
    var r1c3 = document.getElementById("row1col3").innerHTML;
    var r2c1 = document.getElementById("row2col1").innerHTML;
    var r2c2 = document.getElementById("row2col2").innerHTML;
    var r2c3 = document.getElementById("row2col3").innerHTML;
    var r3c1 = document.getElementById("row3col1").innerHTML;
    var r3c2 = document.getElementById("row3col2").innerHTML;
    var r3c3 = document.getElementById("row3col3").innerHTML;
  
  if(r1c1 === r1c2 && r1c1 === r1c3 && r1c1 !== "" || 
     r2c1 === r2c2 && r2c1 === r2c3 && r2c1 !== "" || 
     r3c1 === r3c2 && r3c1 === r3c3 && r3c1 !== "" || 
     r1c1 === r2c1 && r1c1 === r3c1 && r1c1 !== "" || 
     r1c2 === r2c2 && r1c2 === r3c2 && r1c2 !== "" || 
     r1c3 === r2c3 && r1c3 === r3c3 && r1c3 !== "" ||
     r1c1 === r2c2 && r1c1 === r3c3 && r1c1 !== "" ||
     r1c3 === r2c2 && r1c3 === r3c1 && r1c3 !== "" ){
     return true;
  }
  else{
    return false;
  }
  
}

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

