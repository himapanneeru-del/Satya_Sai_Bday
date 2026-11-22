
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    if (music.paused) {
        music.play()
            .then(() => button.textContent = "♫ Pause Music")
            .catch(() => alert("Please add devotional.mp3 to the music folder."));
    } else {
        music.pause();
        button.textContent = "♫ Music";
    }
}
