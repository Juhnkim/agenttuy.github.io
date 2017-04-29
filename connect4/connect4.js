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

//this function checks if diagonals are filled
//assuming that diagonals are filled
//we check if any are not filled
function checkDiagonal(row){
	
	//track columns, they get bigger
	var originalColor = getBgColor("row" + row + "col1");
	var i = row;
	for(var j = 1; j <= 4; j++){

		//if any diagonal happen to not be filled
		//we exit the function and it's false that there's a winner
		if(!isFilled("row" + i + "col" + j)){

			return false;
		}
		//else it is filled 
		//and we move on to the next row
		else {		
			//if the current circle is the same color
			//as the original
			if(getBgColor("row" + i + "col" + j) === originalColor){
				i = i - 1; //go to next row
			}
			//otherwise it's filled and not the same color
			else{
				return false;	
			}			
		}
	}  	  

	//getting to this point means that the diagonals are all filled
	return true;
}

function checkAllDiagonals(){
	
	return checkDiagonal(4) || checkDiagonal(5) || checkDiagonal(6);
	
	
}

//this function returns the color of a circle
function getBgColor(divLocation){
	
	return document.getElementById(divLocation).style.backgroundColor;
}