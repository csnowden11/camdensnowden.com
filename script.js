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

// Mobile menu functionality with improved animations and touch handling
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
const toggleMobileMenu = () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
};

mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileMenu();
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar-content')) {
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Handle touch events for mobile menu
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
});

const handleSwipeGesture = () => {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (navLinks.classList.contains('active') && swipeDistance > swipeThreshold) {
        // Swipe right to close menu
        toggleMobileMenu();
    } else if (!navLinks.classList.contains('active') && swipeDistance < -swipeThreshold) {
        // Swipe left to open menu
        toggleMobileMenu();
    }
};

// Enhanced smooth scrolling with mobile menu handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
        
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
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
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'fade-in');
            // Add stagger delay based on index
            setTimeout(() => {
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and their children
document.querySelectorAll('section, .fade-in').forEach(element => {
    // Prepare element for animation
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    observer.observe(element);
    
    // Animate children with stagger effect if it's a section
    if (element.tagName.toLowerCase() === 'section') {
        element.querySelectorAll('.animate-on-scroll').forEach((child, index) => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(20px)';
            child.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(child);
        });
    }
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
    handleScroll();
    document.body.classList.add('loaded');
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Initialize and configure the map
function initMap() {
    const locations = [
        { name: "Colorado", coords: { lat: 39.5501, lng: -105.7821 } },
        { name: "Michigan", coords: { lat: 44.3148, lng: -85.6024 } },
        { name: "New York", coords: { lat: 41.4021, lng: -73.9538 } }, // West Point location
        { name: "Georgia", coords: { lat: 32.7695, lng: -84.9722 } },
        { name: "Germany", coords: { lat: 50.5559, lng: 9.6810 } },
        { name: "California", coords: { lat: 37.8719, lng: -122.2585 } }, // Berkeley location
        { name: "South Korea", coords: { lat: 37.5665, lng: 126.9780 } },
        { name: "Arizona", coords: { lat: 34.0489, lng: -111.0937 } }
    ];

    const map = new google.maps.Map(document.getElementById('world-map'), {
        zoom: 2,
        center: { lat: 30, lng: 0 },
        styles: [
            {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{ color: "#1f2937" }]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#e2e8f0" }]
            },
            {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{ color: "#f8fafc" }]
            }
        ]
    });

    // Add markers with custom animation
    locations.forEach((location, index) => {
        const marker = new google.maps.Marker({
            position: location.coords,
            map: map,
            title: location.name,
            animation: google.maps.Animation.DROP,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: "#FDB515",
                fillOpacity: 1,
                strokeColor: "#003262",
                strokeWeight: 2
            }
        });

        // Add info window
        const infoWindow = new google.maps.InfoWindow({
            content: `<div style="padding: 10px;"><strong>${location.name}</strong></div>`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });

        // Stagger the marker drop animation
        setTimeout(() => {
            marker.setMap(map);
        }, index * 200);
    });
}

// Newsletter Modal Functionality
const newsletterModal = document.getElementById('newsletter-modal');
const newsletterTrigger = document.querySelector('.newsletter-trigger');
const modalClose = document.querySelector('.modal-close');
const newsletterForm = document.getElementById('newsletter-form');

const toggleModal = () => {
    newsletterModal.classList.toggle('active');
    document.body.classList.toggle('modal-open');
};

newsletterTrigger?.addEventListener('click', toggleModal);
modalClose?.addEventListener('click', toggleModal);

// Close modal when clicking outside
newsletterModal?.addEventListener('click', (e) => {
    if (e.target === newsletterModal) {
        toggleModal();
    }
});

// Handle newsletter form submission
newsletterForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    
    try {
        // Replace with your actual newsletter service endpoint
        const response = await fetch('/api/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });

        if (response.ok) {
            alert('Thank you for subscribing!');
            toggleModal();
            newsletterForm.reset();
        } else {
            throw new Error('Subscription failed');
        }
    } catch (error) {
        alert('Sorry, there was an error. Please try again later.');
    }
});

// Blog card hover effects
const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Reading time calculator
document.querySelectorAll('.blog-content').forEach(content => {
    const text = content.textContent;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute
    
    const timeSpan = content.querySelector('.blog-meta span:last-child');
    if (timeSpan) {
        timeSpan.innerHTML = `<i class="far fa-clock"></i> ${readingTime} min read`;
    }
});

// Dark Mode Functionality
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const getSavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return prefersDarkScheme.matches ? 'dark' : 'light';
};

// Apply theme
const applyTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update toggle button icon
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
};

// Initialize theme
applyTheme(getSavedTheme());

// Theme toggle click handler
themeToggle?.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

// Timeline Navigation
const timeline = document.querySelector('.timeline');
const timelineItems = document.querySelectorAll('.timeline-item');
const prevBtn = document.querySelector('.timeline-nav-btn.prev');
const nextBtn = document.querySelector('.timeline-nav-btn.next');

let currentIndex = 0;

const updateTimelineNavigation = () => {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === timelineItems.length - 1;

    // Scroll timeline item into view
    timelineItems[currentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    // Update active state
    timelineItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
};

prevBtn?.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateTimelineNavigation();
    }
});

nextBtn?.addEventListener('click', () => {
    if (currentIndex < timelineItems.length - 1) {
        currentIndex++;
        updateTimelineNavigation();
    }
});

// Initialize timeline navigation
updateTimelineNavigation();

// Create directory for resume if it doesn't exist
const createResumeDirectory = async () => {
    try {
        await fetch('/api/create-directory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ path: 'files' })
        });
    } catch (error) {
        console.error('Error creating directory:', error);
    }
};

// Call directory creation on load
createResumeDirectory();

// Skills Animation
const skillCategories = document.querySelectorAll('.skill-category');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

skillCategories.forEach(category => {
    skillObserver.observe(category);
});

// Testimonials Carousel
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonials = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function updateTestimonials() {
    const offset = -currentTestimonial * 100;
    testimonialTrack.style.transform = `translateX(${offset}%)`;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonials();
}

function previousTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonials();
}

// Auto advance testimonials
setInterval(nextTestimonial, 5000);

// Language Selector
const languageToggle = document.querySelector('.language-toggle');
const languageDropdown = document.querySelector('.language-dropdown');

languageToggle?.addEventListener('click', () => {
    languageDropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
        languageDropdown?.classList.remove('active');
    }
});

// Social Share
const shareToggle = document.querySelector('.share-toggle');
const shareDropdown = document.querySelector('.share-dropdown');

shareToggle?.addEventListener('click', () => {
    shareDropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.social-share')) {
        shareDropdown?.classList.remove('active');
    }
});

async function shareContent(platform) {
    const url = window.location.href;
    const title = document.title;
    const text = "Check out Camden Snowden's portfolio!";

    switch (platform) {
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
            break;
        case 'linkedin':
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
            break;
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
            break;
        case 'copy':
            try {
                await navigator.clipboard.writeText(url);
                alert('Link copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy link:', err);
            }
            break;
    }
}

// Search Functionality
const searchTrigger = document.querySelector('.search-trigger');
const searchOverlay = document.querySelector('.search-overlay');
const searchInput = document.querySelector('.search-container input');
const searchClose = document.querySelector('.search-close');
const searchResults = document.querySelector('.search-results');

searchTrigger?.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    searchInput.focus();
});

searchClose?.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
});

// Close search on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay?.classList.contains('active')) {
        searchOverlay.classList.remove('active');
    }
});

// Search functionality
let searchTimeout;
searchInput?.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        performSearch(query);
    }, 300);
});

function performSearch(query) {
    // Get all searchable content
    const sections = document.querySelectorAll('section');
    const results = [];

    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query)) {
            const heading = section.querySelector('h2, h3')?.textContent || 'Section';
            results.push({
                title: heading,
                excerpt: getExcerpt(text, query),
                element: section
            });
        }
    });

    displaySearchResults(results);
}

function getExcerpt(text, query) {
    const index = text.indexOf(query);
    const start = Math.max(0, index - 30);
    const end = Math.min(text.length, index + query.length + 30);
    let excerpt = text.slice(start, end);
    
    if (start > 0) excerpt = '...' + excerpt;
    if (end < text.length) excerpt = excerpt + '...';
    
    return excerpt;
}

function displaySearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found</p>';
        return;
    }

    const html = results.map(result => `
        <div class="search-result">
            <h3>${result.title}</h3>
            <p>${result.excerpt}</p>
        </div>
    `).join('');

    searchResults.innerHTML = html;

    // Add click handlers to results
    document.querySelectorAll('.search-result').forEach((result, index) => {
        result.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            results[index].element.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Accessibility Enhancements
const skipLink = document.querySelector('.skip-link');
skipLink?.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    target?.focus();
    target?.scrollIntoView({ behavior: 'smooth' });
});

// High Contrast Mode
function setHighContrast(enabled) {
    document.documentElement.setAttribute('data-contrast', enabled ? 'high' : 'normal');
    localStorage.setItem('highContrast', enabled);
}

// Initialize high contrast from localStorage
const highContrast = localStorage.getItem('highContrast') === 'true';
setHighContrast(highContrast); 