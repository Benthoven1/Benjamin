// About page sidebar navigation functionality

document.addEventListener('DOMContentLoaded', function() {
    const sideMenu = document.getElementById('sideMenu');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sideMenuLinks = document.querySelectorAll('.side-menu-link');
    const sections = document.querySelectorAll('.about-content-section');

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            sideMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    sideMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 968) {
                sideMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Highlight active section on scroll
    function highlightActiveSection() {
        let scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                sideMenuLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to current section's link
                const activeLink = document.querySelector(`.side-menu-link[data-section="${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    // Scroll event listener with throttling
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            highlightActiveSection();
        });
    });

    // Initial call to highlight active section
    highlightActiveSection();

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 968) {
            const isClickInsideMenu = sideMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && sideMenu.classList.contains('active')) {
                sideMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
});
