
let txt = "Hi, I'm David Jones" /* The text */
let speed = 75; /* The speed/duration of the effect in milliseconds */

var i = 0;


const texts = ["Hi, I'm David Jones", "A developer from the UK"]

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter();