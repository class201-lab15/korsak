'use strict'
let numberOfItems = 3;
// add a listner to the form
let form = document.getElementById('addToCart');
form.addEventListener('submit',add);
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
    // add to the cart
    addToTheCart(btuIndex);
}
function addToTheCart(index){
    
}
for(let i = 0; i < numberOfItems; i++){
    let div = document.createElement('div');
    form.appendChild(div);
    let img = document.createElement('img');
    div.appendChild(img);
    let p = document.createElement('p');
    div.appendChild(p);
    let btu = document.createElement('input');
    div.appendChild(btu);
    btu.setAttribute('type','submit');
    btu.setAttribute('value','buy');
}