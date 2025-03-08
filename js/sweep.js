document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".hero").style.opacity = "0"; // Hilangkan hero pertama
        setTimeout(function () {
            document.querySelector(".hero").style.display = "none"; // Sembunyikan sepenuhnya
            document.querySelector(".next-section").style.opacity = "1"; // Tampilkan hero kedua
            document.querySelector(".next-section").style.zIndex = "2"; // Pastikan muncul di atas
        }, 1000); // Delay 1 detik untuk animasi
    }, 5000); // Auto pindah setelah 5 detik
});
