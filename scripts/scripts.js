function calculate() {
  var op1 = parseInt(document.getElementById("operand1").value);
  var op2 = parseInt(document.getElementById("operand2").value);
  var result = op1 * op2;
  alert(result);
}

function change_text() {
    let r = Math.random().toString(36).substring(2);
    let button_index = Math.floor(Math.random() * (5 - 0)) + 0;
    document.getElementsByTagName("button")[button_index].textContent = r;
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}