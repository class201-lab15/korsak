'use strict'
let cart = new Cart([]);
cart.restoreCartItems();
console.log(cart.item);
let table = document.getElementById('cart');
let firstRow = document.createElement('tr');
table.appendChild(firstRow);
for (let i = 0; i < 4; i++){
    let th = document.createElement('th');
    firstRow.appendChild(th);
    switch (i) {
        case 0:
            th.textContent = 'remove';
            break;
        case 1:
            th.textContent = 'item'
            break;
        case 2:
            th.textContent = 'discription'
            break;
        case 3:
            th.textContent = 'price'
            break;            
    }
}
for (let i = 0; i < cart.item.length; i++){

}