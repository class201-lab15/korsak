'use strict'
//////////////////////////////////////////////////////////////////////////////
let numberOfallProducts =18;
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
let book10 = new Product('headline', 'https://img.freepik.com/free-vector/geometric-leaflet-with-yellow-black-lines_1201-608.jpg?size=338&ext=jpg', 250, 'a book for head line', 'books');

let tutorial1 = new Product('JavaScript', 'https://www.youtube.com/embed/Qqx_wzMmFeA', 300, 'javascript tutorials for biggener', 'tutorials');
let tutorial2 = new Product('JavaScript', 'https://www.youtube.com/embed/lhNdUVh3qCc', 320, 'javascript tutorials for biggener', 'tutorials');
let tutorial3 = new Product('JavaScript', 'https://www.youtube.com/embed/lhNdUVh3qCc', 320, 'javascript tutorials for biggener', 'tutorials');
let tutorial4 = new Product('JavaScript', 'https://www.youtube.com/embed/lhNdUVh3qCc', 320, 'javascript tutorials for biggener', 'tutorials');
let course1 = new Product('cooking', 'http://0to100academy.com/wp-content/uploads/2020/05/main-qimg-28cadbd02699c25a88e5c78d73c7babc-1-300x288.png', 400,'2022 Complete Python Bootcamp From Zero \n to Hero in Python\n Learn Python like a Professional Start from the basics and go all the way to creating \n your own applications and games\n Created by josen jeky \n starting on April 22 2022','classes');
// 'Class starts April 2, 2022. Enroll today to secure your spot! No application required.'
// 'The deadline to enroll is March 31, 2022. No application required. '`,
let course2 = new Product('cooking2', 'http://0to100academy.com/wp-content/uploads/2020/05/JavaScript-logo-1-300x300.png', 400, '2023 Complete Javascript Bootcamp From Zero \n to Hero in Javascript\n Learn Javascript like a Professional Start from the basics and go all the way to creating \n your own applications and games\n Created by italy darry \n starting on march 22 2023 ', 'classes');
let course3 = new Product('cooking2', 'https://pixelmechanics.com.sg/wp-content/uploads/2019/04/css-1200x667.jpg', 400, '2022 Complete Css Bootcamp From Zero \n to Hero in Css\n Learn Css like a Professional Start from the basics and go all the way to creating \n your own applications and games\n Created by diana jeky \n starting on April 3 2022 ', 'classes');
let course4 = new Product('cooking2', 'https://techbeacon.scdn7.secure.raxcdn.com/sites/default/files/styles/article_hero_image/public/html5-mobile-app-native-hybrid-pros-cons.jpg?itok=f2OysLvu', 400, '2022 Complete HTML From Zero \n to Hero in HTML\n Learn HTML like a Professional Start from the basics and go all the way to creating \n your own page\n Created by sandra bty \n starting on may 15 2022 ', 'classes');

////////////////////////////////////////////////////////////////////////////////

// add a listner to the form and ul-form elements
let form = document.getElementById('addToCart');
form.addEventListener('submit', add);
let ulForm = document.getElementById('itemsRenderType');
ulForm.addEventListener('submit', renderItemofTheType)
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
    if (JSON.parse(localStorage.getItem('cart')).length == 0) {
        cart.item.push(renderedItems[index]);
        cart.saveCartInLocalStorage(cart.item);
    } else if (localStorage.getItem('cart') !== null){
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
        console.log(Product.allProducts[i].productType);
        if (Product.allProducts[i].productType == type) {
            // first fill the new renderd item in the the following array
            renderedItems.push(Product.allProducts[i]);
            // second create a div to fill it by the product properties
            let div = document.createElement('div');
            let div2 = document.createElement('div');
            form.appendChild(div);
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
                    // add for form a mouse over listener for video autoplay
                    form.addEventListener('mouseover', playTheVideo);
                    break;
                case 'classes':
                    // create an image
                    let classImg = document.createElement('img');
                    div.appendChild(classImg);
                    classImg.setAttribute('src', Product.allProducts[i].src);
                    div.setAttribute('id','addClasses');

                    break;
                
            }
            // create a pragraph ///////// don't try to now what this mean///
            if ( Product.allProducts[i].productType==='classes') {
                // console.log('its a class');
               let label=document.createElement('p');
               label.className='specialParagraph'
               let label2=document.createElement('p');
               let label3=document.createElement('p');
               let label4=document.createElement('p');
               let label5=document.createElement('p');
               let label6=document.createElement('p');
               let label7=document.createElement('p');
               let section=document.createElement('section')


            //    let breakEl=document.createElement('br');
               section.appendChild(label);
               section.appendChild(label2);
               section.appendChild(label4);
               section.appendChild(label5);
               section.appendChild(label6);
               section.appendChild(label7);

               section.appendChild(label3);
               div.appendChild(section);



               let text= Object.assign(Product.allProducts[i].discription);
               let text1= Object.assign(Product.allProducts[i].price);
               console.log(text.split('\n')[0]);

               
               label.textContent=text.split('\n')[0]
               label2.textContent=text.split('\n')[1]
               label4.textContent=text.split('\n')[2]
               label5.textContent=text.split('\n')[3]
               label6.textContent=` INSTRUCTOR NAME:${text.split('\n')[4]}`
               label7.textContent=` TIME:${text.split('\n')[5]}`


               label3.textContent=`PRICE: ${text1} $`
               label.style.fontWeight='bold'
               label2.style.fontWeight='bold'
               label3.style.fontWeight='bold'
               label4.style.fontWeight='bold'
               label5.style.fontWeight='bold'


            //    label.appendChild(breakEl)
            //    label.textContent+='another test' 'testtt\n sss'
        ///////////////////////////////////////////////////////////////////////////
                
            } else {
                
                let label = document.createElement('p');
                div.appendChild(label);
                label.textContent =Product.allProducts[i].discription;
            }

      
            // create a button
            let btu = document.createElement('input');
            div.appendChild(btu);
            btu.setAttribute('type', 'submit');
            btu.setAttribute('value', 'buy');
        }
    }
}
function renderItemofTheType(event) {
    event.preventDefault();
    // define the type for the new rendering products
    let productsType = event.submitter.id;
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
            form.childNodes[i].firstChild.src = renderedItems[i].src;
        }
    }
}
render('books');
cart.restoreCartItems();


