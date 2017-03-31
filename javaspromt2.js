function myFunction() {
    var person = prompt("Please enter your name", "John Smith");
    
    if (person != null) {
        document.getElementById("person").innerHTML =
        "Hi there " + person + "! Hope you're having a great day!";
    }
}