function showDraftDesc(type, btn) {
            const descElement = document.getElementById('draft-description');
            const buttons = document.querySelectorAll('.select-btn');
            
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

           localStorage.setItem('selectedSeating', type); 
            
            if (type === 'main') {
                descElement.innerText = "Experience the vibrant energy of our main hall, where the aroma of fresh coffee meets modern industrial design.";
            } else if (type === 'creative') {
                descElement.innerText = "A specially curated space for inspiration, equipped with comfortable seating and a quiet atmosphere for creative work.";
            } else if (type === 'outdoor') {
                descElement.innerText = "Enjoy your coffee under the sun or stars in our stylish outdoor seating area, perfect for a breath of fresh air.";
            }
        }
