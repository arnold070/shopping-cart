let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShoppingg');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        Image: '1.png',
        Price: 12000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        Image: '2.png',
        price: 10000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        Image: '3.png',
        price: 10000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        Image: '4.png',
        price: 10000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        Image: '5.png',
        price: 10000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        Image: '6.png',
        price: 10000
    },
];
let listCards = [];
function initApp(){
    products.forEach(value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.cclasList.add('item');
        newDiv.innerHTML = `
        <img src="image/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()} </div>
        <button onclick="addToCard(${key})">Add To Card</button>
        `;
    }
}