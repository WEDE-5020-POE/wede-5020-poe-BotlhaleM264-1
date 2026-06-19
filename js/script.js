// ========================================
// BUDDY'S COMFORT KITCHEN - MAIN JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // 1. ENQUIRY FORM VALIDATION (10 Marks)
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('enquiryName').value.trim();
            const email = document.getElementById('enquiryEmail').value.trim();
            const phone = document.getElementById('enquiryPhone').value.trim();
            const date = document.getElementById('enquiryDate').value;
            const guests = document.getElementById('enquiryGuests').value;
            const eventType = document.getElementById('enquiryEventType').value;
            const message = document.getElementById('enquiryMessage').value.trim();
            
            // Validation errors
            let errors = [];
            
            // Validate Name
            if (name === '') {
                errors.push('Please enter your full name.');
            }
            
            // Validate Email
            if (email === '') {
                errors.push('Please enter your email address.');
            } else if (!isValidEmail(email)) {
                errors.push('Please enter a valid email address.');
            }
            
            // Validate Phone 
            if (phone !== '' && !isValidPhone(phone)) {
                errors.push('Please enter a valid phone number (e.g., 0821234567).');
            }
            
            // Validate Date
            if (date === '') {
                errors.push('Please select your event date.');
            }
            
            // Validate Guests
            if (guests === '' || parseInt(guests) < 1) {
                errors.push('Please enter the number of guests (minimum 1).');
            }
            
            // Validate Event Type
            if (eventType === '') {
                errors.push('Please select an event type.');
            }
            
            // Validate Message
            if (message === '') {
                errors.push('Please tell us about your event.');
            }
            
            // Show errors or process
            const errorDiv = document.getElementById('enquiryErrors');
            const responseDiv = document.getElementById('enquiryResponse');
            
            if (errors.length > 0) {
                errorDiv.innerHTML = '<div style="background: #fee; color: #c00; padding: 15px; border-radius: 10px; border-left: 4px solid #c00;">' +
                    '<strong>Please fix the following errors:</strong><ul style="margin: 10px 0 0 20px;">' +
                    errors.map(e => '<li>' + e + '</li>').join('') +
                    '</ul></div>';
                errorDiv.style.display = 'block';
                responseDiv.style.display = 'none';
            } else {
                errorDiv.style.display = 'none';
                responseDiv.style.display = 'block';
                responseDiv.innerHTML = '<div style="background: #e8f5e9; color: #2e7d32; padding: 20px; border-radius: 10px; border-left: 4px solid #2e7d32;">' +
                    '<strong>✅ Thank you, ' + name + '!</strong><br><br>' +
                    'Your enquiry has been received. We will contact you within 24 hours.<br><br>' +
                    '<strong>Event Details:</strong><br>' +
                    '📅 Date: ' + date + '<br>' +
                    '👥 Guests: ' + guests + '<br>' +
                    '🎉 Event: ' + eventType + '<br><br>' +
                    '📞 Need to speak to us immediately? Call (27) 63 776 1239' +
                    '</div>';
                // Reset form
                enquiryForm.reset();
            }
        });
    }

    // 2. CONTACT FORM VALIDATION
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
          const name = document.getElementById('enquiryName').value.trim();
          const email = document.getElementById('enquiryEmail').value.trim();
          const phone = document.getElementById('enquiryPhone').value.trim();
          const date = document.getElementById('enquiryDate').value;
          const guests = document.getElementById('enquiryGuests').value;
          const eventType = document.getElementById('enquiryEventType').value;
          const budget = document.getElementById('enquiryBudget').value;
          const dietary = document.getElementById('enquiryDietary').value;
          const message = document.getElementById('enquiryMessage').value.trim();
            
            let errors = [];
            
            if (name === '') {
                errors.push('Please enter your name.');
            }
            
            if (email === '') {
                errors.push('Please enter your email address.');
            } else if (!isValidEmail(email)) {
                errors.push('Please enter a valid email address.');
            }
            
            if (phone !== '' && !isValidPhone(phone)) {
                errors.push('Please enter a valid phone number (e.g., 0821234567).');
            }

            if (date === '') {
                errors.push('Please select your event date.');
            }

            if (guests === '' || parseInt(guests) < 1) {
                errors.push('Please enter the number of guests (minimum 1).');
            }

            if (eventType === '') {
                errors.push('Please select an event type.');
            }

            if (message === '') {
                errors.push('Please tell us about your event.');
            }
            // Display errors or success message
            const errorDiv = document.getElementById('contactErrors');
            const responseDiv = document.getElementById('contactResponse');
            
            if (errors.length > 0) {
                errorDiv.innerHTML = '<div style="background: #fee; color: #c00; padding: 15px; border-radius: 10px; border-left: 4px solid #c00;">' +
                    '<strong>Please fix the following errors:</strong><ul style="margin: 10px 0 0 20px;">' +
                    errors.map(e => '<li>' + e + '</li>').join('') +
                    '</ul></div>';
                errorDiv.style.display = 'block';
                responseDiv.style.display = 'none';
            } else {
                errorDiv.style.display = 'none';
                responseDiv.style.display = 'block';
                responseDiv.innerHTML = '<div style="background: #e8f5e9; color: #2e7d32; padding: 20px; border-radius: 10px; border-left: 4px solid #2e7d32;">' +
                    '<strong>✅ Thank you, ' + name + '!</strong><br><br>' +
                    'Your enquiry has been received. We will contact you within 24 hours.<br><br>' +
                    '<strong>Event Details:</strong><br>' +
                    'Date: ' + date + '<br>' +
                    'Guests: ' + guests + '<br>' +
                    'Event: ' + eventType + '<br>' +
                    'Budget: R' + budget + '<br>' +
                    'Dietary: ' + dietary + '<br><br>' +
                    'Need to speak to us immediately? Call (27) 63 776 1239' +
                    '</div>';
                // Reset form
                enquiryForm.reset();
            }
        });
    }
    // 3. GALLERY LIGHTBOX
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');
    
    if (galleryImages.length > 0) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                lightbox.style.display = 'flex';
                lightboxImg.src = this.src;
                lightboxImg.alt = this.alt;
            });
        });
        
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                lightbox.style.display = 'none';
            });
        }
        
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    }

    // 4. DYNAMIC SEARCH - Menu Filter
    const searchInput = document.getElementById('menuSearch');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const filter = this.value.toLowerCase();
            const items = document.querySelectorAll('.menu-item, .package-card, .dish-item');
            
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // 5. ACCORDION / FAQ (Interactive Elements)
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const isOpen = content.style.display === 'block';
                
                // Close all accordion items
                document.querySelectorAll('.accordion-content').forEach(c => {
                    c.style.display = 'none';
                });
                
                // Open clicked one if it was closed
                if (!isOpen) {
                    content.style.display = 'block';
                }
            });
        });
    }

    // 6. HELPER FUNCTIONS
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function isValidPhone(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone.replace(/\s/g, ''));
    }

    console.log('✅ Buddy\'s Comfort Kitchen - JavaScript Loaded Successfully!');
});