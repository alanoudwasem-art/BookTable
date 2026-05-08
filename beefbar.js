 function showBeefDesc(type, btn) {
            const descElement = document.getElementById('beef-description');
            const buttons = document.querySelectorAll('.select-btn');
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

          
            if (type === 'indoor') {
                descElement.innerText = "Experience our sophisticated main hall, featuring opulent golden accents and plush seating for a truly glamorous night.";
            } else if (type === 'outdoor') {
                descElement.innerText = "Enjoy the vibrant Riyadh breeze in our stylish outdoor area, perfect for social gatherings and signature cocktails.";
            } else if (type === 'terrace') {
                descElement.innerText = "An exclusive, high-end private terrace offering maximum seclusion for intimate celebrations or VIP business dinners.";
            }
        }
