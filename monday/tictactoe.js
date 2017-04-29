var chosenSymbol = ' ';

function chooseXorO(symbol){
  chosenSymbol = symbol;
  document.getElementById("notes").innerHTML=chosenSymbol + 
    " is playing!";
}

function makeMove(divLocation){
  
  var box = document.getElementById(divLocation).innerHTML;
  
  if(box === ""){
    document.getElementById(divLocation).innerHTML=chosenSymbol;
  }
  
  checkWinner();
  
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
  
  if(r1c1 == r2c1 && r1c1 == r3c1 && r1c1 !== "" || 
     r1c2 == r2c2 && r1c2 == r3c2 && r1c2 !== "" || 
     r1c3 == r2c3 && r1c3 == r3c3 && r1c3 !== "" ||
     r1c1 == r1c2 && r1c1 == r1c3 && r1c1 !== "" ||
     r2c1 == r2c2 && r2c1 == r2c3 && r2c1 !== "" || 
     r3c1 == r3c2 && r3c1 == r3c3 && r3c1 !== "" ||
     r1c1 == r2c2 && r1c1 == r3c3 && r1c1 !== "" ||
     r1c3 == r2c2 && r1c3 == r3c1 && r1c3 !== "" ){
    document.getElementById("notes").innerHTML=chosenSymbol + " is the winner!";
  }
  
}

