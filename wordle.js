let keyboard = [
    ["Q","W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]

      for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

     for (let i = 0; i < keyboard.length; j++)  {
        let keyTile = document.createElement("div");

        let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key; // "Key" + "
            }
            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }

    document.addEventListener("keyup", (e) => {
        processInput(e);
    })

function processKey() {
    e = { "code" : this.id };
    processInput(e);
}
function processInput(e) {
    if (gameOver) return; 

    // alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
        let currTile = document.getElementById(row.toString() + '-' + col.toString());     
        if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "";


            
