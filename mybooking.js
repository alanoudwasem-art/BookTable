  document.addEventListener('DOMContentLoaded', () => {
            const contentArea = document.getElementById('content-area');
            
            
            const user = localStorage.getItem('username'); 
            const bookings = JSON.parse(localStorage.getItem(`bookings_${user}`)) || [];

            if (!user) {
                
                contentArea.innerHTML = `
                    <div class="login-msg">
                        <span style="font-size: 50px;">👤</span>
                        <h2>Sign In Required</h2>
                        <p>Please log in to your account to view and manage your table reservations.</p>
                        <a href="signup.html" class="btn-action">Sign In / Register</a>
                    </div>`;
            } else if (bookings.length === 0) {
                
                contentArea.innerHTML = `
                    <div class="empty-msg">
                        <span style="font-size: 50px;">🍽️</span>
                        <h2>No Active Bookings</h2>
                        <p>It looks like you haven't booked a table yet. Discover the best restaurants in the city!</p>
                        <a href="index.html" class="btn-action">Browse Restaurants</a>
                    </div>`;
            } else {
                
                let bookingsHTML = '<h2 class="page-title">My Upcoming Reservations</h2>';
                bookings.forEach(book => {
                    bookingsHTML += `
                        <div class="booking-card">
                            <h3>${book.restaurantName}</h3>
                            <div class="info-grid">
                                <div class="info-item"><strong>📍 Location</strong> ${book.location || 'Riyadh, Saudi Arabia'}</div>
                                <div class="info-item"><strong>📅 Date & Time</strong> ${book.time}</div>
                                <div class="info-item"><strong>🪑 Seating</strong> ${book.seating} Area</div>
                                <div class="info-item"><strong>👥 Guests</strong> ${book.guests} People</div>
                            </div>
                        </div>`;
                });
                contentArea.innerHTML = bookingsHTML;
            }
        });
