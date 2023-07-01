
/*aqui inicia la funcion 1*/
/*const currentItem = document.querySelector('.foto2');
menuItems.forEach(function(item) { 
    item.addEventListener('click', function(e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });
});*/




/*aqui finaliza la funcion 1*/


/*aca inicia la funcion 2*/ 
const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');
btn.addEventListener('click', () => {
    menu.classList.toggle('ver');
}); 
/*aqui finaliza la funcion 2*/


const consultasItems = document.querySelectorAll('#consultas');
consultasItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const activeItem = document.querySelector('.active');
        if (activeItem) {
            activeItem.classList.remove('active');
        }
        e.target.classList.add('active');
    });
});
/*En este ejemplo, hemos creado tres botones con la clase .foto. Al hacer clic en uno de los botones, se aplicará la clase .active al botón seleccionado, lo que cambiará su color de fondo a rojo según las reglas CSS definidas.

Recuerda colocar el archivo CSS en la misma ubicación que el archivo HTML y el archivo JavaScript en la etiqueta <head> del archivo HTML.*/






