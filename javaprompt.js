
function myFunction() {
    var message = prompt("What's the good word:", "something fun here");
    if (message != null) {
        document.getElementById("note").innerHTML =
       "Thanks a bunch!";
    }
}