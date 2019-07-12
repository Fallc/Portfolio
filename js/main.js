const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li a");
const videos = document.querySelectorAll("video");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `linkFade 0.3s ease forwards ${index / 10}s`;
        }
    });

    menu.classList.toggle("toggle");

    videos.forEach(video => {
        video.classList.toggle("covered")
    })

});