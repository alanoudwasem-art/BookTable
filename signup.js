// 1. وظيفة إظهار الخطأ مع نص متغير
function showError(fieldId, errorId, message) {
    document.getElementById(fieldId).classList.add('input-error');
    const errorEl = document.getElementById(errorId);
    errorEl.style.display = 'flex';
    errorEl.innerHTML = `<span class="error-circle">!</span>${message}`;
}

// 2. وظيفة إخفاء الخطأ
function hideError(fieldId, errorId) {
    document.getElementById(fieldId).classList.remove('input-error');
    document.getElementById(errorId).style.display = 'none';
}

// 3. دالة فحص صيغة الإيميل
function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
}

// 4. التحقق عند الضغط على الزر (المنع النهائي)
document.getElementById('continueBtn').onclick = function(e) {
    e.preventDefault(); // منع الانتقال التلقائي
    let isValid = true;

    // --- فحص الاسم الكامل ---
    const name = document.getElementById('fullName').value.trim();
    if (name === "") {
        showError('fullName', 'nameError', 'Full name is required');
        isValid = false;
    } else {
        hideError('fullName', 'nameError');
    }

    // --- فحص رقم الجوال ---
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

    // --- فحص الإيميل ---
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

    // --- فحص الباسورد ---
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

    // --- القرار النهائي ---
   // --- القرار النهائي ---
if (isValid) {
    localStorage.setItem('username', name); // أضفت هذا السطر لحفظ اسم المستخدم
    localStorage.setItem('isLoggedIn', 'true'); // تفعيل حالة الدخول

    // التوجيه الذكي
    if (document.referrer.includes('mybooking.html')) {
        window.location.href = "index.html"; // يرجعه للهوم إذا كان جاي من صفحة الحجوزات
    } else {
        window.location.href = "index.html"; // التوجيه الافتراضي
    }
}
};
