'use strict'
let cart = new Cart([]);
cart.restoreCartItems();
let totalItemsPrice = 0;
let tableFR = document.getElementById('fisrtRow');
let table = document.getElementById('cart');
let totalPrice = document.getElementById('totalPrice');
let totalMessage = document.createElement('p');
let price = document.createElement('p');
totalPrice.appendChild(totalMessage);
totalPrice.appendChild(price);
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click',buyItems);
function renderTable() {
    totalItemsPrice = 0;
    let firstRow = document.createElement('tr');
    tableFR.appendChild(firstRow);
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
                th.textContent = 'quantity'
                break;
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
                    let btu = document.createElement('button');
                    td.appendChild(btu);
                    btu.setAttribute('class', 'button')
                    btu.innerHTML = '<i class="fas fa-trash-alt"></i>';
                    break;
                case 1:
                    renderItem(td, i);
                    break;
                case 2:
                    let scrollBox =document.createElement('div');
                    td.appendChild(scrollBox);
                    scrollBox.setAttribute('class','scrolling')
                    let p = document.createElement('p');
                    scrollBox.appendChild(p);
                    p.textContent = cart.item[i].name + ', ' + cart.item[i].discription;
                    break;
                case 3:
                    td.textContent = cart.item[i].price*cart.item[i].quantity;
                    totalItemsPrice += cart.item[i].price*cart.item[i].quantity;
                    break;
                case 4:
                    let btu2 = document.createElement('input');
                    td.appendChild(btu2);
                    btu2.setAttribute('type', 'number');
                    btu2.setAttribute('class','numBtu');
                    btu2.value = parseInt(cart.item[i].quantity);
                    break;
            }
        }
    }
    checkTheTableSize();
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
renderTable();
let tableForm = document.getElementById("tableForm")
tableForm.addEventListener('submit', removeItem)
function removeItem(event) {
    let index;
    for (let i = 0; i < cart.item.length; i++) {
        event.target[i * 2].id = "";
    }
    event.preventDefault();
    let button = event.submitter;
    button.id = 'removeButton';
    for (let i = 0; i < cart.item.length; i++) {
        let indexId = event.target[i * 2].id;
        if (indexId == button.id) {
            index = i
            break;
        }

    }
    removeFromCart(index);
    refreshPage();
}
function removeFromCart(indexNum) {
    cart.item.splice(indexNum, 1);
    cart.saveCartInLocalStorage(cart.item);

}
function refreshPage() {
    cart.restoreCartItems();
    table.textContent = '';
    tableFR.textContent = '';
    renderTable();
}
tableForm.addEventListener('change', changeQuant);
function changeQuant(event) {
    let value = event.target.value;
    let rowParent = event.path[2];
    if (parseInt(value) == 0) {
        let quanChild = rowParent.childNodes[4];
        quanChild.childNodes[0].value = 1;
    } else if (parseInt(value) >= 1) {
        let priceChild = 0;
        let index = 0;
        let nameChild = rowParent.childNodes[2].childNodes[0].childNodes[0].textContent;
        for (let i = 0; i < cart.item.length; i++){
            let productName = cart.item[i].name + ', ' + cart.item[i].discription;
            if (nameChild == productName){
                priceChild = cart.item.price;
                index = i;
                break;
            }
        }
        let totalChild = rowParent.childNodes[3];
        cart.item[index].quantity = value;
        totalChild.textContent = parseInt(priceChild) * parseInt(value);
        cart.saveCartInLocalStorage(cart.item);
        refreshPage();
    }
}
function checkTheTableSize(){
    let tableDiv = document.getElementById('tableDiv');
    let totalDiv = document.getElementById('total');
    if (cart.item.length > 3){
        tableDiv.setAttribute('class','tbl-content');
    } else {
        tableDiv.removeAttribute('class');
        tableDiv.setAttribute('style','height: fit-content;width: 70%;');
    }
    if (cart.item.length == 0){
        totalDiv.setAttribute('class','empty');
    } else if (cart.item.length == 1){
        totalDiv.setAttribute('class','onlyOne');
    } else if (cart.item.length == 2){
        totalDiv.setAttribute('class','onlyTwo');
    } else if (cart.item.length >= 3){
        totalDiv.setAttribute('class','moreThanTree');
    }
    if (cart.item.length >= 1){
        console.log(totalItemsPrice);
        totalMessage.textContent = 'The total price for all items is';
        price.textContent = totalItemsPrice;
    } else {
        totalMessage.textContent = 'Please fill the cart';
        price.textContent = ''
    }
}
function buyItems(event){
    alert('thanks for buying from korsak');
    cart.item = []
    cart.saveCartInLocalStorage(cart.item);
    refreshPage();
}
$(window).on("load resize ", function () {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({ 'padding-right': scrollWidth });
}).resize();
