// DOM Elements
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const header = document.querySelector('#navbar');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Toggle mobile menu
function toggleNav() {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('nav-open');
}

burger.addEventListener('click', toggleNav);

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            toggleNav();
        }
    });
});

// Header scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll up
        header.style.transform = 'translateY(0)';
    }
    
    // Add background when not at top
    if (scrollTop > 50) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, false);



// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(li => {
        li.querySelector('a').classList.remove('active');
        if (li.querySelector('a').getAttribute('href') === `#${current}`) {
            li.querySelector('a').classList.add('active');
        }
    });
});



// Skills animation on scroll
const skillItems = document.querySelectorAll('.skill-item');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

skillItems.forEach(item => {
    observer.observe(item);
});

// Add to CSS: Animation for skills items
document.head.insertAdjacentHTML('beforeend', `
<style>
.skill-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease, transform 0.6s ease;
}
.skill-item.animate {
    opacity: 1;
    transform: translateY(0);
}
.nav-links a.active {
    color: var(--primary-color);
    font-weight: 600;
}
.error {
    color: #ef4444;
    font-weight: 500;
}
.success {
    color: #10b981;
    font-weight: 500;
}
</style>
`);

function changeMode(){
    const body =  document.body;
    const icon = document.querySelector('#toggle i');


    body.classList.toggle('light');

    if (body.classList.contains('light')){
        icon.classList.replace('fa-sun', 'fa-moon');
    }
    else{
        icon.classList.replace('fa-moon','fa-sun')
    }
}
