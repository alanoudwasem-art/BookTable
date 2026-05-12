document.addEventListener('DOMContentLoaded', () => {
    const accountContent = document.getElementById('account-content');

   
    const user = localStorage.getItem('username'); 
    const email = localStorage.getItem('email') || 'Not provided';

    if (user) {
        
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


function signOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    
    window.location.reload();
}
