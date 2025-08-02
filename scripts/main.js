// Update year and last modified date
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Set last modified date
    const lastModified = new Date(document.lastModified);
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('last-modified').textContent = lastModified.toLocaleDateString('en-US', options);
});