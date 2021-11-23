
let txt = "Hi, I'm David Jones"
let txt2 = "A developer from the UK" 
let speed = 85; /* The speed/duration of the effect in milliseconds */

let i = 0;
let j = 0;

const texts = ["Hii I'm David Jones", "A developer from the UK"]


typeWriter();

setTimeout(() => {
  sloganTyper();
}, 1500);

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function sloganTyper() {
  if (j < txt2.length)
  document.getElementById("intro2").innerHTML += txt2.charAt(j);
  j++;
  setTimeout(sloganTyper, speed);
}
