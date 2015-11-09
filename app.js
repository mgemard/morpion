var count = 0;
var over = false;
var square_cross = [];
var square_circle = [];
var carreMagic = [2,7,6,9,5,1,4,3,8];

function play(nb){
//console.log(nb);
  var current;

  if(!over){
    var elem = document.getElementById("button"+nb);
    var parent = elem.parentNode;
    parent.removeChild(elem);

    if (count == 0) {
      current = "X";
      square_cross.push(nb);
      //console.log(square_cross);
      parent.innerHTML = current;
      document.getElementById("note").innerHTML = "Next to play: O";
      over = isWinner(square_cross.slice());
    }
    else {
      current = "O";
      square_circle.push(nb);
      parent.innerHTML = current;
      document.getElementById("note").innerHTML = "Next to play: X";
      over = isWinner(square_circle.slice());
    }
    count = (count + 1 ) % 2;
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
  square_cross = [];
  square_circle = [];
}


function generateBoard(){
  var plateau = document.createElement("table");
  var elem = "";
  var num = 0;
  for (var i = 1; i <= 3; i++){
    elem += "<tr>";
    for (var j = 1; j <= 3; j++){
      elem += "<td><button id=\"button"+carreMagic[num]+"\" onclick=\"play('"+carreMagic[num]+"')\"></button></td>";
      num++;
    }
    elem += "</tr>";
  }
  elem += "";

  plateau.innerHTML = elem;
  document.getElementById("board").appendChild(plateau);
  document.getElementById("note").innerHTML = "Next to play: X";

}

function isWinner(square){
	for (var i = square.length - 1; i >= 0; i--) {
		//console.log("i="+ i+ ": ")
		var firstSquare = square.pop();
		for (var j = square.length - 1; j >= 0; j--) {
			var secondSquare = square[j];
			for (var k = square.length - 2; k >= 0; k--) {
				if (j != k && parseInt(firstSquare) + parseInt(secondSquare) + parseInt(square[k]) == 15) {
					return true;
				}
			}
		}
	}
	return false;
}
