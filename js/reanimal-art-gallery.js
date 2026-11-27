/* =========================================
   REANIMAL — ART GALLERY
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       01. GALLERY DATA
    ========================================= */

    const imagePath = "../images/reanimal/";

    const galleryData = {

        "main-story": {

            title: "MAIN STORY",
            subtitle: "本編",
            number: "01",
            prefix: "artgallery-main-story",
            count: 20

        },

        "dlc": {

            title: "DLC",
            subtitle: "追加コンテンツ",
            number: "02",
            prefix: "artgallery-dlc",
            count: 0

        }

    };


    /* =========================================
       02. GALLERY STATE
    ========================================= */

    let currentCategory = "main-story";

    let currentIndex = 0;

    let artworkList = [];

    let suppressImageClick = false;


    /* =========================================
       03. DOM ELEMENTS
    ========================================= */

    const categoryButtons =
        document.querySelectorAll(".category-button");

    const collectionEyebrow =
        document.querySelector(".collection-eyebrow");

    const collectionTitle =
        document.getElementById("collection-title");

    const collectionSubtitle =
        document.getElementById("collection-subtitle");

    const galleryContent =
        document.getElementById("gallery-content");

    const galleryEmpty =
        document.getElementById("gallery-empty");

    const mainArtwork =
        document.getElementById("main-artwork");

    const artworkStage =
        document.getElementById("artwork-stage");

    const artworkName =
        document.getElementById("artwork-name");

    const currentArtwork =
        document.getElementById("current-artwork");

    const totalArtworks =
        document.getElementById("total-artworks");

    const previousArtwork =
        document.getElementById("previous-artwork");

    const nextArtwork =
        document.getElementById("next-artwork");

    const thumbnailTrack =
        document.getElementById("thumbnail-track");

    const thumbnailPrevious =
        document.getElementById("thumbnail-previous");

    const thumbnailNext =
        document.getElementById("thumbnail-next");

    const openArtwork =
        document.getElementById("open-artwork");

    const expandArtwork =
        document.getElementById("expand-artwork");

    const lightbox =
        document.getElementById("artwork-lightbox");

    const lightboxImage =
        document.getElementById("lightbox-image");

    const lightboxClose =
        document.getElementById("lightbox-close");

    const lightboxPrevious =
        document.getElementById("lightbox-previous");

    const lightboxNext =
        document.getElementById("lightbox-next");

    const lightboxCounter =
        document.getElementById("lightbox-counter");


    /* =========================================
       04. UTILITY FUNCTIONS
    ========================================= */

    function formatNumber(number) {

        return String(number).padStart(2, "0");

    }


    /* =========================================
       05. GENERATE ARTWORK LIST
    ========================================= */

    function generateArtworkList(category) {

        const data = galleryData[category];

        return Array.from(
            { length: data.count },
            (_, index) => {

                const number = formatNumber(index + 1);

                return {

                    number: number,

                    src:
                        imagePath +
                        data.prefix +
                        number +
                        ".webp",

                    alt:
                        "REANIMAL " +
                        data.subtitle +
                        " アートワーク " +
                        number

                };

            }
        );

    }


    /* =========================================
       06. CATEGORY SWITCH
    ========================================= */

    function selectCategory(category) {

        if (!galleryData[category]) return;

        currentCategory = category;

        currentIndex = 0;

        const data = galleryData[category];

        artworkList = generateArtworkList(category);


        /* UPDATE CATEGORY BUTTONS */

        categoryButtons.forEach(button => {

            const isActive =
                button.dataset.category === category;

            button.classList.toggle(
                "active",
                isActive
            );

            button.setAttribute(
                "aria-pressed",
                String(isActive)
            );

        });


        /* UPDATE COLLECTION HEADING */

        collectionEyebrow.textContent =
            "ART COLLECTION / " + data.number;

        collectionTitle.textContent =
            data.subtitle;

        collectionSubtitle.textContent =
            data.title;


        /* RESET THUMBNAILS */

        thumbnailTrack.innerHTML = "";

        thumbnailTrack.scrollLeft = 0;


        /* EMPTY CATEGORY */

        if (artworkList.length === 0) {

            galleryContent.hidden = true;

            galleryEmpty.hidden = false;

            return;

        }


        /* AVAILABLE CATEGORY */

        galleryContent.hidden = false;

        galleryEmpty.hidden = true;

        totalArtworks.textContent =
            formatNumber(artworkList.length);

        generateThumbnails();

        showArtwork(0, false);

    }


    /* =========================================
       07. GENERATE THUMBNAILS
    ========================================= */

    function generateThumbnails() {

        thumbnailTrack.innerHTML = "";

        artworkList.forEach((artwork, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className = "thumbnail-button";

            button.dataset.index = index;

            button.setAttribute(
                "aria-label",
                artwork.alt
            );

            button.setAttribute(
                "aria-pressed",
                "false"
            );


            /* THUMBNAIL IMAGE */

            const image =
                document.createElement("img");

            image.src = artwork.src;

            image.alt = "";

            image.loading = "lazy";

            image.decoding = "async";

            image.draggable = false;


            /* THUMBNAIL NUMBER */

            const number =
                document.createElement("span");

            number.className =
                "thumbnail-number";

            number.textContent =
                artwork.number;


            /* APPEND ELEMENTS */

            button.appendChild(image);

            button.appendChild(number);

            thumbnailTrack.appendChild(button);


            /* CLICK EVENT */

            button.addEventListener("click", () => {

                showArtwork(index);

            });

        });

    }


    /* =========================================
       08. DISPLAY ARTWORK
    ========================================= */

    function showArtwork(index, scrollThumbnail = true) {

        if (artworkList.length === 0) return;


        /* LOOP GALLERY */

        currentIndex =

            (index % artworkList.length +
                artworkList.length) %

            artworkList.length;


        const artwork =
            artworkList[currentIndex];


        /* UPDATE MAIN IMAGE */

        mainArtwork.classList.remove("fade-in");

        mainArtwork.src = artwork.src;

        mainArtwork.alt = artwork.alt;

        void mainArtwork.offsetWidth;

        mainArtwork.classList.add("fade-in");


        /* UPDATE INFORMATION */

        artworkName.textContent =
            "ARTWORK " + artwork.number;

        currentArtwork.textContent =
            artwork.number;

        totalArtworks.textContent =
            formatNumber(artworkList.length);


        /* UPDATE THUMBNAILS */

        updateActiveThumbnail(scrollThumbnail);


        /* UPDATE LIGHTBOX */

        if (lightbox.open) {

            updateLightbox();

        }

    }


    /* =========================================
       09. ACTIVE THUMBNAIL
    ========================================= */

    function updateActiveThumbnail(scrollThumbnail) {

        const thumbnails =
            thumbnailTrack.querySelectorAll(
                ".thumbnail-button"
            );

        thumbnails.forEach((thumbnail, index) => {

            const isActive =
                index === currentIndex;

            thumbnail.classList.toggle(
                "active",
                isActive
            );

            thumbnail.setAttribute(
                "aria-pressed",
                String(isActive)
            );

        });


        /* SCROLL ACTIVE THUMBNAIL INTO CENTER */

        const activeThumbnail =
            thumbnails[currentIndex];

        if (activeThumbnail && scrollThumbnail) {

            const targetPosition =

                activeThumbnail.offsetLeft -

                thumbnailTrack.offsetLeft -

                thumbnailTrack.clientWidth / 2 +

                activeThumbnail.clientWidth / 2;


            thumbnailTrack.scrollTo({

                left: targetPosition,

                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth"

            });

        }

    }


    /* =========================================
       10. PREVIOUS / NEXT ARTWORK
    ========================================= */

    function showPreviousArtwork() {

        showArtwork(currentIndex - 1);

    }

    function showNextArtwork() {

        showArtwork(currentIndex + 1);

    }


    previousArtwork.addEventListener(

        "click",

        showPreviousArtwork

    );

    nextArtwork.addEventListener(

        "click",

        showNextArtwork

    );


    /* =========================================
       11. THUMBNAIL SCROLL BUTTONS
    ========================================= */

    thumbnailPrevious.addEventListener("click", () => {

        thumbnailTrack.scrollBy({

            left: -thumbnailTrack.clientWidth * 0.8,

            behavior: "smooth"

        });

    });

    thumbnailNext.addEventListener("click", () => {

        thumbnailTrack.scrollBy({

            left: thumbnailTrack.clientWidth * 0.8,

            behavior: "smooth"

        });

    });


    /* =========================================
       12. CATEGORY BUTTON EVENTS
    ========================================= */

    categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const category =
                button.dataset.category;

            if (category === currentCategory) return;

            selectCategory(category);

        });

    });


    /* =========================================
       13. FULLSCREEN LIGHTBOX
    ========================================= */

    function updateLightbox() {

        if (artworkList.length === 0) return;

        const artwork =
            artworkList[currentIndex];

        lightboxImage.src =
            artwork.src;

        lightboxImage.alt =
            artwork.alt;

        lightboxCounter.textContent =

            artwork.number +

            " / " +

            formatNumber(artworkList.length);

    }


    function openLightbox() {

        if (artworkList.length === 0) return;

        if (lightbox.open) return;

        updateLightbox();

        lightbox.showModal();

        document.body.style.overflow = "hidden";

    }


    function closeLightbox() {

        if (!lightbox.open) return;

        lightbox.close();

    }


    /* OPEN LIGHTBOX */

    openArtwork.addEventListener("click", event => {

        if (suppressImageClick) {

            event.preventDefault();

            suppressImageClick = false;

            return;

        }

        openLightbox();

    });


    expandArtwork.addEventListener(

        "click",

        openLightbox

    );


    /* CLOSE LIGHTBOX */

    lightboxClose.addEventListener(

        "click",

        closeLightbox

    );


    lightbox.addEventListener("close", () => {

        document.body.style.overflow = "";

    });


    /* LIGHTBOX NAVIGATION */

    lightboxPrevious.addEventListener(

        "click",

        showPreviousArtwork

    );

    lightboxNext.addEventListener(

        "click",

        showNextArtwork

    );


    /* =========================================
       14. KEYBOARD CONTROLS
    ========================================= */

    document.addEventListener("keydown", event => {

        if (artworkList.length === 0) return;

        if (
            event.altKey ||
            event.ctrlKey ||
            event.metaKey
        ) return;

        if (
            event.target.closest(
                ".side-menu, .language-menu, input, textarea, select"
            )
        ) return;


        if (event.key === "ArrowLeft") {

            event.preventDefault();

            showPreviousArtwork();

        }


        if (event.key === "ArrowRight") {

            event.preventDefault();

            showNextArtwork();

        }


        if (event.key === "Escape" && lightbox.open) {

            event.preventDefault();

            closeLightbox();

        }

    });


    /* =========================================
       15. MOBILE SWIPE CONTROLS
    ========================================= */

    function enableSwipe(element, isMainViewer = false) {

        let startX = 0;

        let startY = 0;


        element.addEventListener(

            "touchstart",

            event => {

                startX = event.changedTouches[0].clientX;

                startY = event.changedTouches[0].clientY;

            },

            { passive: true }

        );


        element.addEventListener(

            "touchend",

            event => {

                const endX =
                    event.changedTouches[0].clientX;

                const endY =
                    event.changedTouches[0].clientY;

                const differenceX =
                    endX - startX;

                const differenceY =
                    endY - startY;


                /* IGNORE VERTICAL SCROLL */

                if (

                    Math.abs(differenceX) < 50 ||

                    Math.abs(differenceX) <=
                    Math.abs(differenceY)

                ) return;


                /* PREVENT ACCIDENTAL LIGHTBOX OPEN */

                if (isMainViewer) {

                    suppressImageClick = true;

                    setTimeout(() => {

                        suppressImageClick = false;

                    }, 400);

                }


                /* SWIPE LEFT */

                if (differenceX < 0) {

                    showNextArtwork();

                }


                /* SWIPE RIGHT */

                else {

                    showPreviousArtwork();

                }

            },

            { passive: true }

        );

    }


    enableSwipe(artworkStage, true);

    enableSwipe(lightboxImage);


    /* =========================================
       16. INITIALIZE GALLERY
    ========================================= */

    selectCategory("main-story");


});
/* =========================================
   17. BACKGROUND MUSIC
========================================= */

(() => {

    const bgm =
        document.getElementById("reanimal-bgm");

    const button =
        document.getElementById("reanimal-music-toggle");

    if (!bgm || !button) return;

    const icon =
        button.querySelector("i");


    /* DEFAULT VOLUME */

    bgm.volume = 0.3;


    /* UPDATE MUSIC BUTTON */

    function updateButton() {

        const playing = !bgm.paused;

        icon.className = playing

            ? "fa-solid fa-volume-high"

            : "fa-solid fa-volume-xmark";


        button.setAttribute(
            "aria-pressed",
            String(playing)
        );

        button.setAttribute(
            "aria-label",
            playing ? "BGMを一時停止" : "BGMを再生"
        );

    }


    /* PLAY BACKGROUND MUSIC */

    function startBGM() {

        bgm.play().then(() => {

            document.removeEventListener(
                "click",
                firstInteraction
            );

        }).catch(() => {

            updateButton();

        });

    }


    /* FIRST USER INTERACTION */

    function firstInteraction(event) {

        if (button.contains(event.target)) return;

        startBGM();

    }


    /* MUSIC BUTTON CLICK */

    button.addEventListener("click", () => {

        document.removeEventListener(
            "click",
            firstInteraction
        );

        if (bgm.paused) {

            startBGM();

        } else {

            bgm.pause();

        }

    });


    /* MUSIC EVENTS */

    bgm.addEventListener("play", updateButton);

    bgm.addEventListener("pause", updateButton);


    /* AUTOPLAY FALLBACK */

    document.addEventListener(
        "click",
        firstInteraction
    );


    /* INITIALIZE MUSIC */

    updateButton();

    startBGM();

})();
