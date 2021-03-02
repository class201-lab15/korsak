'use strict'
let cart = new Cart([]);
cart.restoreCartItems();
let tableFR = document.getElementById('fisrtRow');
let table = document.getElementById('cart');
function renderTable() {
    let firstRow = document.createElement('tr');
    tableFR.appendChild(firstRow);
    for (let i = 0; i < 6; i++) {
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
            case 5:
                th.textContent = 'total'
                break;
        }
    }
    for (let i = 0; i < cart.item.length; i++) {
        let itemsRow = document.createElement('tr');
        table.appendChild(itemsRow);
        for (let j = 0; j < 6; j++) {
            let td = document.createElement('td');
            itemsRow.appendChild(td);
            switch (j) {
                case 0:
                    let btu = document.createElement('input');
                    td.appendChild(btu);
                    btu.setAttribute('type', 'submit');
                    btu.setAttribute('value', 'remove');
                    btu.setAttribute('class', 'button')
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
                    td.textContent = cart.item[i].price
                    break;
                case 4:
                    let btu2 = document.createElement('input');
                    td.appendChild(btu2);
                    btu2.setAttribute('type', 'number');
                    btu2.value = 1;
                    break;
                case 5:
                    td.textContent = cart.item[i].price;
            }
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
        let priceChild = rowParent.childNodes[3];
        let totalChild = rowParent.childNodes[5];
        totalChild.textContent = parseInt(priceChild.textContent) * parseInt(value);
    }
}
$(window).on("load resize ", function () {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({ 'padding-right': scrollWidth });
}).resize();
