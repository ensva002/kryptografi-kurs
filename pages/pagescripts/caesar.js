let inn
let key
let output = document.getElementById("out")
let out

function encrypt(){
    getInput();
    xcrypt();
}


function decrypt(){
    getInput();
    key *= -1
    xcrypt();
}

function getInput(){
    inn = document.getElementById("inn").value.toLowerCase()
    key = document.getElementById("key").value
}

function xcrypt() {
    out = [];
    const alphabetLength = 29;
    for (let i = 0; i < inn.length; i++) {
        let charCode = inn.charCodeAt(i);
        if (/[a-zæøå]/.test(inn[i])) {
            // æøå til placeholders
            switch (charCode) {
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
            charCode = ((charCode - 97 + parseInt(key)) % alphabetLength + alphabetLength) % alphabetLength + 97;
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
    output.textContent = out.join('');
}
