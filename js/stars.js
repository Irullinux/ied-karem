function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 4 + 2; // Ukuran bintang acak (2px - 6px)
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.top = `${Math.random() * 100}vh`; // Posisi vertikal acak
    star.style.left = `${Math.random() * 100}vw`; // Posisi horizontal acak

    star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Durasi kedip acak
    document.body.appendChild(star);
}

function generateStars(count) {
    for (let i = 0; i < count; i++) {
        createStar();
    }
}

generateStars(100); // Membuat 100 bintang