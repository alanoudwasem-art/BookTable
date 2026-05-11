// أضفنا كلمة url هنا كـ parameter ثانٍ
function selectRestaurant(name, url) {
    // حفظ اسم المطعم
    localStorage.setItem('selectedRestaurant', name);

    // هذا السطر هو المسؤول عن الانتقال للصفحة اللي مررتيها في الـ HTML
    if (url) {
        window.location.href = url;
    }
}
function filterItems(category) {
          
            document.getElementById('btn-res').classList.remove('active');
            document.getElementById('btn-cafe').classList.remove('active');
            
            if(category === 'restaurant') {
                document.getElementById('btn-res').classList.add('active');
            } else {
                document.getElementById('btn-cafe').classList.add('active');
            }

            
            const items = document.getElementsByClassName('filter-item');
            for (let item of items) {
                if (item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        }
