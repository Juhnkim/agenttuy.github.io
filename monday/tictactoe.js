var chosenSymbol = ' ';

function chooseXorO(symbol){
  chosenSymbol = symbol;
  document.getElementById("notes").innerHTML=chosenSymbol + 
    " is playing!";
}