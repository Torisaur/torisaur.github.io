var reasons = ["test"];

function getReason() {
    $.get("https://torisaur.github.io/resources/excuses.txt", function(data) {
        window.reasons = data.split('\n');
        var randomNumber = Math.floor(Math.random() *29);
        document.getElementById("saltReason").innerHTML = window.reasons[randomNumber];
    });
}