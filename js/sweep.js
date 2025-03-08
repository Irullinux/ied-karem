document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("hero").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("hero").style.display = "none";
            document.getElementById("nextSection").style.opacity = "1";
        }, 1000);
    }, 5000); // Ganti tampilan setelah 5 detik
});