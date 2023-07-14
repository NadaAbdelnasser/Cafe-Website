let navber = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');
let cartItem = document.querySelector('.cart-items-container');
let cartBtn = document.querySelector('#cart-btn');
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');



menuBtn.addEventListener('click', function(){
    navber.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
});

cartBtn.addEventListener('click', function(){
    cartItem.classList.toggle('active');
    navber.classList.remove('active');
    searchForm.classList.remove('active');
});

searchBtn.addEventListener('click', function(){
    navber.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.toggle('active');
});


