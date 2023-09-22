document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the reverseButton
    const reverseButton = document.getElementById("reverseButton");
    reverseButton.addEventListener("click", function () {
        // Get the user input
        const numberInput = document.getElementById("numberInput").value;
        
        // Check if the input is a valid number
        if (isNaN(numberInput)) {
            document.getElementById("result").textContent = "Please enter a valid number.";
        } else {
            // Reverse the number
            const reversedNumber = reverseNumber(numberInput);
            document.getElementById("result").textContent = "Reversed Number: " + reversedNumber;
        }
    });

    // Function to reverse a number
    function reverseNumber(num) {
        const reversedNum = parseFloat(num.toString().split('').reverse().join(''));
        return reversedNum;
    }
});
