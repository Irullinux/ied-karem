document.addEventListener("DOMContentLoaded", function () {
    function createFallingStar() {
        const star = document.createElement("div");
        star.classList.add("falling-star");
        document.body.appendChild(star);

        // Posisi awal bintang (acak dari kiri ke kanan)
        let startX = Math.random() * window.innerWidth;
        let startY = Math.random() * window.innerHeight * 0.5; // Mulai dari atas layar

        // Posisi akhir (jatuh ke bawah dengan sedikit ke samping)
        let endX = startX + (Math.random() * 200 - 100); // Bergerak sedikit ke kanan/kiri
        let endY = window.innerHeight; // Jatuh sampai ke bawah

        // Durasi jatuh (acak antara 2s - 4s)
        let duration = Math.random() * 2 + 2;

        // Set posisi awal
        star.style.left = `${startX}px`;
        star.style.top = `${startY}px`;

        // Animasi jatuh
        star.animate(
            [
                { transform: `translate(0, 0)`, opacity: 1 },
                { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0 }
            ],
            { duration: duration * 1000, easing: "linear" }
        );

        // Hapus bintang setelah animasi selesai
        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    }

    // Jalankan bintang jatuh setiap 300-800 ms
    setInterval(createFallingStar, Math.random() * 500 + 300);
});
