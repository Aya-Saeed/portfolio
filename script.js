
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // animate once
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));




// script.js
function adjustHeroHeight() {
    const hero = document.querySelector('.hero-img');
    if (hero) hero.style.height = window.innerHeight + 'px';
}

window.addEventListener('load', adjustHeroHeight);
window.addEventListener('resize', adjustHeroHeight);
