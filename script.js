document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            document.body.appendChild(lightbox);
            
            const imgElement = document.createElement('img');
            imgElement.src = img.src;
            lightbox.appendChild(imgElement);
            
            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
});
