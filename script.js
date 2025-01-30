//Hamburger btn
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

//Mission btn - go to mission section
const missionBtn = document.getElementById('mission-btn');
const missionSection = document.getElementById('mission');

missionBtn.addEventListener('click', () => {
    console.log("Clicked")
    missionSection.scrollIntoView({ behavior: 'smooth' });
});

//Cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const title = card.querySelector('.card-title');
        const subtitle = card.querySelector('.card-subtitle');
        
        //On hover show subtitle and title goes up
        title.style.transform = 'translateY(-30px)';
        subtitle.style.display = 'block';
    });

    card.addEventListener('mouseleave', () => {
        const title = card.querySelector('.card-title');
        const subtitle = card.querySelector('.card-subtitle');
        
        //Reset subtitle and title
        title.style.transform = 'translateY(0)';
        subtitle.style.display = 'none';
    });
});

//Reviews slider
const reviewsContainer = document.querySelector('.reviews-container');
const reviews = document.querySelectorAll('.review');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 100;
    reviewsContainer.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function startAutoScroll() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % reviews.length;
        updateSlider();
    }, 3000);
}

updateDots();
startAutoScroll();

//Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const company = document.getElementById("company").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && surname && email && message) {
        alert("Grazie per il Messaggio!");
        this.reset();
    } else {
        alert("Per favore, compila i campi obbligatori");
    }
});

