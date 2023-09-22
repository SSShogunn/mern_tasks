function validateForm(event) {
    event.preventDefault();
    var errorElements = document.getElementsByClassName("error");
    var inputElements = document.getElementsByTagName("input");
    var textareaElement = document.getElementById("message");

    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].innerHTML = "";
    }

    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].classList.remove("error-border");
    }

    textareaElement.classList.remove("error-border");
    var nameInput = document.getElementById("name");
    if (nameInput.value.trim() === "") {
      nameInput.classList.add("error-border");
      document.getElementById("nameError").innerHTML = "This field is required";
    }
    var emailInput = document.getElementById("email");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add("error-border");
      document.getElementById("emailError").innerHTML = "A valid email address is required";
    }
    var websiteInput = document.getElementById("url");
    var websiteRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (websiteInput.value.trim() === "" && !websiteRegex.test(websiteInput.value.trim())) {
      websiteInput.classList.add("error-border");
      document.getElementById("websiteError").innerHTML = "A valid URL is required";
    }
    if (textareaElement.value.trim() === "") {
      textareaElement.classList.add("error-border");
      document.getElementById("messageError").innerHTML = "This field is required";
    }
  }