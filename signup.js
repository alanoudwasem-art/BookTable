function showError(fieldId, message) {
    const inputField = document.getElementById(fieldId);
    const parentGroup = inputField.closest('.input-group');
    
    inputField.classList.add('input-error');

    let existingError = parentGroup.nextElementSibling;
    if (existingError && existingError.classList.contains('error-message')) {
        existingError.remove();
    }

    const errorEl = document.createElement('small');
    errorEl.className = 'error-message';
    errorEl.style.display = 'flex';
    errorEl.innerHTML = `<span class="error-circle">!</span>${message}`;
    
    parentGroup.after(errorEl);
}

function hideError(fieldId) {
    const inputField = document.getElementById(fieldId);
    const parentGroup = inputField.closest('.input-group');
    
    inputField.classList.remove('input-error');
    
    const errorEl = parentGroup.nextElementSibling;
    if (errorEl && errorEl.classList.contains('error-message')) {
        errorEl.remove();
    }
}

function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
}

document.getElementById('continueBtn').onclick = function(e) {
    e.preventDefault(); 
    let isValid = true;

    const name = document.getElementById('fullName').value.trim();
    if (name === "") {
        showError('fullName', 'Full name is required');
        isValid = false;
    } else {
        hideError('fullName');
    }

    const phone = document.getElementById('phoneInput').value.trim();
    if (phone === "") {
        showError('phoneInput', 'Mobile number is required');
        isValid = false;
    } else if (!/^\d+$/.test(phone)) {
        showError('phoneInput', 'Numbers only please');
        isValid = false;
    } else if (phone.length < 9) {
        showError('phoneInput', 'Number is too short (min 9)');
        isValid = false;
    } else {
        hideError('phoneInput');
    }

    const email = document.getElementById('emailInput').value.trim();
    if (email === "") {
        showError('emailInput', 'Email address is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('emailInput', 'Please enter a valid email');
        isValid = false;
    } else {
        hideError('emailInput');
    }

    const pass = document.getElementById('passwordInput').value;
    if (pass === "") {
        showError('passwordInput', 'Password is required');
        isValid = false;
    } else if (pass.length < 8) {
        showError('passwordInput', 'Minimum 8 characters required');
        isValid = false;
    } else {
        hideError('passwordInput');
    }

    if (isValid) {
        localStorage.setItem('username', name); 
        localStorage.setItem('isLoggedIn', 'true'); 

        if (document.referrer.includes('mybooking.html')) {
            window.location.href = "mybooking.html"; 
        } else {
            window.location.href = "index.html"; 
        }
    }
};
