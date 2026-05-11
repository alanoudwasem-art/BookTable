document.addEventListener('DOMContentLoaded', () => {
    const accountContent = document.getElementById('account-content');

    // التحقق من وجود بيانات المستخدم في التخزين
    const user = localStorage.getItem('username'); // افترضنا أنك تخزنين الاسم عند التسجيل
    const email = localStorage.getItem('email') || 'Not provided';

    if (user) {
        // إذا كان مسجل دخول، اعرض معلوماته
        accountContent.innerHTML = `
            <div class="profile-card">
                <div class="user-avatar">👤</div>
                <h2>Welcome, ${user}!</h2>
                <div class="info-group">
                    <p><strong>Username:</strong> ${user}</p>
                    <p><strong>Email:</strong> ${email}</p>
                </div>
                <button class="btn-signout" onclick="signOut()">Sign Out</button>
            </div>
        `;
    } else {
        // إذا لم يكن مسجل دخول، اعرض خيار تسجيل الدخول
        accountContent.innerHTML = `
            <div class="auth-card">
                <div class="user-avatar">🔒</div>
                <h2>Access Denied</h2>
                <p>Please sign in to view your profile and manage account settings.</p>
                <a href="signup.html" class="btn-signin">Sign In / Register</a>
            </div>
        `;
    }
});

// وظيفة تسجيل الخروج
function signOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    // إعادة تحميل الصفحة لتحديث الشكل
    window.location.reload();
}
