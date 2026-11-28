
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

    const filmStrip = document.querySelector(".film-strip");
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

    if (!filmStrip || !filmTrack || filmFrames.length === 0) return;

    let currentIndex = 0;
    let isDragging = false;
    let hasDragged = false;
    let startX = 0;
    let scrollStart = 0;

    const totalFrames = filmFrames.length;

    const formatNumber = (number) =>
        String(number).padStart(3, "0");


    /* -------------------------------------
       UPDATE FILM COUNTER
    ------------------------------------- */

    function updateFilmCounter() {

        if (!filmCounter) return;

        const stripRect = filmStrip.getBoundingClientRect();
        const center = stripRect.left + stripRect.width / 2;

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

        filmStrip.scrollBy({
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

    filmStrip.addEventListener("scroll", updateFilmCounter);
    window.addEventListener("resize", updateFilmCounter);


    /* -------------------------------------
       DRAG TO SCROLL
    ------------------------------------- */

    filmStrip.addEventListener("dragstart", (event) => {
        event.preventDefault();
    });

    filmStrip.addEventListener("mousedown", (event) => {

        if (event.button !== 0) return;

        isDragging = true;
        hasDragged = false;

        startX = event.pageX;
        scrollStart = filmStrip.scrollLeft;

    });

    window.addEventListener("mousemove", (event) => {

        if (!isDragging) return;

        const distance = event.pageX - startX;

        if (Math.abs(distance) > 5) {
            hasDragged = true;
        }

        if (hasDragged) {
            event.preventDefault();
            filmStrip.scrollLeft = scrollStart - distance;
        }

    });

    window.addEventListener("mouseup", () => {

        if (!isDragging) return;

        isDragging = false;

        filmStrip.classList.remove("is-dragging");

    });

    filmStrip.addEventListener("mousedown", () => {
        filmStrip.classList.add("is-dragging");
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

            if (hasDragged) {
                hasDragged = false;
                return;
            }

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

/* ========================================
   COLOR SNAPSHOTS LIGHTBOX
========================================= */

(() => {

    const snapshotTrack = document.getElementById("snapshotTrack");
    const lightbox = document.getElementById("snapshotLightbox");

    if (!snapshotTrack || !lightbox) return;

    const frames = Array.from(
        snapshotTrack.querySelectorAll(".snapshot-frame")
    );

    const closeButton = document.getElementById("snapshotLightboxClose");
    const prevButton = document.getElementById("snapshotLightboxPrev");
    const nextButton = document.getElementById("snapshotLightboxNext");

    const image = document.getElementById("snapshotLightboxImage");
    const video = document.getElementById("snapshotLightboxVideo");
    const counter = document.getElementById("snapshotLightboxCounter");

    let currentIndex = 0;

    // OPEN LIGHTBOX

    function openSnapshot(index) {

        if (!frames.length) return;

        currentIndex = (index + frames.length) % frames.length;

        showSnapshot();

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
    }

    // SHOW CURRENT SNAPSHOT

    function showSnapshot() {

        const frame = frames[currentIndex];

        const frameImage = frame.querySelector("img");
        const frameVideo = frame.querySelector("video");

        // RESET MEDIA

        video.pause();
        video.removeAttribute("src");
        video.load();

        image.removeAttribute("src");

        image.hidden = true;
        video.hidden = true;

        // IMAGE

        if (frameImage) {

            image.src = frameImage.getAttribute("src");
            image.alt = frameImage.alt || "Color snapshot";

            image.hidden = false;

        }

        // VIDEO

        else if (frameVideo) {

            video.src = frameVideo.getAttribute("src");
            video.hidden = false;

            video.load();

            video.play().catch(() => {
                // Playback can be started manually.
            });

        }

        // FRAME COUNTER

        counter.textContent =
            `FRAME ${String(currentIndex + 1).padStart(3, "0")} / ${String(frames.length).padStart(3, "0")}`;

    }

    // CLOSE LIGHTBOX

    function closeSnapshot() {

        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");

        video.pause();
        video.removeAttribute("src");
        video.load();

        image.removeAttribute("src");

        document.body.style.overflow = "";

    }

    // PREVIOUS

    function previousSnapshot() {

        openSnapshot(currentIndex - 1);

    }

    // NEXT

    function nextSnapshot() {

        openSnapshot(currentIndex + 1);

    }

    // CLICK SNAPSHOT

    frames.forEach((frame, index) => {

        frame.addEventListener("click", () => {

            openSnapshot(index);

        });

    });

    // BUTTON EVENTS

    closeButton.addEventListener("click", closeSnapshot);

    prevButton.addEventListener("click", previousSnapshot);

    nextButton.addEventListener("click", nextSnapshot);

    // CLICK BACKGROUND TO CLOSE

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            closeSnapshot();
        }

    });

    // KEYBOARD EVENTS

    document.addEventListener("keydown", (event) => {

        if (!lightbox.classList.contains("active")) return;

        if (event.key === "Escape") {
            closeSnapshot();
        }

        if (event.key === "ArrowLeft") {
            previousSnapshot();
        }

        if (event.key === "ArrowRight") {
            nextSnapshot();
        }

    });

})();
/* ========================================
   ARCHIVE FADE UP OBSERVER
======================================== */

const archiveSections = document.querySelectorAll(
    '.film-archive, .snapshot-archive'
);

const archiveObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('is-visible');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

archiveSections.forEach(section => {
    archiveObserver.observe(section);
});

/* =========================================
   9. VICTORY ALBUM LIGHTBOX
========================================= */

(() => {

    const albumButtons = document.querySelectorAll(".victory-album");

    const lightbox = document.getElementById("victoryLightbox");
    const closeButton = document.getElementById("victoryLightboxClose");

    const image = document.getElementById("victoryLightboxImage");
    const albumTitle = document.getElementById("victoryAlbumTitle");
    const photoCounter = document.getElementById("victoryPhotoCounter");

    const prevPhotoButton = document.getElementById("victoryPhotoPrev");
    const nextPhotoButton = document.getElementById("victoryPhotoNext");

    const prevAlbumButton = document.getElementById("victoryPrevAlbum");
    const nextAlbumButton = document.getElementById("victoryNextAlbum");

    if (
        !lightbox ||
        !closeButton ||
        !image ||
        !albumTitle ||
        !photoCounter ||
        !prevPhotoButton ||
        !nextPhotoButton ||
        !prevAlbumButton ||
        !nextAlbumButton
    ) {
        return;
    }

    /* ALBUM DATA */

    const albums = [
        {
            title: "BATTLES",
            photos: [
                "../images/raiders/01.jpg",
                "../images/raiders/02.jpg",
                "../images/raiders/03.jpg",
                "../images/raiders/04.jpg"
            ]
        },
        {
            title: "BATTLES",
            photos: [
                "../images/raiders/05.jpg",
                "../images/raiders/06.jpg",
                "../images/raiders/07.jpg"
            ]
        },
        {
            title: "BATTLES",
            photos: [
                "../images/raiders/08.jpg",
                "../images/raiders/09.jpg"
            ]
        },
        {
            title: "BATTLES",
            photos: [
                "../images/raiders/10.jpg"
            ]
        },
        {
            title: "BATTLES",
            photos: [
                "../images/raiders/11.jpg"
            ]
        },
        {
            title: "BATTLES",
            photos: [
                "../images/raiders/12.jpg"
            ]
        }
    ];

    let currentAlbum = 0;
    let currentPhoto = 0;


    /* UPDATE LIGHTBOX */

    function updateLightbox() {

        const album = albums[currentAlbum];

        image.src = album.photos[currentPhoto];

        image.alt = `Victory memory ${currentAlbum + 1}-${currentPhoto + 1}`;

        albumTitle.textContent =
            `${String(currentAlbum + 1).padStart(2, "0")} / ${album.title}`;

        photoCounter.textContent =
            `PHOTO ${String(currentPhoto + 1).padStart(2, "0")} / ${String(album.photos.length).padStart(2, "0")}`;

        prevPhotoButton.disabled = album.photos.length <= 1;
        nextPhotoButton.disabled = album.photos.length <= 1;

        prevPhotoButton.style.opacity = album.photos.length <= 1 ? "0.3" : "1";
        nextPhotoButton.style.opacity = album.photos.length <= 1 ? "0.3" : "1";

        prevPhotoButton.style.cursor = album.photos.length <= 1 ? "default" : "pointer";
        nextPhotoButton.style.cursor = album.photos.length <= 1 ? "default" : "pointer";
    }


    /* OPEN ALBUM */

    function openAlbum(index) {

        currentAlbum = index;
        currentPhoto = 0;

        updateLightbox();

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
    }


    /* CLOSE ALBUM */

    function closeAlbum() {

        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        image.src = "";
    }


    /* OPEN ALBUM BUTTONS */

    albumButtons.forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.album);

            if (Number.isInteger(index) && albums[index]) {
                openAlbum(index);
            }

        });

    });


    /* PREVIOUS PHOTO */

    prevPhotoButton.addEventListener("click", () => {

        const photos = albums[currentAlbum].photos;

        if (photos.length <= 1) return;

        currentPhoto =
            (currentPhoto - 1 + photos.length) % photos.length;

        updateLightbox();

    });


    /* NEXT PHOTO */

    nextPhotoButton.addEventListener("click", () => {

        const photos = albums[currentAlbum].photos;

        if (photos.length <= 1) return;

        currentPhoto =
            (currentPhoto + 1) % photos.length;

        updateLightbox();

    });


    /* PREVIOUS ALBUM */

    prevAlbumButton.addEventListener("click", () => {

        currentAlbum =
            (currentAlbum - 1 + albums.length) % albums.length;

        currentPhoto = 0;

        updateLightbox();

    });


    /* NEXT ALBUM */

    nextAlbumButton.addEventListener("click", () => {

        currentAlbum =
            (currentAlbum + 1) % albums.length;

        currentPhoto = 0;

        updateLightbox();

    });


    /* CLOSE BUTTON */

    closeButton.addEventListener("click", closeAlbum);


    /* KEYBOARD CONTROLS */

    document.addEventListener("keydown", event => {

        if (!lightbox.classList.contains("active")) return;

        if (event.key === "Escape") {
            closeAlbum();
        }

        if (event.key === "ArrowLeft") {
            prevPhotoButton.click();
        }

        if (event.key === "ArrowRight") {
            nextPhotoButton.click();
        }

    });

})();

/* =========================================
   PLAY LOG LIGHTBOX
========================================= */

const playLogItems = Array.from(
    document.querySelectorAll('.play-log-frame')
);

const playLogLightbox = document.getElementById('playLogLightbox');
const playLogImage = document.getElementById('playLogImage');
const playLogVideo = document.getElementById('playLogVideo');
const playLogCounter = document.getElementById('playLogCounter');

const playLogClose = document.getElementById('playLogClose');
const playLogPrev = document.getElementById('playLogPrev');
const playLogNext = document.getElementById('playLogNext');

let currentPlayLogIndex = 0;

function showPlayLogItem(index) {

    if (!playLogItems.length) return;

    currentPlayLogIndex =
        (index + playLogItems.length) % playLogItems.length;

    const item = playLogItems[currentPlayLogIndex];

    const image = item.querySelector('img');
    const video = item.querySelector('video');

    playLogVideo.pause();
    playLogVideo.removeAttribute('src');
    playLogVideo.load();

    playLogImage.style.display = 'none';
    playLogVideo.style.display = 'none';

    if (image) {

        playLogImage.src = image.src;
        playLogImage.alt = image.alt;
        playLogImage.style.display = 'block';

    }

    if (video) {

        playLogVideo.src = video.src;
        playLogVideo.style.display = 'block';

        playLogVideo.currentTime = 0;

        playLogVideo.play().catch(() => {});

    }

    playLogCounter.textContent =
        `FRAME ${String(currentPlayLogIndex + 1).padStart(3, '0')} / ${String(playLogItems.length).padStart(3, '0')}`;

}

function openPlayLog(index) {

    showPlayLogItem(index);

    playLogLightbox.classList.add('is-open');

    playLogLightbox.setAttribute('aria-hidden', 'false');

    document.body.style.overflow = 'hidden';

}

function closePlayLog() {

    playLogLightbox.classList.remove('is-open');

    playLogLightbox.setAttribute('aria-hidden', 'true');

    playLogVideo.pause();
    playLogVideo.removeAttribute('src');
    playLogVideo.load();

    playLogImage.removeAttribute('src');

    document.body.style.overflow = '';

}

/* CLICK PHOTO / VIDEO */

playLogItems.forEach((item, index) => {

    const image = item.querySelector('img');
    const playButton = item.querySelector('.play-log-play');

    if (image) {
        image.addEventListener('click', () => {
            openPlayLog(index);
        });
    }

    if (playButton) {
        playButton.addEventListener('click', () => {
            openPlayLog(index);
        });
    }

});

/* CLOSE */

playLogClose.addEventListener('click', closePlayLog);

/* PREVIOUS */

playLogPrev.addEventListener('click', () => {
    showPlayLogItem(currentPlayLogIndex - 1);
});

/* NEXT */

playLogNext.addEventListener('click', () => {
    showPlayLogItem(currentPlayLogIndex + 1);
});

/* CLICK BACKGROUND TO CLOSE */

playLogLightbox.addEventListener('click', (event) => {

    if (event.target === playLogLightbox) {
        closePlayLog();
    }

});

/* KEYBOARD */

document.addEventListener('keydown', (event) => {

    if (!playLogLightbox.classList.contains('is-open')) return;

    if (event.key === 'Escape') {
        closePlayLog();
    }

    if (event.key === 'ArrowLeft') {
        showPlayLogItem(currentPlayLogIndex - 1);
    }

    if (event.key === 'ArrowRight') {
        showPlayLogItem(currentPlayLogIndex + 1);
    }

});
/* =========================================
   BACKGROUND MUSIC
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const bgm = document.getElementById("bgm");
    const toggle = document.getElementById("bgm-toggle");

    if (!bgm || !toggle) return;

    const icon = toggle.querySelector("i");

    bgm.volume = 0.3;
    bgm.loop = true;

    let userPaused = false;


    /* UPDATE BUTTON */

    function updateButton() {

        const playing = !bgm.paused;

        icon.className = playing
            ? "fa-solid fa-volume-high"
            : "fa-solid fa-volume-xmark";

        toggle.classList.toggle("is-playing", playing);

        toggle.setAttribute(
            "aria-pressed",
            String(playing)
        );

        toggle.setAttribute(
            "aria-label",
            playing
                ? "背景音楽を一時停止"
                : "背景音楽を再生"
        );

    }


    /* PLAY MUSIC */

    async function playMusic() {

        if (userPaused) return;

        try {
            await bgm.play();
        } catch (error) {
            updateButton();
        }

    }


    /* MUSIC BUTTON */

    toggle.addEventListener("click", async () => {

        if (bgm.paused) {

            userPaused = false;
            await playMusic();

        } else {

            userPaused = true;
            bgm.pause();

        }

    });


    /* FIRST INTERACTION */

    function firstInteraction(event) {

        if (toggle.contains(event.target)) return;

        if (!userPaused && bgm.paused) {
            playMusic();
        }

        document.removeEventListener(
            "click",
            firstInteraction
        );

    }

    document.addEventListener(
        "click",
        firstInteraction
    );


    /* AUDIO EVENTS */

    bgm.addEventListener("play", updateButton);
    bgm.addEventListener("pause", updateButton);
    bgm.addEventListener("error", updateButton);


    /* INITIALIZE */

    updateButton();
    playMusic();

});
