
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

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

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
   06. BLACK & WHITE FILM ARCHIVE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const filmTrack = document.getElementById("filmTrack");
    const filmPrev = document.getElementById("filmPrev");
    const filmNext = document.getElementById("filmNext");
    const filmCounter = document.getElementById("filmCounter");

    const filmFrames = filmTrack
        ? Array.from(filmTrack.querySelectorAll(".film-frame"))
        : [];

    const lightbox = document.getElementById("filmLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCounter = document.getElementById("lightboxCounter");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");

    if (!filmTrack || filmFrames.length === 0) return;

    let currentIndex = 0;

    const totalFrames = filmFrames.length;

    const formatNumber = (number) =>
        String(number).padStart(3, "0");


    /* -------------------------------------
       UPDATE FILM COUNTER
    ------------------------------------- */

    function updateFilmCounter() {

        if (!filmCounter) return;

        const trackRect = filmTrack.getBoundingClientRect();
        const center = trackRect.left + trackRect.width / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        filmFrames.forEach((frame, index) => {

            const rect = frame.getBoundingClientRect();
            const frameCenter = rect.left + rect.width / 2;
            const distance = Math.abs(center - frameCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }

        });

        filmCounter.textContent =
            `FRAME ${formatNumber(closestIndex + 1)} / ${formatNumber(totalFrames)}`;

    }


    /* -------------------------------------
       HORIZONTAL SCROLL
    ------------------------------------- */

    function scrollFilm(direction) {

        const firstFrame = filmFrames[0];

        if (!firstFrame) return;

        const frameWidth =
            firstFrame.getBoundingClientRect().width;

        const gap = parseFloat(
            getComputedStyle(filmTrack).gap
        ) || 0;

        filmTrack.scrollBy({
            left: direction * (frameWidth + gap),
            behavior: "smooth"
        });

    }

    if (filmPrev) {
        filmPrev.addEventListener("click", () => {
            scrollFilm(-1);
        });
    }

    if (filmNext) {
        filmNext.addEventListener("click", () => {
            scrollFilm(1);
        });
    }

    filmTrack.addEventListener("scroll", updateFilmCounter);

    window.addEventListener("resize", updateFilmCounter);


    /* -------------------------------------
       DRAG TO SCROLL
    ------------------------------------- */

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    filmTrack.addEventListener("mousedown", (event) => {

        if (event.target.closest(".film-frame")) {
            isDragging = true;
            startX = event.pageX;
            scrollStart = filmTrack.scrollLeft;
            filmTrack.classList.add("is-dragging");
        }

    });

    window.addEventListener("mousemove", (event) => {

        if (!isDragging) return;

        event.preventDefault();

        const distance = event.pageX - startX;

        filmTrack.scrollLeft = scrollStart - distance;

    });

    window.addEventListener("mouseup", () => {

        isDragging = false;
        filmTrack.classList.remove("is-dragging");

    });


    /* -------------------------------------
       LIGHTBOX
    ------------------------------------- */

    function openLightbox(index) {

        if (!lightbox || !lightboxImage) return;

        currentIndex = index;

        const frameImage =
            filmFrames[currentIndex].querySelector("img");

        if (!frameImage) return;

        lightboxImage.src = frameImage.src;
        lightboxImage.alt = frameImage.alt || "";

        updateLightboxCounter();

        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    }


    function closeLightbox() {

        if (!lightbox) return;

        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }


    function showLightboxImage(index) {

        currentIndex =
            (index + totalFrames) % totalFrames;

        const frameImage =
            filmFrames[currentIndex].querySelector("img");

        if (!frameImage || !lightboxImage) return;

        lightboxImage.src = frameImage.src;
        lightboxImage.alt = frameImage.alt || "";

        updateLightboxCounter();

    }


    function updateLightboxCounter() {

        if (!lightboxCounter) return;

        lightboxCounter.textContent =
            `FRAME ${formatNumber(currentIndex + 1)} / ${formatNumber(totalFrames)}`;

    }


    /* -------------------------------------
       CLICK PHOTO TO OPEN
    ------------------------------------- */

    filmFrames.forEach((frame, index) => {

        frame.addEventListener("click", () => {

            if (isDragging) return;

            openLightbox(index);

        });

    });


    /* -------------------------------------
       LIGHTBOX CONTROLS
    ------------------------------------- */

    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener("click", () => {
            showLightboxImage(currentIndex - 1);
        });
    }

    if (lightboxNext) {
        lightboxNext.addEventListener("click", () => {
            showLightboxImage(currentIndex + 1);
        });
    }


    /* Close when clicking background */

    if (lightbox) {

        lightbox.addEventListener("click", (event) => {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });

    }


    /* -------------------------------------
       KEYBOARD CONTROLS
    ------------------------------------- */

    document.addEventListener("keydown", (event) => {

        if (!lightbox || !lightbox.classList.contains("is-open")) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowLeft") {
            showLightboxImage(currentIndex - 1);
        }

        if (event.key === "ArrowRight") {
            showLightboxImage(currentIndex + 1);
        }

    });


    /* -------------------------------------
       INITIAL STATE
    ------------------------------------- */

    updateFilmCounter();

});


/* =========================================
   07. INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    updateActiveNavigation();
    updateHeader();

});
