// Function to fetch user's favorite attractions
async function fetchFavorites(userId) {
    try {
        // Fetch user's favorite attractions from the backend
        const response = await fetch(`http://localhost:3000/favorites?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        // Check if the request was successful
        if (response.ok) {
            const favorites = await response.json();
            populateFavorites(favorites);
        } else {
            console.error('Error fetching user favorites:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching user favorites:', error);
    }
}

// Function to populate favorite attractions in divs
function populateFavorites(favorites) {
    favorites.forEach((favorite, index) => {
        const card = document.getElementById(`favCard${index + 1}`);
        if (card) {
            card.innerHTML = `
            <h5>${favorite.activityName}</h5>
            <br>
            <p>Location: ${favorite.location}</p>
            <br>
            <img src="${favorite.city_pic}" alt="City Image" style="width:60%">
            <br>
            <img src="icons/trash-can-icon-28675.png" alt="Delete" style="width:20%" onclick="deleteFav(${favorite.activity_id})">
            `
        }
    });
}

async function deleteFav(activity_id, userId= localStorage.getItem('userId')){
    try{
        const response = await fetch('http://localhost:3000/favorites', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ activityId: activity_id, userId: userId })
        });
        if (response.ok) {
            window.location.reload();
        }else{
            console.error('Error deleting favorite:', response.statusText);
        }
    }catch(e){
        console.error('Error deleting favorite:', response.statusText);
    }
}

function logout(){
    localStorage.clear();
    window.location.assign('home.html');
}
let logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', logout);

// Call the functions when the page loads
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('username').innerText = localStorage.getItem('username') + "'s Favorites";
    fetchFavorites(localStorage.getItem('userId'));
});
