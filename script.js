// Function to open a modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Event listener for the document to handle clicks outside modals
function handleOutsideClick(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
}

// Event listener for closing modals when clicking the close button
function handleCloseButtonClick() {
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            closeModal(this.closest('.modal').id);
        });
    });
}

// Function to initialize event listeners
function initializeModalEvents() {
    // Open modal on button click
    const contactButtons = document.querySelectorAll('.open-contact-modal');
    contactButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            openModal('contactModal');
        });
    });

    const termsButtons = document.querySelectorAll('.open-terms-modal');
    termsButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            openModal('termsModal');
        });
    });

    const privacyButtons = document.querySelectorAll('.open-privacy-modal');
    privacyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            openModal('privacyModal');
        });
    });

    // Handle clicks outside of modals
    window.addEventListener('click', handleOutsideClick);

    // Handle closing modals with the close button
    handleCloseButtonClick();
}

// Function to toggle FAQ answers
function toggleFAQAnswer(event) {
    const faqQuestion = event.currentTarget;
    const faqAnswer = faqQuestion.nextElementSibling;

    if (faqAnswer.style.display === 'block') {
        faqAnswer.style.display = 'none';
        faqQuestion.classList.remove('active');
    } else {
        faqAnswer.style.display = 'block';
        faqQuestion.classList.add('active');
    }
}

// Initialize FAQ section event listeners
function initializeFAQEvents() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', toggleFAQAnswer);
    });
}

// Initialize all events when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeModalEvents();
    initializeFAQEvents();
});