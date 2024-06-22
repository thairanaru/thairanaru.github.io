const colorSchemeSelector = document.getElementById("color-scheme");
const previousInput = localStorage.getItem("colorScheme");
console.log(previousInput);
if (previousInput != null) {
    colorSchemeSelector.value = previousInput;
}
colorSchemeSelector.onchange = (event) => {
    const inputValue = event.target.value;
    localStorage.setItem("colorScheme",inputValue)
}
