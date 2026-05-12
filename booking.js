
document.addEventListener('DOMContentLoaded', () => {
    const selectedRestaurant = localStorage.getItem('selectedRestaurant');

    
    if (!selectedRestaurant) {
        window.location.href = 'index.html';
    }
});


function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('input-error');
    
    
    let errorEl = document.getElementById(fieldId + '-error');
    if (!errorEl) {
        errorEl = document.createElement('small');
        errorEl.id = fieldId + '-error';
        errorEl.className = 'error-message';
        errorEl.style.color = 'red';
        errorEl.style.display = 'block';
        errorEl.style.marginTop = '5px';
        field.parentNode.appendChild(errorEl);
    }
    errorEl.innerHTML = `<span class="error-circle">!</span> ${message}`;
}


function hideError(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('input-error');
    const errorEl = document.getElementById(fieldId + '-error');
    if (errorEl) errorEl.remove();
}





function confirmBooking() {
    let isValid = true;
    
    const guests = document.getElementById('guests');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const mobile = document.getElementById('mobile');

    
    if (!guests.value) {
        showError('guests', 'Please select number of guests');
        isValid = false;
    } else { hideError('guests'); }

    
    if (!date.value) {
        showError('date', 'Please select a date');
        isValid = false;
    } else { hideError('date'); }

    
    if (!time.value) {
        showError('time', 'Please select time');
        isValid = false;
    } else { hideError('time'); }

    
    if (mobile.value.trim() === "") {
        showError('mobile', 'Mobile number is required');
        isValid = false;
    } else if (!/^\d+$/.test(mobile.value)) {
        showError('mobile', 'Numbers only please');
        isValid = false;
    } else if (mobile.value.length < 9) {
        showError('mobile', 'Number is too short');
        isValid = false;
    } else { hideError('mobile'); }

   if (isValid) {
       const currentUser = localStorage.getItem('username'); 
       let bookings = JSON.parse(localStorage.getItem(`bookings_${currentUser}`)) || [];

        const newBooking = {
            restaurantName: localStorage.getItem('selectedRestaurant') || 'Restaurant',
            location: 'Riyadh, Saudi Arabia',
            
            time: `${date.value} ${time.value}`, 
            
           seating: localStorage.getItem('selectedSeating') || 'Standard Area',
            guests: guests.value,
            mobile: mobile.value
        };

        bookings.push(newBooking);
        localStorage.setItem(`bookings_${currentUser}`, JSON.stringify(bookings));

        alert("Booking Successful!");
        window.location.href = "confirmation.html"; 
    }
}
