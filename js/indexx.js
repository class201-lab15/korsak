`use strict`
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let f = document.getElementById("f")
console.log(f);
// Get the offset position of the navbar
let sticky = f.offsetTop;
console.log(sticky)

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  console.log('test')
  if (window.pageYOffset >= sticky) {
    f.classList.add("sticky")
  } else {
    f.classList.remove("sticky");
  }
}
