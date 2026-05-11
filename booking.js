// أضيفي الكود هنا في بداية الملف
document.addEventListener('DOMContentLoaded', () => {
    const selectedRestaurant = localStorage.getItem('selectedRestaurant');

    // إذا دخل الصفحة وما فيه مطعم مختار، يرجعه للهوم فوراً
    if (!selectedRestaurant) {
        window.location.href = 'index.html';
    }
});

// وظيفة إظهار الخطأ
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('input-error');
    
    // إنشاء عنصر رسالة خطأ إذا لم يكن موجوداً
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

// وظيفة إخفاء الخطأ
function hideError(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('input-error');
    const errorEl = document.getElementById(fieldId + '-error');
    if (errorEl) errorEl.remove();
}

// الدالة الرئيسية لفحص النموذج (تُستدعى عند كل تغيير)
function checkForm() {
    const guests = document.getElementById('guests').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const mobile = document.getElementById('mobile').value.trim();
    const btn = document.getElementById('bookingBtn');

    // منطق تفعيل/تعطيل الزر (بصرياً فقط)
    if (guests && date && time && /^\d{9,}$/.test(mobile)) {
        btn.classList.remove('disabled');
        btn.disabled = false;
    } else {
        btn.classList.add('disabled');
        btn.disabled = true;
    }
}

// دالة تأكيد الحجز (تُنفذ عند الضغط على الزر)
function confirmBooking() {
    let isValid = true;
    
    const guests = document.getElementById('guests');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const mobile = document.getElementById('mobile');

    // فحص عدد الضيوف
    if (!guests.value) {
        showError('guests', 'Please select number of guests');
        isValid = false;
    } else { hideError('guests'); }

    // فحص التاريخ
    if (!date.value) {
        showError('date', 'Please select a date');
        isValid = false;
    } else { hideError('date'); }

    // فحص الوقت
    if (!time.value) {
        showError('time', 'Please select time');
        isValid = false;
    } else { hideError('time'); }

    // فحص الجوال (أرقام فقط وطول مناسب)
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

    // الانتقال لصفحة التأكيد فقط إذا كان كل شيء تمام
    if (isValid) {
        // يمكنك هنا حفظ بيانات الحجز في localStorage إذا رغبتِ
        alert("Booking Successful!"); // اختيارياً
        window.location.href = "confirmation.html"; // تأكدي من وجود هذه الصفحة
    }
}
