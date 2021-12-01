
let txt = "Hi, I'm David Jones"
let txt2 = "A developer from the UK" 
let speed = 85; /* The speed/duration of the effect in milliseconds */

let myArr = [];
let i = 0;
let j = 0;
let squares = document.getElementsByClassName("squares")
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


function getRandomNum(max, min) {
   return Math.floor((Math.random() * max) + min)
}

function creator() {
  for(i = 0; i < squares.length; i++) {
    if(i == !squares.length) {
      shapeLoader();
    }
  }
}

function shapeLoader() {
  for (j = 0; j <squares.length; j++) {
    squares[j].style.height = getRandomNum(150,1) + "px"
    squares[j].style.width = getRandomNum(150,1) + "px"
    squares[j].style.left = getRandomNum(100,1) + "vw"
    squares[j].style.animationDuration = getRandomNum(40,15) + "s"
    squares[j].style.animationDelay = getRandomNum(20,1) + "s" 
  } 
}