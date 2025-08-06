let clickedImageIndex = -1;

const galleryImages = document.querySelectorAll('.gallery img');
const popupImage = document.querySelector('.popup-image');
const popupImg = document.querySelector('.popup-image img.content');


galleryImages.forEach((image, index) => {
    image.onclick = () => {
        popupImg.src = image.getAttribute('src');
        clickedImageIndex = index;

        popupImage.style.display = 'block'; 
        setTimeout(() => {
            popupImage.classList.add('opened'); 
        }, 50); 
    };
});

document.querySelector('.popup-image span').onclick = () => {
    popupImage.classList.remove('opened'); 
    setTimeout(() => {
        popupImage.style.display = 'none'; 
    }, 300); 
    clickedImageIndex = -1;
};

document.querySelector('.arrow-btn.right-arrow').onclick = () => {
    const nextIndex = clickedImageIndex + 1;
    if (nextIndex < galleryImages.length) {
        popupImg.src = galleryImages[nextIndex].getAttribute('src');
        clickedImageIndex = nextIndex;
    }
};

document.querySelector('.arrow-btn.left-arrow').onclick = () => {
    const prevIndex = clickedImageIndex - 1;
    if (prevIndex >= 0) {
        popupImg.src = galleryImages[prevIndex].getAttribute('src');
        clickedImageIndex = prevIndex;
    }
};
