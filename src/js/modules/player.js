
const video = document.getElementById('videoPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const shawlVideo = document.getElementById('shawl');

playPauseButton.addEventListener('click', function () {

    if (video.paused) {
        video.play();
        playPauseButton.classList.add('pause');
        shawlVideo.style.backgroundColor = 'transparent';

    } else {
        video.pause();
        playPauseButton.classList.remove('pause');
        shawlVideo.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
});
