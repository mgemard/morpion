var count = 0;
var current;
var over = false;
var position = [0,1,2,3,4,5,6,7,8];

function play(num){
console.log(over);
  if(!over){
    var elem = document.getElementById("button"+num);
    var parent = elem.parentNode;
    parent.removeChild(elem);

    if (count == 0) {
      current = "X";
      position[num] = current;
    	parent.innerHTML = current;
      document.getElementById("note").innerHTML = "Next to play: O";
    }
    else {
      current = "O";
      position[num] = current;
    	parent.innerHTML = current;
      document.getElementById("note").innerHTML = "Next to play: X";
    }
    count = (count + 1 ) % 2;

    over = isWinner();
    if(over) {
      document.getElementById("note").innerHTML = current + " Won";
    }
  }

}

function resetBoard(){

  var plateau = document.getElementById("board");
  while (plateau.firstChild) {
    plateau.removeChild(plateau.firstChild);
  }

  generateBoard();
  over = false;
  position = [0,1,2,3,4,5,6,7,8];
}


function generateBoard(){
  var plateau = document.createElement("table");
  var elem = "";
  var num = 0;
  for (var i = 1; i <= 3; i++){
    elem += "<tr>";
    for (var j = 1; j <= 3; j++){
      elem += "<td><button id=\"button"+num+"\" onclick=\"play('"+num+"')\"></button></td>";
      num++;
    }
    elem += "</tr>";
  }
  elem += "";

  plateau.innerHTML = elem;
  document.getElementById("board").appendChild(plateau);
  document.getElementById("note").innerHTML = "Next to play: X";

}

function isWinner(){
  if(position[0] == position[1] && position[0] == position[2] ||
     position[3] == position[4] && position[3] == position[5] ||
     position[6] == position[7] && position[6] == position[8] ||
     position[0] == position[3] && position[0] == position[6] ||
     position[1] == position[4] && position[1] == position[7] ||
     position[2] == position[5] && position[2] == position[8] ||
     position[0] == position[4] && position[0] == position[8] ||
     position[2] == position[4] && position[2] == position[6]) {
       return true;
     }
}
