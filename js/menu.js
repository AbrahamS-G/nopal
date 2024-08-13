function menuOpciones(pagina){
    window.location.href = (pagina);
}
document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu');
    var menuButton = document.getElementById('menu-button');
    var checkMenu = document.getElementById('check-menu');

    if (!menu.contains(event.target) && event.target !== menuButton) {
        checkMenu.checked = false;
    }
});