`use strict`
let slideIndex = 0;
carousel();
function carousel() {
  let i;
  let x = document.getElementsByClassName("img");
  for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
  }
 slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
