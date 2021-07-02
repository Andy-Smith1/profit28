
//hamburger navbar
const toggleButton = document.querySelector('.toggle-button');
const navbarRight = document.querySelector('.navbar-right');

toggleButton.addEventListener('click', () => {
    navbarRight.classList.toggle('active');
});

//gallery lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const galleryImages = document.querySelectorAll('.gallery-img');
galleryImages.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active'); //adds dark overlay to page
        const img = document.createElement('img');
        img.src = image.src;
        img.classList.add('lightbox-image');//adds class for styling
        while (lightbox.firstChild) {
            //removes any existing image before appending
            lightbox.removeChild(lightbox.firstChild);
        }
        //displays clicked image
        lightbox.appendChild(img);
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
})