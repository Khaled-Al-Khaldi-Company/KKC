document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------
       Mobile Menu Logic
    ---------------------------------------------------- */
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle icon between Hamburger (☰) and Close (✕)
            if (navLinks.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '&#10005;'; // X symbo
                mobileMenuBtn.style.color = 'var(--color-secondary)';
            } else {
                mobileMenuBtn.innerHTML = '&#9776;'; // Hamburger
                mobileMenuBtn.style.color = 'var(--color-primary)';
            }
        });
    }

    /* ----------------------------------------------------
       Smooth Scroll for Anchor Links
    ---------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '&#9776;';
                }
            }
        });
    });

    /* ----------------------------------------------------
       Scroll Animations (Intersection Observer)
    ---------------------------------------------------- */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Target elements to animate
    const animatedElements = document.querySelectorAll('.service-card, .section-title, .hero-content, .footer-column');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        // Stagger delay for service cards
        if (el.classList.contains('service-card')) {
            el.style.transitionDelay = `${index * 0.1}s`;
        }
        observer.observe(el);
    });

    // CSS class to trigger animation (will be added by observer)
    // We inject this style dynamically to avoid breaking existing CSS if JS fails
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);


    /* ----------------------------------------------------
       Project Filtering
    ---------------------------------------------------- */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                // Remove active class from all
                filterButtons.forEach(b => {
                    b.classList.remove('active');
                    b.classList.remove('btn-primary');
                    b.classList.add('btn-secondary');
                    // Clean inline styles if any
                    b.style.backgroundColor = '';
                    b.style.color = '';
                });

                // Activate clicked button
                btn.classList.add('active');
                btn.classList.remove('btn-secondary');
                btn.classList.add('btn-primary');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        // Add animation for filtering
                        card.style.animation = 'fadeInUp 0.5s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});
