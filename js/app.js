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
