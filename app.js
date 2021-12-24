let myStr = "Hi, My name is David Jones. An aspiring developer from the UK"
let typeWriterStrings = ["Hi, my name is", "David Jones", "an aspiring developer", "from the UK"];

let speed = 85; /* The speed/duration of the effect in milliseconds */

let myArr = [];
let i = 0;
let j = 0;
let k = 0;
let p = 0;
let squares = document.getElementsByClassName("squares")




function myWriter() {
  for (let i = 0; i < typeWriterStrings.length; i++) {
   
    for (let j = 0; j < typeWriterStrings[i].length; ){
      if ([i] == 0) {
      document.getElementById("intro1").innerHTML += typeWriterStrings[i].charAt(j);
      j++
      } else if ([i] == 1) {
      document.getElementById("intro2").innerHTML += typeWriterStrings[i].charAt(j);
      j++
      } else if ([i] == 2) {
      document.getElementById("intro3").innerHTML += typeWriterStrings[i].charAt(j);
      j++
      } else if ([i] == 3) {
      document.getElementById("intro4").innerHTML += typeWriterStrings[i].charAt(j); 
      j++ 
      }
    }
  }
}

window.addEventListener("load", myInit, true); 
function myInit(){ 
 
  setTimeout(() => {
  }, 1700);
  creator();
}; 



function getRandomNum(max, min) {
   return Math.floor((Math.random() * max) + min)
}

function creator() {
  for(let k = 0; k < squares.length; k++) {
    if(k == !squares.length) {
      shapeLoader();
    }
  }
}

function shapeLoader() {
  for (l = 0; l <squares.length; l++) {
    squares[l].style.height = getRandomNum(150,1) + "px"
    squares[l].style.width = getRandomNum(150,1) + "px"
    squares[l].style.left = getRandomNum(100,0) + "vw"
    squares[l].style.animationDuration = getRandomNum(100,25) + "s"
    squares[l].style.animationDelay = getRandomNum(50,0) + "s"
    
    
  } 
}

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_uy3plw3', 'template_0ci8fvj', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}