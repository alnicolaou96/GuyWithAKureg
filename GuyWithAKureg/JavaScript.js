function NightMode() {

    var n = document.getElementById("background");
    if (n.style.backgroundColor !== "rgb(255, 95, 134);") {
        console.log(n.style.backgroundColor);
    }
    else if (n.style.backgroundColor === "black") {
        console.log("working");
    }
}