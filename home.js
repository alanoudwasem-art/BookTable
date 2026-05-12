
function selectRestaurant(name, url) {

    localStorage.setItem('selectedRestaurant', name);

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
document.getElementById('main-search').addEventListener('keyup', function(e) {
    let searchTerm = e.target.value.toLowerCase();
    
    let items = document.getElementsByClassName('filter-item'); 

    for (let item of items) {
        let itemName = item.textContent.toLowerCase();
        
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block'; 
        } else {
            item.style.display = 'none';  
        }
    }
});
