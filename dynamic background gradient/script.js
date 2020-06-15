var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");
var h2 = document.querySelector("h2");

function syncColors(){
    body.style.background = "linear-gradient(to right, " +
        color1.value + ", " + color2.value;
    h2.textContent = body.style.background;
}

syncColors();
color1.addEventListener("change", syncColors);
color2.addEventListener("change", syncColors);