const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function mostrarSorpresa() {
    document.getElementById('sorpresa').style.display = 'block';
    crearAnimaciones();
}

function crearAnimaciones() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
            cat.remove();
            cat2.remove();
        }, 15000); 
    }
}
