'use strict'
let renderedItems = [];
function Cart(item){
    this.item = item;
}
Cart.prototype.saveCartInLocalStorage = function (cartItems){
    // save the cart in local storage
    localStorage.setItem('cart',JSON.stringify(cartItems));
}
Cart.prototype.restoreCartItems = function (){
    // restore all cart items if existed
    if (JSON.parse(localStorage.getItem('cart')) !== null){
        cart.item = JSON.parse(localStorage.getItem('cart'));
    }
}
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
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

