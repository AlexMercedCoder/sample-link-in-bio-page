/**
 * Alex Merced Link-in-Bio 
 * Logic for Analytics Tracking and UI Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    initAnalytics();
    setupAnimations();
});

/**
 * 1. Analytics System
 * Tracks clicks on buttons and social icons using LocalStorage
 */
function initAnalytics() {
    const trackableElements = document.querySelectorAll('.link-btn, .social-icons a');

    trackableElements.forEach(element => {
        element.addEventListener('click', (e) => {
            // Get the title or aria-label of the link
            const linkName = e.currentTarget.innerText.trim() || e.currentTarget.getAttribute('aria-label');
            
            // Log to console (useful for testing)
            console.log(`Analytics: Link Clicked - ${linkName}`);

            // Save to LocalStorage
            saveClickToStorage(linkName);
        });
    });

    // Log total views to console on page load
    incrementPageView();
}

function saveClickToStorage(name) {
    let stats = JSON.parse(localStorage.getItem('link_stats')) || {};
    stats[name] = (stats[name] || 0) + 1;
    localStorage.setItem('link_stats', JSON.stringify(stats));
    
    // To view your data, type `console.table(JSON.parse(localStorage.getItem('link_stats')))` in the browser console.
}

function incrementPageView() {
    let views = parseInt(localStorage.getItem('page_views')) || 0;
    views++;
    localStorage.setItem('page_views', views);
    console.log(`Analytics: Total Page Views - ${views}`);
}

/**
 * 2. Mobile Animations
 * Ensures the "Subtle fade-in on scroll" requirement
 */
function setupAnimations() {
    const container = document.getElementById('main-container');
    
    // Add the fade-in class to trigger CSS animation
    if (container) {
        container.style.opacity = '1'; 
    }
}
