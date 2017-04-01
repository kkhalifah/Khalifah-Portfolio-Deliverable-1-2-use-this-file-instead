function myFunctionmessage() {
    var message = prompt("What's the good word:", "something fun here");
    if (message != null) {
        document.getElementById("message").innerHTML =
       "Thanks a bunch!";
    }
}