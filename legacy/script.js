// Mobile Menu Toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = menuToggle.querySelectorAll('span');
    if (menuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(11px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-11px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 229, 255, 0.1)';
        nav.style.borderColor = 'rgba(0, 229, 255, 0.3)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.05)';
        nav.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }
});

// Simple Chart Generator (Placeholder)
document.querySelectorAll('.mini-chart').forEach(chart => {
    // Logic for dynamic chart drawing could go here
});

// Intersection Observer for entry animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.hero-text, .glass-card').forEach(el => {
    observer.observe(el);
});
