document.addEventListener("DOMContentLoaded", function () {
    function createLantern() {
        const lantern = document.createElement("div");
        lantern.classList.add("lantern");
        document.body.appendChild(lantern);

        // Posisi awal di bawah layar
        let startX = Math.random() * window.innerWidth;
        let startY = window.innerHeight + 50; // Mulai dari bawah layar

        // Posisi akhir (naik ke atas layar dengan sedikit bergoyang)
        let endX = startX + (Math.random() * 100 - 50); // Bergerak sedikit ke kanan/kiri
        let endY = -100; // Menghilang di atas layar

        // Durasi naik (5s - 10s)
        let duration = Math.random() * 5 + 5;

        // Set posisi awal
        lantern.style.left = `${startX}px`;
        lantern.style.top = `${startY}px`;

        // Animasi naik
        lantern.animate(
            [
                { transform: `translate(0, 0)`, opacity: 1 },
                { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0 }
            ],
            { duration: duration * 1000, easing: "linear" }
        );

        // Hapus lentera setelah animasi selesai
        setTimeout(() => {
            lantern.remove();
        }, duration * 1000);
    }

    // Jalankan efek lentera setiap 1-3 detik
    setInterval(createLantern, Math.random() * 2000 + 1000);
});
