/* =====================================
   AOS Animation Initialization
===================================== */

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

/* =====================================
   Typed.js
===================================== */

const typed = new Typed("#typing", {

    strings: [

        "Cybersecurity Analyst",
        "Python Automation Engineer",
        "Cloud Security Enthusiast",
        "Google Cloud Professional",
        "Researcher",
        "Security Automation Engineer"

    ],

    typeSpeed: 60,

    backSpeed: 40,

    backDelay: 1800,

    loop: true

});

/* =====================================
   Navbar Background on Scroll
===================================== */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(2,6,23,.95)";
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.boxShadow = "none";

    }

});

/* =====================================
   Active Navigation Link
===================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* =====================================
   Scroll to Top Button
===================================== */

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.className = "scrollTop";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* =====================================
   Fade-In Cards
===================================== */

const cards = document.querySelectorAll(".glass-card,.project-card,.skill-card,.cert-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));

/* =====================================
   Profile Image Tilt Effect
===================================== */

const profile = document.querySelector(".profile-img");

if (profile) {

    profile.addEventListener("mousemove", (e) => {

        const rect = profile.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 20;

        const rotateX = ((y / rect.height) - 0.5) * -20;

        profile.style.transform =
            `perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)`;

    });

    profile.addEventListener("mouseleave", () => {

        profile.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

}

/* =====================================
   Current Year Footer
===================================== */

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Riya Bhateja | Designed & Developed with ❤️`;

}

/* =====================================
   Button Ripple Effect
===================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const diameter = Math.max(button.clientWidth, button.clientHeight);

        ripple.style.width = ripple.style.height = `${diameter}px`;

        ripple.style.left = `${e.clientX - button.offsetLeft - diameter / 2}px`;

        ripple.style.top = `${e.clientY - button.offsetTop - diameter / 2}px`;

        ripple.classList.add("ripple");

        const oldRipple = button.querySelector(".ripple");

        if (oldRipple) {

            oldRipple.remove();

        }

        button.appendChild(ripple);

    });

});
