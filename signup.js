[span_1](start_span)// وظائف لإظهار وإخفاء رسائل الخطأ والتنسيقات الحمراء[span_1](end_span)
function showError(fieldId, errorId, message) {
    const inputField = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);
    
    inputField.classList.add('input-error');
    errorElement.style.display = 'flex';
    errorElement.innerHTML = `<span class="error-circle">!</span>${message}`;
}

function hideError(fieldId, errorId) {
    const inputField = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);
    
    inputField.classList.remove('input-error');
    errorElement.style.display = 'none';
}

[span_2](start_span)// دالة التحقق من صيغة الإيميل[span_2](end_span)
function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
}

// --- التحقق الديناميكي عند ترك الحقل (Blur Events) ---

// 1. الاسم الكامل (يمنع تركه فارغاً)
document.getElementById('fullName').addEventListener('blur', function() {
    if (this.value.trim() === "") {
        showError('fullName', 'nameError', 'This field is required');
    } else {
        hideError('fullName', 'nameError');
    }
});

// 2. رقم الجوال (أرقام فقط ولا يقل عن 9)
document.getElementById('phoneInput').addEventListener('blur', function() {
    const val = this.value.trim();
    const isNumbers = /^\d+$/.test(val);
    if (val === "") {
        showError('phoneInput', 'phoneError', 'Mobile number is required');
    } else if (!isNumbers) {
        showError('phoneInput', 'phoneError', 'Please enter numbers only');
    } else if (val.length < 9) {
        showError('phoneInput', 'phoneError', 'Minimum 9 digits required');
    } else {
        hideError('phoneInput', 'phoneError');
    }
});

[span_3](start_span)// 3. البريد الإلكتروني (التحقق من الصيغة @)[span_3](end_span)
document.getElementById('emailInput').addEventListener('blur', function() {
    const val = this.value.trim();
    if (val === "") {
        showError('emailInput', 'emailError', 'Email is required');
    } else if (!validateEmail(val)) {
        showError('emailInput', 'emailError', 'Invalid email format');
    } else {
        hideError('emailInput', 'emailError');
    }
});

[span_4](start_span)// 4. كلمة المرور (لا تقل عن 8 خانات)[span_4](end_span)
document.getElementById('passwordInput').addEventListener('blur', function() {
    if (this.value.length < 8) {
        showError('passwordInput', 'passwordError', 'Must be at least 8 characters');
    } else {
        hideError('passwordInput', 'passwordError');
    }
});

[span_5](start_span)// --- التحقق النهائي عند الضغط على الزر[span_5](end_span) ---
document.getElementById('continueBtn').onclick = function(e) {
    e.preventDefault(); [span_6](start_span)// يمنع الانتقال التلقائي[span_6](end_span)
    
    let isValid = true;

    // جلب القيم الحالية
    const name = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phoneInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const pass = document.getElementById('passwordInput').value;

    // فحص الاسم
    if (name === "") { showError('fullName', 'nameError', 'Required'); isValid = false; }
    
    // فحص الجوال
    if (!/^\d+$/.test(phone) || phone.length < 9) { 
        showError('phoneInput', 'phoneError', 'Invalid phone'); isValid = false; 
    }
    
    [span_7](start_span)// فحص الإيميل[span_7](end_span)
    if (!validateEmail(email)) { 
        showError('emailInput', 'emailError', 'Invalid email'); isValid = false; 
    }
    
    [span_8](start_span)// فحص الباسورد[span_8](end_span)
    if (pass.length < 8) { 
        showError('passwordInput', 'passwordError', 'Too short'); isValid = false; 
    }

    [span_9](start_span)// الانتقال فقط إذا كان كل شيء صحيحاً (isValid == true)[span_9](end_span)
    if (isValid) {
        localStorage.setItem('isLoggedIn', 'true'); // تفعيل حالة الدخول للمطاعم
        window.location.href = "booking.html"; // وجهيه للصفحة المطلوبة
    } else {
        alert("Please correct the errors before proceeding."); [span_10](start_span)// تنبيه في حال وجود أخطاء[span_10](end_span)
    }
};
