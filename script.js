var css = document.querySelector('h3');
var color1 = document.querySelector('input');
var color2 = document.querySelectorAll('input')[1];
var body = document.querySelector('#gradient');

function changeColor() {
    body.style.background = 
    "linear-gradient(to right, "
     + color1.value
     + "," 
     + color2.value 
     +")";

     css.textContent = body.style.background + ';';
}

color1.addEventListener("input",  changeColor)
color2.addEventListener("input", changeColor)