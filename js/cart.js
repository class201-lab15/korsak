'use strict'
let cart = new Cart([]);
cart.restoreCartItems();
let table = document.getElementById('cart');
function renderTable() {
    let firstRow = document.createElement('tr');
    table.appendChild(firstRow);
    for (let i = 0; i < 5; i++) {
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
            case 4:
                th.textContent='quantity'
        }
    }
    for (let i = 0; i < cart.item.length; i++) {
        let itemsRow = document.createElement('tr');
        table.appendChild(itemsRow);
        for (let j = 0; j < 5; j++) {
            let td = document.createElement('td');
            itemsRow.appendChild(td);
            switch (j) {
                case 0:
                    let btu = document.createElement('input');
                    td.appendChild(btu);
                    btu.setAttribute('type', 'submit');
                    btu.setAttribute('value', 'remove');
                    break;
                case 1:
                    renderItem(td, i);
                    break;
                case 2:
                    td.textContent = 'discription'
                    break;
                case 3:
                    td.textContent = 'price'
                    break;
                case 4:
                    let btu2 = document.createElement('input');
                    td.appendChild(btu2);
                    btu2.setAttribute('type', 'number');
            //         btu.setAttribute('lab, 'remove');
            }
        }
    }
    function renderItem(td, rowIndex) {
        let type = cart.item[rowIndex].productType;
        switch (type) {
            case 'books':
                // create an image
                let bookImg = document.createElement('img');
                td.appendChild(bookImg);
                bookImg.setAttribute('src', cart.item[rowIndex].src);
                break;
            case 'tutorials':
                // create iframe for video
                let video = document.createElement('iframe');
                td.appendChild(video);
                video.setAttribute('src', cart.item[rowIndex].src);
                break;
            case 'classes':
                // create an image
                let classImg = document.createElement('img');
                td.appendChild(classImg);
                classImg.setAttribute('src', cart.item[rowIndex].src);
                break;
        }
    }
}
renderTable();
<<<<<<< HEAD

function refresh(){
    cart.restoreCartItems();
    renderTable();
}
refresh();
=======
let tableForm=document.getElementById("tableForm")
tableForm.addEventListener('submit',removeItem)
function removeItem(event){
    let index;
    for(let i=0 ;i<cart.item.length;i++){
        event.target[i].id="";
    }
    event.preventDefault();
    console.log(event);
    let button=event.submitter;
    button.id='removeButton';
    for(let i=0 ;i<cart.item.length;i++){
        let indexId=event.target[i].id;
        if(indexId==button.id){
            index=i
            break;
        }

    }
    removeFromCart(index);
    refreshPage();
}
function removeFromCart(indexNum){
    cart.item.splice(indexNum,1);
    cart.saveCartInLocalStorage(cart.item);

}
>>>>>>> 6b7f7f71cb918dc5a61f7363a421b03fbdad9502
