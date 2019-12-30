function calculate() {
    var op1 = parseInt(document.getElementById("operand1").value);
    var op2 = parseInt(document.getElementById("operand2").value);
    document.getElementById("result").value = op1 * op2
}

function change_text() {
    let r = Math.random().toString(36).substring(2);
    let button_index = Math.floor(Math.random() * (5 - 0)) + 0;
    document.getElementsByTagName("button")[button_index].textContent = r;
}