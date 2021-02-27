'use strict'
let numberOfallProducts = 6;
let renderedItems = [];
// construct all the products objects 
let Product = function(name,src,price,discription,productType){
    this.name = name;
    this.src = src;
    this.price = price;
    this.discription = discription;
    this.productType = productType;
    Product.allProducts.push(this);
}
Product.allProducts = [];
// create products
let book1 = new Product('headline','https://img.freepik.com/free-vector/geometric-leaflet-with-yellow-black-lines_1201-608.jpg?size=338&ext=jpg',250,'a book for head line','books');
let book2 = new Product('annual report','https://img.freepik.com/free-vector/nice-wavy-blue-annual-report-business-brochure-design_1017-27437.jpg',285,'a book for annual report','books');
let tutorial1 = new Product('JavaScript','https://www.youtube.com/embed/Qqx_wzMmFeA',300,'javascript tutorials for biggener','tutorials');
let tutorial2 = new Product('JavaScript','https://www.youtube.com/embed/lhNdUVh3qCc',320,'javascript tutorials for biggener','tutorials');
let course1 = new Product('cooking','https://sattvikfoods.com/wp-content/uploads/2019/04/cooking.jpg',400,'a cooking online class','classes');
let course2 = new Product('cooking','https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/32/03.jpg',400,'a cooking online class','classes');
// add a listner to the form and ul-form elements
let form = document.getElementById('addToCart');
form.addEventListener('submit',add);
let ulForm = document.getElementById('itemsRenderType');
ulForm.addEventListener('submit',renderType)
// TO DO when a button is clicked in the form
function add(event){
    event.preventDefault();
    // no. of butttons counter
    let noOfBtu = 0;
    // empty the previous clicked button from id = clicked
    for(let i = 0; i < form.childNodes.length; i++){
        let div = form.childNodes[i];
        if(div.childNodes.length !== 0){
            for (let j = 0; j < div.childNodes.length; j++){
                let nodeElement = div.childNodes[j];
                if (nodeElement.id == 'clicked'){
                    nodeElement.removeAttribute("id");
                } 
            }
            noOfBtu++;
        }
    }
    // determine the clicked button
    let btu = event.submitter;
    // determine the clicked button index
    btu.setAttribute('id','clicked');
    let btuIndex;
    for (let i = 0; i < noOfBtu; i++){
        let btuId = event.target[i].id;
        if (btuId == btu.id){
            btuIndex = i;
            break;
        }
    }
    // add item to the cart
    addToTheCart(btuIndex);
}
function addToTheCart(index){
    console.log(index);
}
function render(type){
    // remove the previous type rendered products 
    removeRendered();
    // empty the rendered items array from previous products
    renderedItems = [];
    // show the new type renderd products
    for(let i = 0; i < numberOfallProducts; i++){
        if (Product.allProducts[i].productType == type){
            // first fill the new renderd item in the the following array
            renderedItems.push(Product.allProducts[i]);
            // second create a div to fill it by the product properties
            let div = document.createElement('div');
            form.appendChild(div);
            switch (type){
                case 'books':
                    let bookImg = document.createElement('img');
                    div.appendChild(bookImg);
                    bookImg.setAttribute('src',Product.allProducts[i].src);
                    break;
                case 'tutorials':
                    let video = document.createElement('iframe');
                    div.appendChild(video);
                    video.setAttribute('src',Product.allProducts[i].src);
                    video.setAttribute('class','play');
                    // add for form a mouse over listener for video autoplay
                    form.addEventListener('mouseover',playTheVideo);
                    break;
                case 'classes':
                    let classImg = document.createElement('img');
                    div.appendChild(classImg);
                    classImg.setAttribute('src',Product.allProducts[i].src);
                    break;          
            }
            let p = document.createElement('p');
            div.appendChild(p);
            p.textContent = Product.allProducts[i].discription;
            let btu = document.createElement('input');
            div.appendChild(btu);
            btu.setAttribute('type','submit');
            btu.setAttribute('value','buy');
        }
    }
}
function renderType(event){
    event.preventDefault();
    // define the type for the new rendering products
    let productsType = event.submitter.id;
    render(productsType);
}
function removeRendered(){
    // remove the form mouse over listener if existed previously
    if (renderedItems.length >= 1){
        if(renderedItems[0].productType === 'tutorials'){
            form.removeEventListener('mouseover',playTheVideo);
        }
    }
    // remove all form previous childs
    if (form.firstChild !== null){
        while (form.firstChild){
            form.removeChild(form.firstChild)
        }
    }
}
render('books');
function playTheVideo(event){
    event.preventDefault();
    let triggerClass = event.path[0].className;
        if(triggerClass === 'play'){
            console.log('the video was hovered');
            console.log(event.path[0].src);
        }
}