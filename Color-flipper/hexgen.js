const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById("btn");
const elem = document.getElementById("elem");

function randomizeColor() {
    return Math.floor(Math.random() * hex.length)
}

btn.addEventListener("click", function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomizeColor()];
    }
    document.body.style.backgroundColor = hexColor;
    elem.textContent = hexColor;
});

