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
            
            // Improved accessibility - update aria-expanded
            const expanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', expanded);
            navMenu.setAttribute('aria-hidden', !expanded);
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
            aiHelper.setAttribute('aria-hidden', 'false');
            
            // Focus the input field when AI helper opens
            const aiInput = document.querySelector('.ai-input input');
            if (aiInput) {
                setTimeout(() => aiInput.focus(), 100);
            }
        });
        
        // Hide AI helper when close button is clicked
        closeAiBtn.addEventListener('click', function() {
            aiHelper.style.display = 'none';
            aiHelper.setAttribute('aria-hidden', 'true');
            // Return focus to the button that opened it
            aiHelperBtn.focus();
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
                    // Show loading state
                    aiSendBtn.classList.add('btn-loading');
                    aiSendBtn.disabled = true;
                    
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
                        
                        // Remove loading state
                        aiSendBtn.classList.remove('btn-loading');
                        aiSendBtn.disabled = false;
                    }, 1000);
                    
                    // Clear input
                    aiInput.value = '';
                }
            }
        }
    }
    
    // RV Cards hover effect for better UX
    const rvCards = document.querySelectorAll('.rv-card');
    rvCards.forEach(card => {
        // Make entire card clickable for better UX
        card.addEventListener('click', function(e) {
            // Don't trigger if they're clicking a button or link inside the card
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || 
                e.target.closest('button') || e.target.closest('a')) {
                return;
            }
            
            // Feedback animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
                // In a real site, we'd navigate to the RV details page
                // window.location.href = 'rv-details.html?id=123';
            }, 100);
        });
        
        // Mark cards as interactive for accessibility
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `View details for ${card.querySelector('h3')?.textContent || 'this RV'}`);
        
        // Allow keyboard interaction
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Dealer Cards interactive behavior
    const dealerCards = document.querySelectorAll('.dealer-card');
    dealerCards.forEach(card => {
        // Same pattern as RV cards
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || 
                e.target.closest('button') || e.target.closest('a')) {
                return;
            }
            
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
                // Would navigate to dealer page in real implementation
            }, 100);
        });
        
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `View details for ${card.querySelector('h3')?.textContent || 'this dealer'}`);
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Quick filter buttons active state with visual feedback
    const filterButtons = document.querySelectorAll('.quick-filters button, .dealer-filters button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Visual feedback for selection
            this.classList.add('btn-loading');
            
            setTimeout(() => {
                filterButtons.forEach(btn => btn.classList.remove('active', 'btn-loading'));
                this.classList.add('active');
                this.classList.remove('btn-loading');
                
                // In a real implementation, this would filter the results
                // For now, add a subtle page refresh effect
                const rvGrid = document.querySelector('.rv-grid');
                if (rvGrid) {
                    rvGrid.style.opacity = '0.6';
                    setTimeout(() => {
                        rvGrid.style.opacity = '1';
                    }, 300);
                }
            }, 400);
        });
    });
    
    // Enhanced smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Scroll with easing
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Add focus to the target for better accessibility
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus({ preventScroll: true });
                
                // Highlight the section briefly
                targetElement.classList.add('section-highlight');
                setTimeout(() => {
                    targetElement.classList.remove('section-highlight');
                }, 1500);
            }
        });
    });
    
    // Form field enhancements
    const formFields = document.querySelectorAll('.search-field input, .search-field select, .form-group input, .form-group select, .form-group textarea');
    
    formFields.forEach(field => {
        // Add focused class to parent for styling
        field.addEventListener('focus', function() {
            this.closest('.search-field, .form-group').classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            if (!this.value) {
                this.closest('.search-field, .form-group').classList.remove('focused');
            }
        });
        
        // Add "has-value" class if field has a value
        if (field.value) {
            field.closest('.search-field, .form-group').classList.add('has-value');
        }
        
        field.addEventListener('input', function() {
            if (this.value) {
                this.closest('.search-field, .form-group').classList.add('has-value');
            } else {
                this.closest('.search-field, .form-group').classList.remove('has-value');
            }
        });
    });
    
    // Add a skip to content link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add a main content ID to the first main section
    const mainContent = document.querySelector('section:not(.navbar)');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
}); 