var result = document.getElementById("result");
let calcul = "";
let total = 0;
let operation = false;

function clickNumber(nb) {
  if (result.innerText == "0" || operation == true) {
    result.innerText = nb;
  } else {
    result.innerText = result.innerText + nb;
  }
  operation = false;
}

function eraseAll() {
  result.innerText = "0";
  calcul = "";
}

function erase() {
  if (result.innerText.length == 1) {
    result.innerText = "0";
    calcul = "";
  } else {
    result.innerText = result.innerText.substring(
      0,
      result.innerText.length - 1
    );
  }
}

function calculStock(op) {
  calcul = calcul + result.innerText + " " + op + " ";
  operation = true;
}

function calculFinal() {
  calcul = calcul + result.innerText;
  total = eval(calcul);
  result.innerText = total.toString();
  calcul = "";
}

