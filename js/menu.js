window.addEventListener('DOMContentLoaded', function() {
    // Gestione del menu di navigazione per dispositivi mobili
    var hamburger = document.querySelector('.hamburger');
    var navigation = document.querySelector('.navigation');
        
    hamburger.addEventListener('click', function() {
        navigation.classList.toggle('open');
    });
});