function colorClear() {
  const item = document.getElementById("colorDialog")
  if (item != null) {
    document.body.removeChild(document.getElementById("colorDialog"));
  }
}

const colorSchemeSelector = document.getElementById("color-scheme");
let previousInput = localStorage.getItem("colorScheme");
if (previousInput != null) {
  colorSchemeSelector.value = previousInput;
}

colorSchemeSelector.onchange = (event) => {
  colorClear();
  const inputValue = event.target.value;
  if (previousInput != inputValue) {
    // create dialog
    let string = "Would you like to save these preferences for the future? ";
    if (inputValue == "latte" || inputValue == "mocha" || inputValue == "frappe" || inputValue == "macchiato") {
      string += "Note: Catppuccin themes are considered experimental at this time. ";
    }
    console.log(string);
    const para = document.createElement("p");
    let node = document.createTextNode(string);
    para.appendChild(node);
    para.id = "colorDialog";
    para.className += "noindent";
    colorSchemeSelector.after(para);
    // yes button
    const buttonPostive = document.createElement("button");
    node = document.createTextNode("Yes");
    buttonPostive.appendChild(node);
    buttonPostive.className += "colorConfirmation";
    buttonPostive.onclick = onClick(inputValue, true);
    para.insertAdjacentElement("beforeend", buttonPostive);
    //spacer
    spacer = document.createElement("span")
    node = document.createTextNode("\u00A0");
    spacer.appendChild(node);
    para.insertAdjacentElement("beforeend", spacer);
    // no button
    const buttonNegative = document.createElement("button");
    node = document.createTextNode("No");
    buttonNegative.appendChild(node);
    buttonNegative.className += "colorConfirmation";
    buttonNegative.onclick = onClick(inputValue, false);
    para.insertAdjacentElement("beforeend", buttonNegative);
  }
}

function onClick(inputValue, confirmation) {
  return function() {
    console.log(confirmation);
    console.log(inputValue);
    if (confirmation == true) {
      previousInput = inputValue;
      localStorage.setItem("colorScheme", inputValue);
    }
    colorClear();
  }
}
