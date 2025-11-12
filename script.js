// HF Pathways - Main JavaScript

// ==================== NAVIGATION SCROLL EFFECT ====================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Show/hide scroll to top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
});

// ==================== SCROLL TO TOP FUNCTION ====================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==================== SMOOTH SCROLLING FOR ANCHOR LINKS ====================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==================== DOWNLOAD PAGE FUNCTION ====================
function downloadPage() {
    alert('PDF download functionality would be implemented here.\nThis would generate a comprehensive PDF of all Heart Failure Pathways.\n\nFor production, this would connect to a PDF generation service.');
}

// ==================== DOWNLOAD SECTION FUNCTION ====================
function downloadSection(section) {
    alert('Downloading ' + section + ' section as PDF.\nThis would generate a printable PDF of this specific section.');
}

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe step cards, info cards, and other animated elements
    document.querySelectorAll('.step-card, .info-card, .sign-card, .principle-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

// ==================== TREATMENT TAB SWITCHING (Page 3) ====================
function showTreatment(type) {
    // Hide all treatment contents
    const contents = document.querySelectorAll('.treatment-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected treatment content
    const selectedContent = document.getElementById(type + '-content');
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Add active class to clicked tab
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Scroll to content smoothly
    if (selectedContent) {
        selectedContent.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
}

// ==================== CONSOLE MESSAGE ====================
console.log('%c HF Pathways - Heart Failure Diagnostic and Treatment Pathways ', 'background: #0066cc; color: white; font-size: 16px; padding: 10px;');
console.log('%c Evidence-based guidance for Primary Care professionals ', 'color: #0066cc; font-size: 14px;');
console.log('%c NHS Mid Yorkshire Teaching NHS Trust ', 'color: #005EB8; font-size: 12px; font-weight: bold;');
