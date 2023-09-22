function validateForm() {
    const declarationCheckbox = document.getElementById("declaration");
    const form = document.getElementById("registrationForm");

    if (!declarationCheckbox.checked) {
        alert("Please declare that all details are true.");
        return;
    }

    const requiredFields = form.querySelectorAll("input[required]");
    let isFormValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = "red";
            isFormValid = false;
        } else {
            field.style.borderColor = "";
        }
    });

    if (!isFormValid) {
        alert("Please fill in all required fields.");
    } else {
        alert("Form submitted successfully!");
    }
}
