var reasons = [];

function init() {
    $.get("excuses.txt", function(data) {
      reasons = data.split('\n');
    });
    console.log(reasons[1]);
}

function getReason() {
    document.write(reasons[Math.floor((Math.random)*12)])
}