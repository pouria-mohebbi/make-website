
function fetchUserData() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const userData = document.getElementById('userData');
            userData.innerHTML = ''; 
            data.results.forEach(user => {
                const userCard = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${user.picture.large}" class="card-img-top" alt="${user.name.first}">
                            <div class="card-body">
                                <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                                <p class="card-text">Email: ${user.email}</p>
                            </div>
                        </div>
                    </div>
                `;
                userData.innerHTML += userCard;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

if (window.location.pathname.includes('dashboard.html')) {
    fetchUserData();
}