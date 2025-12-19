document.addEventListener('DOMContentLoaded', () => {

    /* ========================================
       Header Scroll Effect
    ======================================== */
    /* ========================================
       Header Scroll Effect
    ======================================== */
    const header = document.querySelector('.modern-header');
    const heroSection = document.querySelector('.modern-hero');

    if (header) {
        if (heroSection) {
            // Homepage behavior: Transparent -> White on scroll
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        } else {
            // Subpages behavior: Always White (scrolled style)
            header.classList.add('scrolled');
        }
    }

    /* ========================================
       Mobile Menu Toggle
    ======================================== */
    /* ========================================
       Mobile Menu Toggle with Overlay
    ======================================== */
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');

    // Create overlay element dynamically
    const navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);

    if (mobileMenuBtn && navLinks) {
        const toggleMenu = () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        };

        mobileMenuBtn.addEventListener('click', toggleMenu);
        navOverlay.addEventListener('click', toggleMenu);

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }

    /* ========================================
       Stats Counter Animation
    ======================================== */
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString('ar-EG');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString('ar-EG');
            }
        }, 16);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section-modern');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    /* ========================================
       Back to Top Button
    ======================================== */
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ========================================
       Smooth Scroll for Anchor Links
    ======================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* ========================================
       Scroll Animations (AOS-like)
    ======================================== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

        const delay = el.getAttribute('data-aos-delay');
        if (delay) {
            el.style.transitionDelay = `${delay}ms`;
        }

        observer.observe(el);
    });

    // Add CSS class for animated state
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .aos-animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);

    /* ========================================
       Project Filtering (if exists)
    ======================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                // Remove active class from all
                filterButtons.forEach(b => {
                    b.classList.remove('active');
                });

                // Activate clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.5s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    /* ========================================
       Lazy Loading Images
    ======================================== */
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    /* ========================================
       Form Validation (if contact form exists)
    ======================================== */
    const contactForm = document.querySelector('form[action="#"]');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            let isValid = true;

            if (name && name.value.trim() === '') {
                isValid = false;
                name.style.borderColor = 'red';
            } else if (name) {
                name.style.borderColor = '';
            }

            if (email && !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                isValid = false;
                email.style.borderColor = 'red';
            } else if (email) {
                email.style.borderColor = '';
            }

            if (message && message.value.trim() === '') {
                isValid = false;
                message.style.borderColor = 'red';
            } else if (message) {
                message.style.borderColor = '';
            }

            if (isValid) {
                alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
                contactForm.reset();
            } else {
                alert('الرجاء ملء جميع الحقول المطلوبة بشكل صحيح.');
            }
        });
    }

    /* ========================================
       Console Welcome Message
    ======================================== */
    console.log('%c🏗️ شركة خالد حمد الخالدي للمقاولات', 'font-size: 20px; font-weight: bold; color: #0A2540;');
    console.log('%cموقع احترافي مستوحى من أفضل الممارسات العالمية', 'font-size: 14px; color: #00B67A;');
});
