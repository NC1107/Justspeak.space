/**
 * JustSpeak.space - Visual Quotes Generator
 * Creates randomly positioned, styled text elements on the page
 */

(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        fonts: [
            'Georgia, serif',
            'Times, serif', 
            'Roboto, sans-serif',
            'Arial, sans-serif',
            'Verdana, sans-serif',
            'Helvetica, sans-serif',
            'Palatino, serif',
            'Perpetua, serif'
        ],
        colors: [
            '#64c8ff',  // Light blue
            '#ff6b9d',  // Pink
            '#95f985',  // Light green
            '#ffd93d',  // Yellow
            '#ff9f43',  // Orange
            '#a55eea',  // Purple
            '#26d0ce',  // Teal
            '#fd79a8'   // Rose
        ],
        minFontSize: 120,
        maxFontSize: 450,
        fadeInDuration: 600
    };

    // Show initial instructions
    function showInstructions() {
        if (confirm('For the best experience, zoom out as far as you can! Click OK to continue.')) {
            return true;
        }
        return false;
    }

    // Get random value from array
    function getRandomFromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Get random number between min and max
    function getRandomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Create and style text element
    function createTextElement(text) {
        const element = document.createElement('div');
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Reserve space for the input form at the bottom
        const reservedBottomSpace = 120;
        const availableHeight = windowHeight - reservedBottomSpace;
        
        // Style the element
        element.style.cssText = `
            position: absolute;
            color: ${getRandomFromArray(CONFIG.colors)};
            font-family: ${getRandomFromArray(CONFIG.fonts)};
            font-size: ${getRandomBetween(CONFIG.minFontSize, CONFIG.maxFontSize)}%;
            left: ${Math.random() * Math.max(0, windowWidth - 300)}px;
            top: ${Math.random() * Math.max(0, availableHeight - 100)}px;
            opacity: 0;
            transition: opacity ${CONFIG.fadeInDuration}ms ease-in;
            word-wrap: break-word;
            max-width: 400px;
            pointer-events: none;
            z-index: 10;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            font-weight: 600;
            line-height: 1.2;
        `;
        
        element.textContent = text;
        element.setAttribute('role', 'presentation');
        element.setAttribute('aria-hidden', 'true');
        
        return element;
    }

    // Add text to page with animation
    function addTextToPage(text) {
        if (!text.trim()) return;
        
        const element = createTextElement(text);
        document.body.appendChild(element);
        
        // Trigger fade-in animation
        requestAnimationFrame(() => {
            element.style.opacity = '1';
        });
        
        console.log(`Added text: "${text}" at position (${element.style.left}, ${element.style.top})`);
    }

    // Handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();
        
        const input = document.getElementById('messageInput');
        const text = input.value.trim();
        
        if (text) {
            addTextToPage(text);
            input.value = '';
            input.focus();
        }
    }

    // Add example messages to the word wall
    function addExampleMessages() {
        const examples = [
            "Welcome to JustSpeak.space!",
            "Share your thoughts freely",
            "Every voice matters ✨",
            "Be kind, be creative",
            "Your words have power",
            "Connect through expression",
            "Dream big, speak loud"
        ];
        
        // Add examples with a slight delay between each
        examples.forEach((message, index) => {
            setTimeout(() => {
                addTextToPage(message);
            }, index * 800 + 1000); // Start after 1 second, then 800ms apart
        });
    }

    // Initialize the application
    function init() {
        // Show instructions
        showInstructions();
        
        // Set up form event listener
        const form = document.getElementById('textForm');
        if (form) {
            form.addEventListener('submit', handleFormSubmit);
        }
        
        // Focus on input
        const input = document.getElementById('messageInput');
        if (input) {
            input.focus();
        }
        
        // Add example messages after a short delay
        setTimeout(addExampleMessages, 500);
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();