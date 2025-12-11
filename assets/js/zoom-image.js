async function loadExternalScript(url) {
    try {
        const module = await import(url);
        console.log('Script loaded successfully');
        return module;
    } catch (error) {
        console.error('Failed to load script:', error);
        throw error;
    }
}


loadExternalScript('https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js', () => {
    // Initialize Lightbox2 after script loads
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true,
        'positionFromTop': 50,
        'overlayColor': 'rgba(128, 128, 128, 0.8)',
        'maxWidth': 1400,
        'maxHeight': 900
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.lightbox-image');

    images.forEach((img, index) => {
        const src = img.src;
        const alt = img.alt;
        const width = img.width;
        const height = img.height;

        // Create a wrapper link
        const link = document.createElement('a');
        link.href = src;
        link.dataset.lightbox = `gallery-${index}`;
        link.style.display = 'inline-block';

        // Create a new image element with styles
        const newImg = document.createElement('img');
        newImg.src = src;
        newImg.alt = alt;
        newImg.width = width;
        newImg.height = height;
        newImg.style.cursor = 'zoom-in';
        newImg.style.transition = 'transform 0.2s';
        newImg.onmouseover = () => newImg.style.transform = 'scale(1.02)';
        newImg.onmouseout = () => newImg.style.transform = 'scale(1)';

        // Replace original image with wrapped version
        link.appendChild(newImg);
        img.parentNode.replaceChild(link, img);
    });
});