function test(){
  
  //alert("This is a test!");
  
  var type = document.getElementById("restaurantType").value;
  var quality = document.getElementById("quality").value;
  
  alert("type: " + type + " quality: " + quality);
  
  if(type === "fancy" && quality === "good"){
    alert("Recommended Tip: 20%");
  }
  else{
    alert("nothing matches");
  }
  
  
  //alert("you selected " + type);
}