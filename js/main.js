
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function(item) { 
    item.addEventListener('click', function(e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });
});

const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');
btn.addEventListener('click', () => {
    menu.classList.toggle('ver');
}); 

const consultasItems = document.querySelectorAll('.menu');
consultasItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const activeItem = document.querySelector('.active');
        if (activeItem) {
            activeItem.classList.remove('active');
        }
        e.target.classList.add('active');
    });
});
