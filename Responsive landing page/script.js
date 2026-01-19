const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        const targetId = link.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
