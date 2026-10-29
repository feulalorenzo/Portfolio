// Funzione per caricare la navbar
function loadNavbar() {
    fetch('/html/nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Errore nel caricamento della navbar");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Errore:', error));
}

window.addEventListener('DOMContentLoaded', loadNavbar);
