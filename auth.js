
function checkLoginAndBook() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        window.location.href = 'booking.html';
    } else {
        window.location.href = 'signup.html';
    }
}
