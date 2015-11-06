var count = 0;

function myFunction(button){

  var elem = document.getElementById(button);
  var parent = elem.parentNode;
  parent.removeChild(elem);
  if (count == 0) {
  	parent.innerHTML = "X";
  }
  else {
  	parent.innerHTML = "O";
  }
  count = (count + 1 ) % 2;

}

function resetBoard(){

  var plateau = document.getElementById("board");
  while (plateau.firstChild) {
    plateau.removeChild(plateau.firstChild);
  }

  generateBoard();
}


function generateBoard(){
  var plateau = document.createElement("table");
  var elem = "";
  var num = 1;
  for (var i = 1; i <= 3; i++){
    elem += "<tr>";
    for (var j = 1; j <= 3; j++){
      elem += "<td><button id=\"button"+num+"\" onclick=\"myFunction('button"+num+"')\"></button></td>";
      num++;
    }
    elem += "</tr>";
  }
  elem += "";

  plateau.innerHTML = elem;
  document.getElementById("board").appendChild(plateau);

}
