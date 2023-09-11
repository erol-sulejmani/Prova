// Mostra la schermata di caricamento all'avvio
window.addEventListener('DOMContentLoaded', function() {
    var loadingScreen = document.querySelector('.loading-screen');
    var loadingText = document.querySelector('.loading-text');
    var welcomeText = document.createElement('span');
    //
    welcomeText.classList.add('welcome-text');
    welcomeText.innerText = 'Benvenuto!';

    var descriptions = document.querySelectorAll('.description');
    
    setTimeout(function() {
      loadingText.style.animation = 'slideOut 1s forwards'; // Rimuovi l'animazione di dissolvenza
      
      setTimeout(function() {
        loadingText.parentNode.replaceChild(welcomeText, loadingText);
        
        // Mostra le descrizioni dopo la transizione della scritta di benvenuto
        descriptions.forEach(function(description) {
          description.style.display = 'flex';
        });
      }, 1000); // Sostituisci la scritta dopo 1 secondo
      
      setTimeout(function() {
        loadingScreen.style.display = 'none';
        document.querySelector('.container').style.display = 'block';
      }, 2000); // Imposta il timeout di 2 secondi per nascondere completamente la schermata di caricamento
    }, 1000); // Imposta il timeout di 2 secondi per avviare l'animazione di transizione
  });