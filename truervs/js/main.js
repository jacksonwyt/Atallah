// Import configuration
import config from './config.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log(`TrueRVs app running on ${config.SITE_URL}`);
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // AI Helper functionality
    const aiHelperBtn = document.querySelector('.ai-helper-btn');
    const aiHelper = document.querySelector('.ai-helper');
    const closeAiBtn = document.querySelector('.close-ai');
    
    if (aiHelperBtn && aiHelper && closeAiBtn) {
        // Show AI helper when the button is clicked
        aiHelperBtn.addEventListener('click', function() {
            aiHelper.style.display = 'block';
        });
        
        // Hide AI helper when close button is clicked
        closeAiBtn.addEventListener('click', function() {
            aiHelper.style.display = 'none';
        });
        
        // AI message submission (placeholder for now)
        const aiInput = document.querySelector('.ai-input input');
        const aiSendBtn = document.querySelector('.ai-input button');
        
        if (aiInput && aiSendBtn) {
            aiSendBtn.addEventListener('click', function() {
                sendAiMessage();
            });
            
            aiInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendAiMessage();
                }
            });
            
            function sendAiMessage() {
                const message = aiInput.value.trim();
                if (message) {
                    // Here you would typically send the message to a backend
                    // For now, just show a placeholder response
                    const aiBody = document.querySelector('.ai-helper-body');
                    
                    // Create user message element
                    const userMessage = document.createElement('div');
                    userMessage.className = 'user-message';
                    userMessage.innerHTML = `<p>You: ${message}</p>`;
                    aiBody.insertBefore(userMessage, document.querySelector('.ai-input'));
                    
                    // Create AI response element (placeholder)
                    setTimeout(function() {
                        const aiResponse = document.createElement('div');
                        aiResponse.className = 'ai-response';
                        aiResponse.innerHTML = '<p>RV Assistant: I\'m currently in demo mode. In the full version, I\'ll help you find the perfect RV based on your needs!</p>';
                        aiBody.insertBefore(aiResponse, document.querySelector('.ai-input'));
                        
                        // Auto-scroll to bottom
                        aiBody.scrollTop = aiBody.scrollHeight;
                    }, 500);
                    
                    // Clear input
                    aiInput.value = '';
                }
            }
        }
    }
    
    // RV Cards hover effect for better UX
    const rvCards = document.querySelectorAll('.rv-card');
    rvCards.forEach(card => {
        card.addEventListener('click', function() {
            // In a real implementation, this would navigate to the detailed view
            // For now, we'll just add a simple click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
    
    // Dealer Cards click effect
    const dealerCards = document.querySelectorAll('.dealer-card');
    dealerCards.forEach(card => {
        card.addEventListener('click', function() {
            // In a real implementation, this would navigate to the dealer page
            // For now, we'll just add a simple click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
    
    // Quick filter buttons active state
    const filterButtons = document.querySelectorAll('.quick-filters button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // In a real implementation, this would filter the RVs
        });
    });
    
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add custom styling to the search input on focus
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    }
}); 