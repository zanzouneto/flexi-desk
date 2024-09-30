const video = document.getElementById('scroll-video');
const videoSection = document.getElementById('video-section');

// Set the duration to the height of the section so the video plays through it
window.addEventListener('scroll', () => {
    const sectionHeight = videoSection.offsetHeight;
    const sectionTop = videoSection.getBoundingClientRect().top;
    const scrollY = window.scrollY;

    if (sectionTop <= 0 && sectionTop > -sectionHeight) {
        const scrollFraction = Math.abs(sectionTop) / sectionHeight;
        video.currentTime = scrollFraction * video.duration;
    }
});

const logo = document.querySelector('.logo');

logo.addEventListener('mousemove', function(event) {
    const logoRect = logo.getBoundingClientRect();
    const hoverX = event.clientX - logoRect.left;

    if (hoverX < logoRect.width / 2) {
        // Hovering over the left side - shift up
        logo.style.transform = 'translateY(-40px)';
    } else {
        // Hovering over the right side - shift down
        logo.style.transform = 'translateY(40px)';
    }
});

logo.addEventListener('mouseleave', function() {
    // Reset the position when the mouse leaves the logo
    logo.style.transform = 'translateY(0)';
});
