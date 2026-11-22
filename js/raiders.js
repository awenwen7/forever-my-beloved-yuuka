
/* =========================================
   SPLATOON RAIDERS
   JAVASCRIPT
========================================= */


/* =========================================
   01. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("show");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });


    /* Close menu after clicking a link */

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });


    /* Close menu when clicking outside */

    document.addEventListener("click", (event) => {

        const clickedInside =
            navLinks.contains(event.target) ||
            menuToggle.contains(event.target);

        if (!clickedInside) {

            navLinks.classList.remove("show");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });

}


/* =========================================
   02. ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("main section[id]");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop - 160 &&
            window.scrollY < sectionTop + sectionHeight - 160
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

window.addEventListener("load", updateActiveNavigation);


/* =========================================
   03. HEADER SCROLL EFFECT
========================================= */

const header = document.querySelector(".raiders-header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

window.addEventListener("load", updateHeader);


/* =========================================
   04. SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/* =========================================
   05. REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .info-card, .adventure-card, .gallery-card"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.12

        }

    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

}


/* =========================================
   06. INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    updateActiveNavigation();

    updateHeader();

});

