var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.querySelector("body");
var button=document.querySelector("button");
function setGradient(){
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")" ;
    css.textContent=body.style.background+";";
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
button.addEventListener("click",setRandomGradient);
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}
function setRandomGradient() {
    var randomColor1 = getRandomColor();
    var randomColor2 = getRandomColor();
    color1.value = randomColor1; 
    color2.value = randomColor2;
    setGradient();
}