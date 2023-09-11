window.addEventListener('DOMContentLoaded', function() { 
    var descriptions = document.querySelectorAll('.description');
    setTimeout(function() {
        // Mostra le descrizioni dopo la transizione della scritta di benvenuto
        descriptions.forEach(function(description) {
          description.style.display = 'flex';
        },100);
    });
});