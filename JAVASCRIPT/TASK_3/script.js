function calculate(operation) {

    const num1 = parseFloat(document.getElementById("inputNumber1").value);
    const num2 = parseFloat(document.getElementById("inputNumber2").value);

    let result;
    
    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operation) {
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 === 0) {
                    result = "Division by zero is not allowed.";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Invalid operation.";
        }
    }
    document.getElementById("answer").value = result;
}
