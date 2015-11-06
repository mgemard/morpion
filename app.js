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
