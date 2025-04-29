// Utility function for debouncing
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Mobile menu functionality with improved animations
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Enhanced smooth scrolling with offset calculation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

// Enhanced navbar scroll behavior
const handleScroll = debounce(() => {
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle('scrolled', scrolled);
    
    // Update active section in navigation
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const id = section.getAttribute('id');
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${id}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}, 10);

window.addEventListener('scroll', handleScroll);

// Enhanced intersection observer with stagger effect
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add stagger delay based on index
            setTimeout(() => {
                entry.target.classList.add('fade-in');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and their children
document.querySelectorAll('section').forEach(section => {
    // Prepare section for animation
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
    
    // Animate children with stagger effect
    section.querySelectorAll('.animate-on-scroll').forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(element);
    });
});

// Smooth parallax effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', debounce(() => {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }, 10));
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial scroll check
    handleScroll();
    
    // Add smooth appearance to initial view
    document.body.classList.add('loaded');
}); 