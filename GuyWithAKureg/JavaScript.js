var night = false;
function NightMode() {

    var n = document.getElementById("background").style;
    if (night === false) {
        n.backgroundColor = "black";
        night = true;
    }
    else if (night === true) {
        n.backgroundColor = "indianred";
        night = false;
    }
}