// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    themeToggle.querySelector('.theme-icon').textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Share Functionality
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: 'Check out this awesome Java learning resource by Abhishek Verma!',
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        alert('Sharing not supported on this device. Copy the URL to share!');
    }
}
