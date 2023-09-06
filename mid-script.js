function on(n) {
    if (n == 1) {
        document.getElementById("").style.display = "block";
    }
    Polymer({
        is: "overlay",
        properties: {
            name: String,
            description: String
        }
    });
}
function off() {
    document.getElementById("overlay").style.display = "none";
}