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
            
