var chosenColor;

function chooseColor(color){
  chosenColor = color;
}

function makeMove(divID, col, row){
  
  fill(divID);
  
}

function fill(divLocation){
  document.getElementById(divLocation).style.backgroundColor=chosenColor;
}