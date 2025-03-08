document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("myAudio");

    // Memastikan audio berjalan di Chrome & Safari
    var playAudio = () => {
        audio.play().then(() => {
            console.log("Takbiran diputar otomatis");
        }).catch(error => {
            console.log("Autoplay diblokir, meminta interaksi pengguna");
        });
    };

    playAudio();

    // Jika autoplay diblokir, jalankan saat user berinteraksi
    document.addEventListener("click", playAudio, { once: true });
});