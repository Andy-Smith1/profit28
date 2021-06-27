const toggleButton = document.querySelector('.toggle-button');
const navbarRight = document.querySelector('.navbar-right');



toggleButton.addEventListener('click', () => {
    navbarRight.classList.toggle('active');
});


