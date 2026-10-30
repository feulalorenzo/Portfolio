// Funzione per caricare la navbar
function loadNavbar() {
    fetch('/html/nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Error loading navigation bar");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

window.addEventListener('DOMContentLoaded', loadNavbar);
