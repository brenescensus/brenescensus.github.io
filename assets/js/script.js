
const titles = ["Software Developer", "Cybersecurity Enthusiast", "IT Specialist"];
let index = 0;
function rotateTitles() {
    document.getElementById("titleRotator").textContent = titles[index];
    index = (index + 1) % titles.length;
}
setInterval(rotateTitles, 2000);


// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger && hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
