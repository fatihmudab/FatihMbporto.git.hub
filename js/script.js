// Scroll header animation
window.addEventListener('scroll', function() {
    const header = document.querySelector('.head-1');
    const scrollPosition = window.scrollY;

    // Add shadow and background change to header on scroll
    if (scrollPosition > 50) {
        header.style.backgroundColor = 'rgba(31, 36, 45, 0.9)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.backgroundColor = 'var(--bg-color)';
        header.style.boxShadow = 'none';
    }

    // Reveal sections with parallax and fade effects
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        let windowHeight = window.innerHeight;
        
        if (scrollPosition >= sectionTop - windowHeight + sectionHeight / 3) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
        }
    });

    // Project hover effects on scroll
    const projects = document.querySelectorAll('.pj-1 img, .pj-2 img');
    projects.forEach(project => {
        if (isElementInViewport(project)) {
            project.style.filter = 'grayscale(0%)';
            project.style.transform = 'scale(1.05)';
            project.style.transition = 'all 0.4s ease';
        }
    });
});

// Helper function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = this.getAttribute('href');
        if (target.startsWith('#')) {
            const targetSection = document.querySelector(target);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});


// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'var(--text-color)';
        if (link.getAttribute('href').includes(current)) {
            link.style.color = 'var(--main-color)';
        }
    });
});

// Preload animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});