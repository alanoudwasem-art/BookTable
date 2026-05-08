  function showDesc(type, btn) {
            const descElement = document.getElementById('table-description');
            const buttons = document.querySelectorAll('.select-btn');

            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (type === 'main') {
                descElement.innerText = "Immerse yourself in the heart of the restaurant, surrounded by elegant Greek-inspired decor and a lively ambiance.";
            } else if (type === 'window') {
                descElement.innerText = "Enjoy a more intimate dining experience with partial views of the city's skyline.";
            } else if (type === 'vip') {
                descElement.innerText = "Specially curated tables offering enhanced privacy and extra space, perfect for business meetings or exclusive large family gatherings.";
            }
        }
