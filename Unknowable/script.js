// ===================================
// SMOOTH SCROLLING
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});

// ===================================
// SCROLL ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.about-text, .about-highlights, .music-card, .highlight-card, ' +
        '.team-feature, .press-card, .music-integration, .team-organization, .press-links, ' +
        '.video-container, .story-act, .story-themes, .team-member, .cast-section, .resource-card'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ===================================
// DYNAMIC CARD HOVER EFFECTS
// ===================================

const cards = document.querySelectorAll('.highlight-card, .music-card, .press-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', function(e) {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===================================
// ACTIVE NAV LINK ON SCROLL (for single-page sections only)
// ===================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

// Only activate scroll-based nav highlighting if we have sections AND the nav links use anchor links
if (sections.length > 0) {
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        // Only update active state for anchor-based nav links (starting with #)
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                link.classList.remove('active');
                if (href === `#${current}`) {
                    link.classList.add('active');
                }
            }
        });
    });
}

// ===================================
// TYPING EFFECT FOR HERO TITLE (Optional)
// ===================================

function createGlowEffect() {
    const heroTitle = document.querySelector('.hero-title-emphasis');

    if (heroTitle) {
        setInterval(() => {
            heroTitle.style.textShadow = `
                0 0 10px rgba(196, 165, 87, 0.8),
                0 0 20px rgba(196, 165, 87, 0.6),
                0 0 30px rgba(196, 165, 87, 0.4)
            `;

            setTimeout(() => {
                heroTitle.style.textShadow = `
                    0 0 5px rgba(196, 165, 87, 0.5),
                    0 0 10px rgba(196, 165, 87, 0.3)
                `;
            }, 1000);
        }, 3000);
    }
}

// Initialize glow effect
createGlowEffect();

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy operations
const efficientScroll = debounce(() => {
    // Scroll operations are already defined above
}, 10);

window.addEventListener('scroll', efficientScroll);

// ===================================
// PRELOADER (Optional Enhancement)
// ===================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Fade in hero elements sequentially
    const heroElements = document.querySelectorAll('.fade-in, .fade-in-delay-1, .fade-in-delay-2, .fade-in-delay-3, .fade-in-delay-4');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 150);
    });
});

// ===================================
// ENHANCED SCROLL INDICATOR
// ===================================

const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================

// Ensure keyboard navigation works smoothly
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add focus styles for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-nav *:focus {
        outline: 2px solid var(--color-accent) !important;
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// ===================================
// HERO PARTICLE EFFECTS (Poster-inspired)
// ===================================

function createHeroParticles() {
    const particlesContainer = document.getElementById('heroParticles');
    if (!particlesContainer) return;

    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 20);
        particle.style.setProperty('--ty', (Math.random() - 0.5) * 20);
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles on page load
document.addEventListener('DOMContentLoaded', createHeroParticles);

// ===================================
// BASIC SMOOTH TRANSITION
// ===================================

function createSmoothTransition(targetUrl) {
    // Create simple fade overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #1a0b2e;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.5s ease;
    `;
    document.body.appendChild(overlay);

    // Fade in overlay
    setTimeout(() => overlay.style.opacity = '1', 10);

    // Navigate to target after fade
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 500);
}

// Intercept navigation clicks for smooth transition
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Apply smooth transition for highlights.html and about.html
            if (href === 'highlights.html' || href === 'about.html') {
                e.preventDefault();
                createSmoothTransition(href);
            }
        });
    });
});

// ===================================
// CONSOLE EASTER EGG
// ===================================

console.log('%cTHE UNKNOWABLE', 'font-size: 24px; font-weight: bold; color: #c44569;');
console.log('%cAn Operatic Ballet in Two Acts', 'font-size: 14px; color: #2d1654;');
console.log('%cComposed by Benjamin T. Rossen', 'font-size: 12px; font-style: italic;');
console.log('%c\nInterested in the code? Visit https://github.com', 'font-size: 10px; color: #666;');
