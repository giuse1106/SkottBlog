document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) { // Controlla che gli elementi esistano
        menuToggle.addEventListener('click', function() {
            // Toglie/aggiunge la classe 'active' al bottone (per l'animazione hamburger)
            this.classList.toggle('active');
            // Toglie/aggiunge la classe 'active' al menu di navigazione (per mostrarlo/nasconderlo)
            mainNav.classList.toggle('active');
        });
    }

    // Qui potresti aggiungere altre funzionalità in futuro, ad esempio:
    // - Una ricerca dinamica
    // - Un carosello di immagini
    // - Effetti di scroll
});