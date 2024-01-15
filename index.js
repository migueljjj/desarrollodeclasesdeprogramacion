document.getElementById('downloaded-videos').addEventListener('click', function(event) {
    if (event.target.tagName === 'SOURCE') {
        var videoSrc = event.target.getAttribute('src');
        reproducirVideo(videoSrc);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const videoGrid = document.getElementById('video-grid');


videos.forEach((videoSrc, index) => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');

    const video = document.createElement('video');
    video.setAttribute('src', videoSrc);
    video.setAttribute('controls', 'true'); // Agrega controles de reproducción

    videoItem.appendChild(video);
    videoGrid.appendChild(videoItem);
});
});