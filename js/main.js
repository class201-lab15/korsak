'use strict'
//////////////////////////////////////////////////////////////////////////////
let numberOfallProducts =15;
/////////////////////////////////////////////////////////////////////////////
let cart = new Cart([]);
// construct all the products objects 
let Product = function (name, src, price, discription, productType) {
    this.name = name;
    this.src = src;
    this.price = price;
    this.discription = discription
    this.productType = productType;
    Product.allProducts.push(this);
}
Product.allProducts = [];
// create products
//////////////////////////////////////////////////////////////////////////////
let book1 = new Product('headline', 'https://img.freepik.com/free-vector/geometric-leaflet-with-yellow-black-lines_1201-608.jpg?size=338&ext=jpg', 250, 'a book for head line', 'books');
let book2 = new Product('annual report', 'https://img.freepik.com/free-vector/nice-wavy-blue-annual-report-business-brochure-design_1017-27437.jpg', 285, 'a book for annual report', 'books');
let book3 = new Product('headline', 'https://img.freepik.com/free-vector/geometric-leaflet-with-yellow-black-lines_1201-608.jpg?size=338&ext=jpg', 250, 'a book for head line', 'books');
let book4 = new Product('headline', 'https://img.freepik.com/free-vector/geometric-leaflet-with-yellow-black-lines_1201-608.jpg?size=338&ext=jpg', 250, 'a book for head line', 'books');
let book5 = new Product('annual report', 'https://img.freepik.com/free-vector/nice-wavy-blue-annual-report-business-brochure-design_1017-27437.jpg', 285, 'a book for annual report', 'books');
let book6 = new Product('headline', 'https://img.freepik.com/free-vector/geometric-leaflet-with-yellow-black-lines_1201-608.jpg?size=338&ext=jpg', 250, 'a book for head line', 'books');
let book7 = new Product('headline', 'https://img.freepik.com/free-vector/geometric-leaflet-with-yellow-black-lines_1201-608.jpg?size=338&ext=jpg', 250, 'a book for head line', 'books');
let book8 = new Product('headline', 'https://img.freepik.com/free-vector/geometric-leaflet-with-yellow-black-lines_1201-608.jpg?size=338&ext=jpg', 250, 'a book for head line', 'books');
let book9 = new Product('headline', 'https://img.freepik.com/free-vector/geometric-leaflet-with-yellow-black-lines_1201-608.jpg?size=338&ext=jpg', 250, 'a book for head line', 'books');
let tutorial1 = new Product('JavaScript1', 'https://www.youtube.com/embed/Qqx_wzMmFeA', 300, 'javascript tutorials for biggener', 'tutorials');
let tutorial2 = new Product('JavaScript2', 'https://www.youtube.com/embed/lhNdUVh3qCc', 320, 'javascript tutorials for biggener', 'tutorials');
let tutorial3 = new Product('JavaScript3', 'https://www.youtube.com/embed/lhNdUVh3qCc', 320, 'javascript tutorials for biggener', 'tutorials');
let tutorial4 = new Product('JavaScript4', 'https://www.youtube.com/embed/lhNdUVh3qCc', 320, 'javascript tutorials for biggener', 'tutorials');
let course1 = new Product('cooking', 'http://img.pgc.in.goldenmob.com/img/5aa4a740dd4a11ea8af7adb8a77d6017/af457e6a05ea35940819d92325c0625d-480.jpg', 400, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ', 'classes');
let course2 = new Product('cooking2', 'https://sparkbox.com/uploads/featured_images/p-zatrow_20-07.png', 400, 'a cooking online class', 'classes');
////////////////////////////////////////////////////////////////////////////////
// add a listner to the form and ul-form elements
let form = document.getElementById('addToCart');
form.addEventListener('submit', add);
let books = document.getElementById('books');
let tutorials = document.getElementById('tutorials');
let classes = document.getElementById('classes');
books.addEventListener('click',linktype);
tutorials.addEventListener('click',linktype);
classes.addEventListener('click',linktype);
// TO DO when a button is clicked in the form
function add(event) {
    event.preventDefault();
    // no. of butttons counter
    let noOfBtu = 0;
    // empty the previous clicked button from id = clicked
    for (let i = 0; i <form.childNodes.length; i++) {
        let div = form.childNodes[i];
        if (div.childNodes.length !== 0) {
            for (let j = 0; j < div.childNodes.length; j++) {
                let nodeElement = div.childNodes[j];
                if (nodeElement.id == 'clicked') {
                    nodeElement.removeAttribute("id");
                }
            }
            noOfBtu++;
        }
    }
    // determine the clicked button
    let btu = event.submitter;
    // determine the clicked button index
    btu.setAttribute('id', 'clicked');
    let btuIndex;
    for (let i = 0; i < noOfBtu; i++) {
        let btuId = event.target[i].id;
        if (btuId == btu.id) {
            btuIndex = i;
            break;
        }
    }
    // add item to the cart
    addToTheCart(btuIndex);
}
function addToTheCart(index) {
    // put the selected item in cart and save it in local storage
    if (localStorage.getItem('cart') === null) {
        cart.item.push(renderedItems[index]);
        cart.saveCartInLocalStorage(cart.item);
    } else if (JSON.parse(localStorage.getItem('cart')).length !== 0){
        let savedItems = JSON.parse(localStorage.getItem('cart'));
        for (let i = 0; i < savedItems.length; i++){
            if (savedItems[i].name == renderedItems[index].name){
                alert('the item was allready added to the cart, you can to quantity in cart page');
                break;
            } else if (i == savedItems.length-1){
                cart.item.push(renderedItems[index]);
                cart.saveCartInLocalStorage(cart.item);
            }
        }
    } else {
        cart.item.push(renderedItems[index]);
        cart.saveCartInLocalStorage(cart.item);
    }
}
function render(type) {
    // remove the previous type rendered products 
    removeRendered();
    // empty the rendered items array from previous products
    renderedItems = [];
    // show the new type renderd products
    for (let i = 0; i < numberOfallProducts; i++) {
        let counterForAddingListner = 0;
        if (Product.allProducts[i].productType == type) {
            counterForAddingListner++;
            // first fill the new renderd item in the the following array
            renderedItems.push(Product.allProducts[i]);
            // second create a div to fill it by the product properties
            let div = document.createElement('div');
            form.appendChild(div);
            switch (type) {
                case 'books':
                    // create an image
                    let bookImg = document.createElement('img');
                    div.appendChild(bookImg);
                    bookImg.setAttribute('src', Product.allProducts[i].src);
                    bookImg.querySelector('id','addToCart');
                    break;
                case 'tutorials':
                    // create iframe for video
                    let video = document.createElement('iframe');
                    div.appendChild(video);
                    video.setAttribute('src', Product.allProducts[i].src);
                    div.setAttribute('id','addTutorialToCart');
                    video.setAttribute('class', 'play');
                    // add for form a one mouse over listener for video autoplay
                    if (counterForAddingListner == 1){
                        form.addEventListener('mouseover', playTheVideo);
                    }
                    break;
                case 'classes':
                    // create an image
                    let classImg = document.createElement('img');
                    div.appendChild(classImg);
                    classImg.setAttribute('src', Product.allProducts[i].src);
                    div.setAttribute('id','addClasses');
                    break;
            }
            // create a pragraph 
            let label = document.createElement('p');
            div.appendChild(label);
            label.textContent = Product.allProducts[i].discription;
            // create a button
            let btu = document.createElement('input');
            div.appendChild(btu);
            btu.setAttribute('type', 'submit');
            btu.setAttribute('value', 'buy');
        }
    }
}
function linktype(event) {
    event.preventDefault();
    // define the type for the new rendering products
    let productsType = event.path[0].id;
    console.log(productsType);
    render(productsType);
}
function removeRendered() {
    // remove the form mouse over listener if existed previously
    if (renderedItems.length >= 1) {
        if (renderedItems[0].productType === 'tutorials') {
            form.removeEventListener('mouseover', playTheVideo);
        }
    }
    // remove all form previous childs
    if (form.firstChild !== null) {
        while (form.firstChild) {
            form.removeChild(form.firstChild)
        }
    }
}
function playTheVideo(event) {
    event.preventDefault();
    // get the event trigger class attribute name
    let triggerClass = event.path[0].className;
    if (triggerClass === 'play') {
        // get the event trigger src attribute value
        let triggerSrc = event.path[0].src;
        // go for all div -video child- srs values
        for (let i = 0; i < renderedItems.length; i++) {
            let nodeElementSrc = form.childNodes[i].firstChild.src;
            // check if the node is the trigger element
            if (triggerSrc === nodeElementSrc) {
                // check if the node src is not autoplayed
                if (triggerSrc === renderedItems[i].src) {
                    // autoplay the video
                    form.childNodes[i].firstChild.src = renderedItems[i].src + '?autoplay=1';
                } 
            }
        }
    } else {
        // turn off autoplay for all videos 
        for (let i = 0; i < renderedItems.length; i++){
            if (form.childNodes[i].firstChild.src !== renderedItems[i].src){
                form.childNodes[i].firstChild.src = renderedItems[i].src;
            }
        }
    }
}
render('books');
cart.restoreCartItems();
