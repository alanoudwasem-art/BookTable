
function showError(fieldId, errorId, message) {
    document.getElementById(fieldId).classList.add('input-error');
    const errorEl = document.getElementById(errorId);
    errorEl.style.display = 'flex';
    errorEl.innerHTML = `<span class="error-circle">!</span>${message}`;
}


function hideError(fieldId, errorId) {
    document.getElementById(fieldId).classList.remove('input-error');
    document.getElementById(errorId).style.display = 'none';
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
        showError('fullName', 'nameError', 'Full name is required');
        isValid = false;
    } else {
        hideError('fullName', 'nameError');
    }

    
    const phone = document.getElementById('phoneInput').value.trim();
    if (phone === "") {
        showError('phoneInput', 'phoneError', 'Mobile number is required');
        isValid = false;
    } else if (!/^\d+$/.test(phone)) {
        showError('phoneInput', 'phoneError', 'Numbers only please');
        isValid = false;
    } else if (phone.length < 9) {
        showError('phoneInput', 'phoneError', 'Number is too short (min 9)');
        isValid = false;
    } else {
        hideError('phoneInput', 'phoneError');
    }

    
    const email = document.getElementById('emailInput').value.trim();
    if (email === "") {
        showError('emailInput', 'emailError', 'Email address is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('emailInput', 'emailError', 'Please enter a valid email (e.g. name@test.com)');
        isValid = false;
    } else {
        hideError('emailInput', 'emailError');
    }

    
    const pass = document.getElementById('passwordInput').value;
    if (pass === "") {
        showError('passwordInput', 'passwordError', 'Password is required');
        isValid = false;
    } else if (pass.length < 8) {
        showError('passwordInput', 'passwordError', 'Password is too short (min 8 characters)');
        isValid = false;
    } else {
        hideError('passwordInput', 'passwordError');
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
