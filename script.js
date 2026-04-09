// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll animation FIXED
const cards = document.querySelectorAll('.project-card');

function showCards() {
    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < trigger) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

// Run on scroll + on load
window.addEventListener('scroll', showCards);
window.addEventListener('load', showCards);