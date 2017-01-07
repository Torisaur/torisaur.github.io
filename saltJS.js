var reasons = ["test"];

function getReason() {
    $.get("https://torisaur.github.io/excuses.txt", function(data) {
        window.reasons = data.split('\n');
        var randomNumber = Math.floor(Math.random() * 12);
        document.getElementById("saltReason").innerHTML = window.reasons[randomNumber];
    });
}