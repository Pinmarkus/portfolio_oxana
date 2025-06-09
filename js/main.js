document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate on Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease',
            once: true,
            offset: 100
        });
    }

    // Mobile Menu Toggle with improved handling
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
        
        // Close menu when nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });
    }

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            dots[i].classList.remove('active');
        });
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });

    // Language Switcher
    const langButtons = document.querySelectorAll('.language-switcher button');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
            
            // Update active button
            langButtons.forEach(button => button.classList.remove('active'));
            btn.classList.add('active');
        });
    });

        // Contact form now uses FormSubmit.co service

    // Set current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Make sure all images are visible
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.removeAttribute('loading');
    });

    // Apply initial language
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLanguage);
    
    // Set active language button
    const activeButton = document.querySelector(`.language-switcher button[data-lang="${savedLanguage}"]`);
    if (activeButton) {
        langButtons.forEach(button => button.classList.remove('active'));
        activeButton.classList.add('active');
    }
});

// Function to change website language
function changeLanguage(language) {
    // Save language preference
    localStorage.setItem('selectedLanguage', language);
    currentLanguage = language;
    
    // Update all text elements with translations
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        
        // Navigate through the language data object to find the translation
        let translation = languageData[language];
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }
        
        if (translation) {
            // Set text content or specific attributes based on element type
            if (element.tagName === 'INPUT' && element.type !== 'submit') {
                element.placeholder = translation;
            } else if (element.tagName === 'INPUT' && element.type === 'submit' || element.tagName === 'BUTTON') {
                element.value = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update document language for accessibility
    document.documentElement.lang = language;
} 