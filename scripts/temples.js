// Variables con 3 letras
const cpy = document.getElementById('cpy');
const lst = document.getElementById('lst');
const ham = document.getElementById('ham');
const nav = document.querySelector('nav ul');

// Footer dinámico
cpy.textContent = new Date().getFullYear();
lst.textContent = document.lastModified;

// Menú hamburguesa
ham.addEventListener('click', () => {
    nav.classList.toggle('show');
    ham.textContent = nav.classList.contains('show') ? '✕' : '☰';
});

// Cerrar menú al hacer clic en enlace
document.querySelectorAll('nav a').forEach(lnk => {
    lnk.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            nav.classList.remove('show');
            ham.textContent = '☰';
        }
    });
});