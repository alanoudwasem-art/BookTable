// وظائف إظهار وإخفاء الخطأ
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

// التحقق من الإيميل
function validateEmail(email) {
    [span_3](start_span)const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;[span_3](end_span)
    return pattern.test(email);
}

[span_4](start_span)// التنبيهات الفورية (Dynamic Validation)[span_4](end_span)
document.getElementById('fullName').addEventListener('blur', function() {
    this.value.trim() === "" ? showError('fullName', 'nameError', 'Name is required') : hideError('fullName', 'nameError');
});

document.getElementById('phoneInput').addEventListener('blur', function() {
    const val = this.value.trim();
    if (val === "") showError('phoneInput', 'phoneError', 'Required');
    else if (!/^\d+$/.test(val)) showError('phoneInput', 'phoneError', 'Numbers only');
    else if (val.length < 9) showError('phoneInput', 'phoneError', 'Min 9 digits');
    else hideError('phoneInput', 'phoneError');
});

document.getElementById('emailInput').addEventListener('blur', function() {
    const val = this.value.trim();
    if (!validateEmail(val)) showError('emailInput', 'emailError', 'Invalid email');
    else hideError('emailInput', 'emailError');
});

document.getElementById('passwordInput').addEventListener('blur', function() {
    this.value.length < 8 ? showError('passwordInput', 'passwordError', 'Min 8 chars') : hideError('passwordInput', 'passwordError');
});

[span_5](start_span)// التحقق النهائي عند الضغط على الزر[span_5](end_span)
document.getElementById('continueBtn').onclick = function(e) {
    e.preventDefault();
    let isValid = true;

    const inputs = [
        { id: 'fullName', err: 'nameError', check: () => document.getElementById('fullName').value.trim() !== "" },
        { id: 'phoneInput', err: 'phoneError', check: () => /^\d{9,}$/.test(document.getElementById('phoneInput').value.trim()) },
        { id: 'emailInput', err: 'emailError', check: () => validateEmail(document.getElementById('emailInput').value.trim()) },
        { id: 'passwordInput', err: 'passwordError', check: () => document.getElementById('passwordInput').value.length >= 8 }
    ];

    inputs.forEach(input => {
        if (!input.check()) {
            showError(input.id, input.err, 'Correct this field');
            isValid = false;
        } else {
            hideError(input.id, input.err);
        }
    });

    if (isValid) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = "booking.html";
    }
};
