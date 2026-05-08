function showError(fieldId, errorId) {
    document.getElementById(fieldId).classList.add('input-error');
    document.getElementById(errorId).style.display = 'flex';
}

function hideError(fieldId, errorId) {
    document.getElementById(fieldId).classList.remove('input-error');
    document.getElementById(errorId).style.display = 'none';
}

document.getElementById('fullName').addEventListener('blur', function() {
    this.value.trim() === "" ? showError('fullName', 'nameError') : hideError('fullName', 'nameError');
});

document.getElementById('continueBtn').onclick = function(e) {
    e.preventDefault();
    let isValid = true;

    const fields = [
        { input: 'fullName', error: 'nameError' },
        { input: 'phoneInput', error: 'phoneError' },
        { input: 'emailInput', error: 'emailError' },
        { input: 'passwordInput', error: 'passwordError' }
    ];

    fields.forEach(field => {
        const val = document.getElementById(field.input).value.trim();
        if (val === "") {
            showError(field.input, field.error);
            isValid = false;
        } else {
            hideError(field.input, field.error);
        }
    });

    if (isValid) {
        window.location.href = "terms.html"; [span_6](start_span)//[span_6](end_span)
    }
};
