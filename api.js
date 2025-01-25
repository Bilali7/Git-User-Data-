let currentTheme = 'light';

function fetchUserProfile() {
  const username = document.getElementById('username').value || 'Rizwanjamal';
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Not Found') {
        displayNoUserFound();
      } else {
        displayUserProfile(data);
      }
    })
    .catch(err => {
      console.error('Error fetching data:', err);
      displayNoUserFound();
    });
}

function displayUserProfile(data) {
  document.getElementById('avatar').src = data.avatar_url || 'https://via.placeholder.com/100';
  document.getElementById('name').textContent = data.name || 'No Name';
  document.getElementById('bio').textContent = data.bio || 'No Bio';
  document.getElementById('email').innerHTML = `Email: ${data.email || 'No Email'}`;
  document.getElementById('followers').textContent = `Followers: ${data.followers || 0}`;
  document.getElementById('repos').textContent = `Repos: ${data.public_repos || 0}`;
  document.getElementById('location').textContent = `Location: ${data.location || 'Unknown'}`;
  document.getElementById('company').textContent = `Company: ${data.company || 'Unknown'}`;
}

function displayNoUserFound() {
  document.getElementById('avatar').src = 'https://via.placeholder.com/100';
  document.getElementById('name').textContent = 'No User Found';
  document.getElementById('bio').textContent = '';
  document.getElementById('email').innerHTML = 'Email: Not Available';
  document.getElementById('followers').textContent = 'Followers: 0';
  document.getElementById('repos').textContent = 'Repos: 0';
  document.getElementById('location').textContent = 'Location: Not Available';
  document.getElementById('company').textContent = 'Company: Not Available';
}

function toggleTheme() {
  const card = document.querySelector('.card');
  const body = document.body;
  if (currentTheme === 'light') {
    card.classList.add('dark');
    body.style.backgroundColor = '#333';
    currentTheme = 'dark';
  } 
  else {
    card.classList.remove('dark');
    body.style.backgroundColor = '#f0f0f0';
    currentTheme = 'light';
  }
}
window.onload = fetchUserProfile;
