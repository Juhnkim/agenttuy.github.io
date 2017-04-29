// this holds either black or red
var chosenColor;
var rowOfFallenChip = 6;

function chooseColor(color){
  chosenColor = color;
}

//handles the general logic of making a move
function makeMove(divID, col, row){

	var winner = checkWinner(divID, col, row);

	if(winner == false){
		var rowIndex = 6;
		//variable to hold circle location
		var circle = "row" + rowIndex + col;
		
		rowOfFallenChip = checkRow(circle, rowIndex, col);
		//alert("fallen chip row: " + rowOfFallenChip);
	
		   //if the circle is already filled
		if(tryFilling(circle) === false){
		  rowIndex = rowIndex - 1;
		  //rowOfFallenChip = rowIndex;
		  //alert("fallen chip row: " + rowOfFallenChip);
		}
    }
    else{
    	alert("Winner!");	
    }
    
    //check winner again for move delay
    if(checkWinner(divID, col, row)){
    	alert("Winner!");		
    }
}

//check if filled, to simulate falling chip
function checkRow(circle, rowIndex, col){
  
  var stop = false;
  while(!stop){
	 circle = "row" +rowIndex + col;
	  
		//if the circle is already filled
		if(tryFilling(circle) === false){
		rowIndex = rowIndex - 1
	   }
	  else{
		stop = true;
	  }
  }

  return rowIndex;
}

//this tries filling in a circle if not filled
function tryFilling(divID){
    //create variable to hold true of false if filled
  var isDivFilled = isFilled(divID);
  if(isDivFilled === true){
    return false;
  }
  else{
    fill(divID);
    return true;
  }
}

  // support function that checks if a circle is filled
  function isFilled(divLocation){
    
    //get the circle color info
    var chosenDiv=document.getElementById(divLocation).style.backgroundColor;
  
    //if the current circle is filled, return true
    if(chosenDiv === "black" || chosenDiv === "red"){
      return true;
    }
    else{
      return false;
    }
  }

//support function that fills the circle
function fill(divLocation){
  document.getElementById(divLocation).style.backgroundColor=chosenColor
}

//the functions below help with determining a winner

//checks for winner
function checkWinner(divLocation, col, row){
	
	var columnUpWinner = false;
	var acrossWinner = false;
	
	for(var i = 6; i > 3; i--){
		
		if(!columnUpWinner){
			columnUpWinner = checkColumnUp(divLocation, col, i);
		}
		else{
			break;
		}
	}
	
	for(var j = 7; j > 3; j--){
		
		if(!acrossWinner){
			acrossWinner = checkRowAcross(j);
		}
		else{
			break;
		}
	}
	
	
	
	return (columnUpWinner || acrossWinner || checkAllDiagonals());
}

//checks for a winner vertically
function checkColumnUp(divLocation, col, row){

	var color = getBgColor("row" +  row + col);
	
	if(getBgColor("row" +  row + col) === getBgColor("row" + (row - 1) + col) && 
	   getBgColor("row" +  row + col) === getBgColor("row" + (row - 2) + col) &&
	   getBgColor("row" +  row + col) === getBgColor("row" + (row - 3) + col) &&
	   color !== "white"){
	   	
	   		return true;
	}
	else{
		return false;
	}
	
}

function checkRowAcross(col){
  
	//alert("location " + row + "col" + col);
	var row = "row" + rowOfFallenChip;
	
    var color = getBgColor(row + "col" + col);
  
  
	  if(getBgColor(row + "col" + col) == getBgColor(row + "col" + (col - 1)) &&
		 getBgColor(row + "col" + col) == getBgColor(row + "col" + (col - 2)) &&
		 getBgColor(row + "col" + col) == getBgColor(row + "col" + (col - 3)) &&
		 color !== "white"){
	
		 return true;
	  }
	  else{
		  return false;
	   }
}

function checkDiagonal(row){
	
	var filled = true;
	
	//track rows, they get smaller
	for(var i = row; i >= 1; i--){
		//track columns, they get bigger
		for(var j = 1; j <= 4; j++){
	
			if(!isFilled("row" + i + "col" + j)){
				//alert("checking diagonal" + " row" + i + " col" + j);
				//filled = false;
				alert("not filled with row: " + row);
				/*
				if(row == 5){
					break;
				}
				
				if(row == 6 && (j == 1 || j == 2)){
					break;
				}
				
				*/
				return false;
			}
			else{
				i = i - 1; //i++;
				//j = j + 1; //j++;
			}
		}
  	  
	}

	return filled;
}

function checkAllDiagonals(){
	
	return checkDiagonal(4) || checkDiagonal(5) || checkDiagonal(6);
	
	
}

//this function returns the color of a circle
function getBgColor(divLocation){
	
	return document.getElementById(divLocation).style.backgroundColor;
}