function regexChecker() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let nameRegex = /^[A-Z][a-z]+[^\W+0-9]$/;
    
    if (firstName.match(nameRegex) && lastName.match(nameRegex)) {
        alert("Yay! Your inputs were all correct!");
    }
    else {
        alert("Oh no! Thats an invalid format!");
    }
}