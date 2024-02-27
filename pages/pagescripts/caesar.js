let inn;
let keyField = document.getElementById("key");
let key;
let output = document.getElementById("out");
let out;
const alphabetLength = 29;

function encrypt() {
  getInput();
  xcrypt();
}

function decrypt() {
  getInput();
  key *= -1;
  xcrypt();
}

function getInput() {
  inn = document.getElementById("inn").value.toLowerCase();
  key = keyField.value;
}

function xcrypt() {
  out = [];
  
  for (let i = 0; i < inn.length; i++) {
    let charCode = inn.charCodeAt(i);
    if (/[a-zæøå]/.test(inn[i])) {
      // æøå til placeholders
      switch (charCode){ 
        case 230:
          charCode = 123;
          break;
        case 248:
          charCode = 124;
          break;
        case 229:
          charCode = 125;
          break;
      }
      charCode =
        ((charCode - 97 + parseInt(key)) % alphabetLength + alphabetLength) %
          alphabetLength + 97;
      //placeholders til æøå
      switch (charCode) {
        case 123:
          charCode = 230;
          break;
        case 124:
          charCode = 248;
          break;
        case 125:
          charCode = 229;
          break;
      }
    }
    out.push(String.fromCharCode(charCode));
  }
  output.textContent = out.join("");
}

//Wheels
let inner = document.getElementById("inner")
let rotation
function rotate(){
  rotation = keyField.value
  key = parseInt(rotation) % alphabetLength;
  if (key < 0){
    key += alphabetLength
  }
  keyField.value = key;
  inner.style.transform = "rotate(" + (-rotation * 12.41379310344828) + "deg)";
  if(rotation == 29 || rotation == -1){
    setTimeout(() => {
      inner.style.transition = '0s';
      rotation = key
      inner.style.transform = "rotate(" + (-rotation * 12.41379310344828) + "deg)";
    }, 70)
    setTimeout(() => {
      inner.style.transition = '0.07s';
    }, 90)
  }
}