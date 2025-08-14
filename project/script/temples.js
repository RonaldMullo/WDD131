// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };
        
        // In a real application, you would send this to a server
        console.log('Form submitted:', formData);
        
        // Display success message
        alert('Thank you for your message. We will contact you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Simple animation for service sections
document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service');
    
    services.forEach((service, index) => {
        // Add delay for staggered animation
        service.style.transitionDelay = `${index * 0.1}s`;
        
        // Add intersection observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(service);
    });
});

// Dark mode toggle if you want
function initThemeSwitcher() {
    const themeToggle = document.createElement('button');
    themeToggle.id = 'themeToggle';
    themeToggle.textContent = 'Dark Mode';
    themeToggle.style.position = 'fixed';
    themeToggle.style.bottom = '20px';
    themeToggle.style.right = '20px';
    themeToggle.style.padding = '10px';
    themeToggle.style.backgroundColor = 'var(--primary-color)';
    themeToggle.style.color = 'white';
    themeToggle.style.border = 'none';
    themeToggle.style.borderRadius = '5px';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.zIndex = '1000';
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('darkTheme', isDark);
        themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
    
    // Check for saved theme preference
    if (localStorage.getItem('darkTheme') === 'true') {
        document.body.classList.add('dark-theme');
    }
}

// Initialize theme switcher
document.addEventListener('DOMContentLoaded', initThemeSwitcher);