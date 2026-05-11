 function showElixirDesc(type, btn) {
            const descElement = document.getElementById('elixir-description');
            const buttons = document.querySelectorAll('.select-btn');
            
         
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

           localStorage.setItem('selectedSeating', type); 
  
            if (type === 'indoor') {
                
                descElement.innerText = "Relax in our comfortable indoor area, perfect for enjoying your favorite specialty coffee in a cozy and modern setting.";
            } else if (type === 'study') {
               
                descElement.innerText = "A quiet and dedicated space designed for productivity, featuring high-speed Wi-Fi and a calm environment perfect for focusing.";
            } else if (type === 'terrace') {
               
                descElement.innerText = "Enjoy your coffee in the fresh air on our outdoor terrace, offering a great view and a refreshing vibe.";
            }
        }
