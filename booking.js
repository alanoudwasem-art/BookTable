   function checkForm() {
            const guests = document.getElementById('guests').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const mobile = document.getElementById('mobile').value;
            const btn = document.getElementById('bookingBtn');

            
            if (guests && date && time && mobile) {
                btn.disabled = false; 
                btn.classList.remove('disabled'); 
            } else {
                btn.disabled = true; 
                btn.classList.add('disabled'); 
            }
        }

        
        function confirmBooking() {
          
            window.location.href = 'confirmation.html'; 
        }
