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
// window.onscroll = function() {myFunction()};
// // Get the navbar
// let navbar = document.getElementsByClassName("topnav")
// // Get the offset position of the navbar
// let sticky = navbar.offsetTop;
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }