// // Mobile Menu Toggle
// document.addEventListener('DOMContentLoaded', function() {
//     const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
//     const mainNav = document.querySelector('.main-nav');
    
//     if (mobileMenuToggle && mainNav) {
//         mobileMenuToggle.addEventListener('click', function() {
//             mainNav.classList.toggle('active');
//             this.classList.toggle('active');
//         });
//     }
    
//     // FAQ Accordion
//     const faqItems = document.querySelectorAll('.faq-item');
    
//     faqItems.forEach(item => {
//         const question = item.querySelector('.faq-question');
        
//         question.addEventListener('click', () => {
//             // Close all other items
//             faqItems.forEach(otherItem => {
//                 if (otherItem !== item) {
//                     otherItem.classList.remove('active');
//                 }
//             });
            
//             // Toggle current item
//             item.classList.toggle('active');
            
//             // Change icon
//             const icon = item.querySelector('.faq-toggle i');
//             if (item.classList.contains('active')) {
//                 icon.classList.remove('fa-plus');
//                 icon.classList.add('fa-minus');
//             } else {
//                 icon.classList.remove('fa-minus');
//                 icon.classList.add('fa-plus');
//             }
//         });
//     });
    
//     // Testimonial Slider (Simple Auto-scroll)
//     const testimonialSlider = document.querySelector('.testimonials-slider');
    
//     if (testimonialSlider) {
//         const testimonials = testimonialSlider.querySelectorAll('.testimonial');
//         let currentIndex = 0;
        
//         function scrollToNextTestimonial() {
//             currentIndex = (currentIndex + 1) % testimonials.length;
//             testimonials[currentIndex].scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'nearest',
//                 inline: 'start'
//             });
//         }
        
//         // Auto-scroll every 5 seconds
//         setInterval(scrollToNextTestimonial, 5000);
//     }
    
//     // Smooth Scrolling for Anchor Links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             const targetId = this.getAttribute('href');
//             if (targetId === '#') return;
            
//             const targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
    
//     // Scroll Reveal Animation
//     const revealElements = document.querySelectorAll('.service-card, .feature, .testimonial');
    
//     function checkReveal() {
//         const windowHeight = window.innerHeight;
//         const revealPoint = 150;
        
//         revealElements.forEach(element => {
//             const elementTop = element.getBoundingClientRect().top;
            
//             if (elementTop < windowHeight - revealPoint) {
//                 element.classList.add('revealed');
//             }
//         });
//     }
    
//     // Initial check
//     checkReveal();
    
//     // Check on scroll
//     // window.addEventListener('scroll', checkReveal);
// });

// Booking Form Validation
function validateBookingForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const service = document.getElementById('service');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const address = document.getElementById('address');
    
    let isValid = true;
    
    // Reset error messages
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
    
    // Name validation
    if (name.value.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('email-error').textContent = 'Valid email is required';
        isValid = false;
    }
    
    // Phone validation
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone.value.replace(/\D/g, ''))) {
        document.getElementById('phone-error').textContent = 'Valid phone number is required';
        isValid = false;
    }
    
    // Service validation
    if (service.value === '') {
        document.getElementById('service-error').textContent = 'Please select a service';
        isValid = false;
    }
    
    // Date validation
    if (date.value === '') {
        document.getElementById('date-error').textContent = 'Date is required';
        isValid = false;
    } else {
        const selectedDate = new Date(date.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            document.getElementById('date-error').textContent = 'Date cannot be in the past';
            isValid = false;
        }
    }
    
    // Time validation
    if (time.value === '') {
        document.getElementById('time-error').textContent = 'Time is required';
        isValid = false;
    }
    
    // Address validation
    if (address.value.trim() === '') {
        document.getElementById('address-error').textContent = 'Address is required';
        isValid = false;
    }
    
    if (isValid) {
        // Show booking confirmation
        document.getElementById('booking-form').style.display = 'none';
        document.getElementById('booking-confirmation').style.display = 'block';
        
        // Display booking details in confirmation
        document.getElementById('confirm-name').textContent = name.value;
        document.getElementById('confirm-service').textContent = service.options[service.selectedIndex].text;
        document.getElementById('confirm-date').textContent = formatDate(date.value);
        document.getElementById('confirm-time').textContent = time.value;
        
        // In a real application, you would submit the form data to a server here
        // For demo purposes, we're just showing the confirmation
    }
    
    return isValid;
}

// Format date for display
function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Date picker min date (prevent past dates)
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});
