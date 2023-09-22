function sortString() {
    const inputString = document.getElementById("inputString").value;
    const sortedString = sortStringAlphabetically(inputString);
    document.getElementById("sortedString").textContent = sortedString;
    document.getElementById("result").style.display = "block";
}

function sortStringAlphabetically(inputString) {
    const charArray = inputString.split('');
    const sortedArray = charArray.sort();
    return sortedArray.join('');
}