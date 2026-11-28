    
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       01. SETTINGS
    ========================================= */

    const imagePath = "../images/reanimal/";
    const musicPath = "../music/audio/";

    // 每個收藏區域預設顯示數量
    const previewCount = 6;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


    /* =========================================
       02. DLC DATA
    ========================================= */

    const dlcData = {

        /* DLC 01 — THE PRISONER */

        prisoner: {

            available: true,

            title: "囚人",

            subtitle: "THE PRISONER",

            cover: "dlc-archive.webp",

            music: "reanimal-bgm2.mp3",

            chapters: [

                {
                    title: "緩やかな下降",
                    subtitle: "THE SLOW DESCENT"
                },

                {
                    title: "焼け焦げた大地",
                    subtitle: "SCORCHED EARTH"
                },

                {
                    title: "君のそばに",
                    subtitle: "BY YOUR SIDE"
                }

            ],

          adventure: [

    /* ========================================
       CHAPTER 01 — THE SLOW DESCENT
       緩やかな下降
    ========================================= */

    {
        type: "video",
        file: "1the-prisoner01.mp4",
        chapter: 1,
        note: ""
    },
    {
        type: "video",
        file: "1the-prisoner02.mp4",
        chapter: 1,
        note: ""
    },
    {
        type: "image",
        file: "1the-prisoner03.webp",
        chapter: 1,
        note: ""
    },
    {
        type: "video",
        file: "1the-prisoner04.mp4",
        chapter: 1,
        note: ""
    },
    {
        type: "video",
        file: "1the-prisoner05.mp4",
        chapter: 1,
        note: ""
    },
    {
        type: "image",
        file: "1the-prisoner06.webp",
        chapter: 1,
        note: ""
    },
    {
        type: "image",
        file: "1the-prisoner07.webp",
        chapter: 1,
        note: ""
    },
    {
        type: "image",
        file: "1the-prisoner08.webp",
        chapter: 1,
        note: ""
    },


    /* ========================================
       CHAPTER 02 — SCORCHED EARTH
       焼け焦げた大地
    ========================================= */

    {
        type: "image",
        file: "2the-prisoner0.webp",
        chapter: 2,
        note: ""
    },
    {
        type: "image",
        file: "2the-prisoner01.webp",
        chapter: 2,
        note: ""
    },
    {
        type: "image",
        file: "2the-prisoner02.webp",
        chapter: 2,
        note: ""
    },
    {
        type: "image",
        file: "2the-prisoner03.webp",
        chapter: 2,
        note: ""
    },
    {
        type: "image",
        file: "2the-prisoner04.webp",
        chapter: 2,
        note: ""
    },
    {
        type: "image",
        file: "2the-prisoner05.webp",
        chapter: 2,
        note: ""
    },
    {
        type: "image",
        file: "2the-prisoner06.webp",
        chapter: 2,
        note: ""
    },
    {
        type: "image",
        file: "2the-prisoner07.webp",
        chapter: 2,
        note: ""
    },
    {
        type: "image",
        file: "2the-prisoner08.webp",
        chapter: 2,
        note: ""
    },
    {
        type: "image",
        file: "2the-prisoner09.webp",
        chapter: 2,
        note: ""
    },


    /* ========================================
       CHAPTER 03 — BY YOUR SIDE
       君のそばに
    ========================================= */

    {
        type: "image",
        file: "3the-prisoner01.webp",
        chapter: 3,
        note: ""
    },
    {
        type: "image",
        file: "3the-prisoner02.webp",
        chapter: 3,
        note: ""
    },
    {
        type: "image",
        file: "3the-prisoner03.webp",
        chapter: 3,
        note: ""
    },
    {
        type: "image",
        file: "3the-prisoner04.webp",
        chapter: 3,
        note: ""
    },
    {
        type: "video",
        file: "3the-prisoner05.mp4",
        chapter: 3,
        note: ""
    },
    {
        type: "image",
        file: "3the-prisoner06.webp",
        chapter: 3,
        note: ""
    },
    {
        type: "image",
        file: "3the-prisoner07.webp",
        chapter: 3,
        note: ""
    },
    {
        type: "video",
        file: "3the-prisoner08.mp4",
        chapter: 3,
        note: ""
    },
    {
        type: "image",
        file: "3the-prisoner09.webp",
        chapter: 3,
        note: ""
    },
    {
        type: "image",
        file: "3the-prisoner10.webp",
        chapter: 3,
        note: ""
    },
    {
        type: "image",
        file: "3the-prisoner11.webp",
        chapter: 3,
        note: ""
    }

]

        },


        /* DLC 02 */

        dlc02: {

            available: false,

            title: "赤い旗",

            subtitle: "RED FLAGS",

            cover: "",

            music: "reanimal-bgm2.mp3",

            chapters: [],

            adventure: [],

        },


        /* DLC 03 */

        dlc03: {

            available: false,

            title: "DLC 03",

            subtitle: "COMING SOON",

            cover: "",

            music: "reanimal-bgm2.mp3",

            chapters: [],

            adventure: [],

        }

    };


    /* =========================================
       03. STATE
    ========================================= */

    let currentDLC = "prisoner";

    let currentLightboxList = [];

    let currentLightboxIndex = 0;

    let musicEnabled = true;

    const collectionState = {

        adventure: {
            expanded: false
        }

    };


    /* =========================================
       04. DOM ELEMENTS
    ========================================= */

    const categoryButtons =
        document.querySelectorAll(".dlc-category");

    const dlcContent =
        document.getElementById("dlc-content");

    const dlcEmpty =
        document.getElementById("dlc-empty");

    const adventureSection =
        document.getElementById("our-adventure");

    const adventureTitle =
        document.getElementById("adventure-title");

    const adventureSubtitle =
        document.getElementById("adventure-subtitle");

    const storyCover =
        document.querySelector(".story-cover");

    const storyCoverImage =
        document.getElementById("story-cover-image");

    const chapterList =
        document.getElementById("chapter-list");


    /* LIGHTBOX */

    const lightbox =
        document.getElementById("media-lightbox");

    const lightboxStage =
        document.getElementById("lightbox-stage");

    const lightboxImage =
        document.getElementById("lightbox-image");

    const lightboxVideo =
        document.getElementById("lightbox-video");

    const lightboxClose =
        document.getElementById("lightbox-close");

    const lightboxPrevious =
        document.getElementById("lightbox-previous");

    const lightboxNext =
        document.getElementById("lightbox-next");

    const lightboxCounter =
        document.getElementById("lightbox-counter");


    /* BACKGROUND MUSIC */

    const bgm =
        document.getElementById("reanimal-bgm");

    const musicButton =
        document.getElementById("reanimal-music-toggle");

    const musicIcon =
        musicButton.querySelector("i");


    /* =========================================
       05. HELPER FUNCTIONS
    ========================================= */

    function formatNumber(number) {

        return String(number).padStart(2, "0");

    }


    function scrollToSection(element, offset = 90) {

        if (!element) return;

        const top =
            element.getBoundingClientRect().top
            + window.scrollY
            - offset;

        window.scrollTo({

            top: Math.max(0, top),

            behavior: reducedMotion.matches
                ? "instant"
                : "smooth"

        });

    }


    function restartAnimation(element, className) {

        if (!element) return;

        element.classList.remove(className);

        void element.offsetWidth;

        element.classList.add(className);

    }


    /* =========================================
       06. DLC SELECTION
    ========================================= */

    function selectDLC(dlcID, shouldScroll = true) {

        const data = dlcData[dlcID];

        if (!data) return;


        /* SAME DLC */

        if (dlcID === currentDLC && shouldScroll) {

            scrollToSection(
                data.available
                    ? adventureSection
                    : dlcEmpty
            );

            return;

        }


        currentDLC = dlcID;


        /* RESET COLLECTION STATE */

        collectionState.adventure.expanded = false;

        /* UPDATE CATEGORY BUTTONS */

        categoryButtons.forEach(button => {

            const active =
                button.dataset.dlc === dlcID;

            button.classList.toggle(
                "active",
                active
            );

            button.setAttribute(
                "aria-pressed",
                String(active)
            );

        });


        /* UNRELEASED DLC */

        if (!data.available) {

            dlcContent.hidden = true;

            dlcEmpty.hidden = false;

            restartAnimation(
                dlcEmpty,
                "content-reveal"
            );

            updateMusic(data.music);

            if (shouldScroll) {

                scrollToSection(dlcEmpty);

            }

            return;

        }


        /* AVAILABLE DLC */

        dlcContent.hidden = false;

        dlcEmpty.hidden = true;


        /* UPDATE TITLES */

        adventureTitle.textContent =
            data.title;

        adventureSubtitle.textContent =
            data.subtitle;


        /* UPDATE COVER */

        storyCover.hidden = !data.cover;

        if (data.cover) {

            storyCoverImage.src =
                imagePath + data.cover;

        }


        /* RESTART COVER ANIMATION */

        storyCover.style.animation = "none";

        void storyCover.offsetWidth;

        storyCover.style.animation = "";


        /* UPDATE CHAPTERS */

        renderChapters(data.chapters);


        /* UPDATE COLLECTIONS */

        renderCollection("adventure");

        /* UPDATE MUSIC */

        updateMusic(data.music);


        /* CONTENT ANIMATION */

        if (shouldScroll) {

            restartAnimation(
                dlcContent,
                "content-reveal"
            );

            scrollToSection(adventureSection);

        }

    }


    /* =========================================
       07. CHAPTER LIST
    ========================================= */

    function renderChapters(chapters) {

        chapterList.replaceChildren();

        chapters.forEach((chapter, index) => {

            const item =
                document.createElement("div");

            item.className = "chapter-item";


            const number =
                document.createElement("span");

            number.className = "chapter-number";

            number.textContent =
                formatNumber(index + 1);


            const text =
                document.createElement("div");

            text.className = "chapter-text";


            const title =
                document.createElement("h3");

            title.className = "chapter-title";

            title.textContent = chapter.title;


            const subtitle =
                document.createElement("p");

            subtitle.className = "chapter-subtitle";

            subtitle.textContent = chapter.subtitle;


            text.append(title, subtitle);

            item.append(number, text);

            chapterList.appendChild(item);

        });

    }


    /* =========================================
       08. MEDIA COLLECTION
    ========================================= */

    function renderCollection(type) {

        const list = dlcData[currentDLC][type];

        const expanded =
            collectionState[type].expanded;

        const grid =
            document.getElementById(`${type}-grid`);

        const empty =
            document.getElementById(`${type}-empty`);

        const count =
            document.getElementById(`${type}-count`);

        const toggle =
            document.getElementById(`${type}-toggle`);

        const progress =
            document.getElementById(`${type}-progress`);

        const toggleText =
            toggle.querySelector(".toggle-text");


        /* TOTAL ITEMS */

        count.textContent =
            `${list.length} ITEMS`;


        /* CLEAR PREVIOUS ITEMS */

        grid.replaceChildren();


        /* EMPTY COLLECTION */

        if (list.length === 0) {

            grid.hidden = true;

            empty.hidden = false;

            toggle.hidden = true;

            progress.hidden = true;

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

            return;

        }


        grid.hidden = false;

        empty.hidden = true;

        progress.hidden = false;


        /* DISPLAY LIMIT */

        const visibleList = expanded
            ? list
            : list.slice(0, previewCount);


        visibleList.forEach((media, index) => {

            const card =
                createMediaCard(media, index, type);

            grid.appendChild(card);

        });


        /* UPDATE BUTTON */

        toggle.hidden =
            list.length <= previewCount;

        toggle.setAttribute(
            "aria-expanded",
            String(expanded)
        );

        toggleText.textContent = expanded
            ? "CLOSE COLLECTION"
            : `VIEW ALL — ${list.length} ITEMS`;


        /* UPDATE PROGRESS */

        progress.textContent =
            `${visibleList.length} / ${list.length}`;

    }


    /* =========================================
       09. CREATE MEDIA CARD
    ========================================= */

    function createMediaCard(media, index, type) {

        const card =
            document.createElement("button");

        card.type = "button";

        card.className = "media-card";

        card.setAttribute(

            "aria-label",

            media.type === "video"
                ? `動画 ${formatNumber(index + 1)}`
                : `写真 ${formatNumber(index + 1)}`

        );


        /* VIDEO */

if (media.type === "video") {

    /* VIDEO THUMBNAIL */

    if (media.poster) {

        const image =
            document.createElement("img");

        image.src =
            imagePath + media.poster;

        image.alt = "";

        image.loading = "lazy";

        image.decoding = "async";

        card.appendChild(image);

    } else {

        const video =
            document.createElement("video");

        video.src =
            imagePath + media.file + "#t=0.1";

        video.preload = "metadata";

        video.muted = true;

        video.playsInline = true;

        video.controls = false;

        video.autoplay = false;

        video.draggable = false;

        video.style.pointerEvents = "none";

        video.setAttribute("aria-hidden", "true");

        card.appendChild(video);

    }


    /* PLAY ICON */

    const playIcon =
        document.createElement("span");

    playIcon.className = "media-play-icon";

    playIcon.innerHTML =
        '<i class="fa-solid fa-play" aria-hidden="true"></i>';

    card.appendChild(playIcon);

}


        /* PHOTO */

        else {

            const image =
                document.createElement("img");

            image.src =
                imagePath + media.file;

            image.alt =
                media.alt || `REANIMAL ${formatNumber(index + 1)}`;

            image.loading = "lazy";

            image.decoding = "async";

            image.draggable = false;

            card.appendChild(image);

        }


        /* MEDIA NUMBER */

        const number =
            document.createElement("span");

        number.className = "media-number";

        number.textContent =
            formatNumber(index + 1);

        card.appendChild(number);


        /* OPEN LIGHTBOX */

        card.addEventListener("click", () => {

            openLightbox(

                dlcData[currentDLC][type],

                index

            );

        });


        return card;

    }


    /* =========================================
       10. EXPAND & COLLAPSE COLLECTION
    ========================================= */

    function toggleCollection(type) {

        const state = collectionState[type];

        state.expanded = !state.expanded;

        renderCollection(type);


        const grid =
            document.getElementById(`${type}-grid`);

        const collection =
            document.getElementById(`${type}-collection`);


        /* EXPAND */

        if (state.expanded) {

            restartAnimation(
                grid,
                "collection-reveal"
            );

        }


        /* COLLAPSE */

        else {

            scrollToSection(collection);

        }

    }


    document
        .getElementById("adventure-toggle")
        .addEventListener("click", () => {

            toggleCollection("adventure");

        });


    /* =========================================
       11. CATEGORY BUTTON EVENTS
    ========================================= */

    categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            selectDLC(button.dataset.dlc, true);

        });

    });


    /* =========================================
       12. MEDIA LIGHTBOX
    ========================================= */

    function openLightbox(list, index) {

        if (!list.length) return;

        currentLightboxList = list;

        currentLightboxIndex = index;

        if (!lightbox.open) {

            lightbox.showModal();

        }

        document.body.style.overflow = "hidden";

        showLightboxMedia(index);

    }


    function showLightboxMedia(index) {

        const total =
            currentLightboxList.length;

        if (!total) return;


        /* LOOP NAVIGATION */

        currentLightboxIndex =
            ((index % total) + total) % total;


        const media =
            currentLightboxList[currentLightboxIndex];


        /* RESET PREVIOUS MEDIA */

        lightboxVideo.pause();

        lightboxVideo.removeAttribute("src");

        lightboxVideo.load();

        lightboxVideo.hidden = true;

        lightboxImage.hidden = true;


        /* VIDEO */

        if (media.type === "video") {

    lightboxVideo.src =
        imagePath + media.file;

    lightboxVideo.hidden = false;

    lightboxVideo.load();

}


        /* PHOTO */

        else {

            lightboxImage.src =
                imagePath + media.file;

            lightboxImage.alt =
                media.alt || "REANIMAL";

            lightboxImage.hidden = false;

        }


        /* UPDATE COUNTER */

        lightboxCounter.textContent =

            `${formatNumber(currentLightboxIndex + 1)} / ${formatNumber(total)}`;


        /* HIDE ARROWS IF ONLY ONE ITEM */

        lightboxPrevious.hidden = total <= 1;

        lightboxNext.hidden = total <= 1;

    }


    /* =========================================
       13. LIGHTBOX CONTROLS
    ========================================= */

    function previousMedia() {

        showLightboxMedia(
            currentLightboxIndex - 1
        );

    }


    function nextMedia() {

        showLightboxMedia(
            currentLightboxIndex + 1
        );

    }


    function closeLightbox() {

        if (lightbox.open) {

            lightbox.close();

        }

    }


    lightboxPrevious.addEventListener(
        "click",
        previousMedia
    );


    lightboxNext.addEventListener(
        "click",
        nextMedia
    );


    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );


    lightbox.addEventListener("close", () => {

    lightboxVideo.pause();

    lightboxVideo.removeAttribute("src");

    lightboxVideo.load();

    lightboxImage.removeAttribute("src");

    document.body.style.overflow = "";

});

    /* =========================================
       14. KEYBOARD CONTROLS
    ========================================= */

    document.addEventListener("keydown", event => {

        if (!lightbox.open) return;

        // 避免干擾影片播放器的鍵盤控制

        if (event.target.closest("video")) return;


        if (event.key === "ArrowLeft") {

            event.preventDefault();

            previousMedia();

        }


        if (event.key === "ArrowRight") {

            event.preventDefault();

            nextMedia();

        }


        if (event.key === "Escape") {

            event.preventDefault();

            closeLightbox();

        }

    });


    /* =========================================
       15. MOBILE SWIPE
    ========================================= */

    let touchStartX = 0;

    let touchStartY = 0;

    let swipeActive = false;


    lightboxStage.addEventListener(

        "touchstart",

        event => {

            // 不干擾影片播放進度控制

            if (!lightboxVideo.hidden) {

                swipeActive = false;

                return;

            }

            if (event.touches.length !== 1) {

                swipeActive = false;

                return;

            }

            swipeActive = true;

            touchStartX =
                event.touches[0].clientX;

            touchStartY =
                event.touches[0].clientY;

        },

        { passive: true }

    );


    lightboxStage.addEventListener(

        "touchend",

        event => {

            if (!swipeActive) return;

            swipeActive = false;

            const touchEndX =
                event.changedTouches[0].clientX;

            const touchEndY =
                event.changedTouches[0].clientY;

            const distanceX =
                touchEndX - touchStartX;

            const distanceY =
                touchEndY - touchStartY;


            if (
                Math.abs(distanceX) < 50 ||
                Math.abs(distanceX) <= Math.abs(distanceY)
            ) {

                return;

            }


            if (distanceX < 0) {

                nextMedia();

            } else {

                previousMedia();

            }

        },

        { passive: true }

    );


    lightboxStage.addEventListener(

        "touchcancel",

        () => {

            swipeActive = false;

        },

        { passive: true }

    );


    /* =========================================
       16. BACKGROUND MUSIC
    ========================================= */

    bgm.volume = 0.3;

    bgm.loop = true;


    function updateMusicButton() {

        const playing = !bgm.paused;

        musicIcon.className = playing
            ? "fa-solid fa-volume-high"
            : "fa-solid fa-volume-xmark";

        musicButton.setAttribute(
            "aria-pressed",
            String(playing)
        );

        musicButton.setAttribute(

            "aria-label",

            playing
                ? "BGMを一時停止"
                : "BGMを再生"

        );

    }


function startMusic() {

    if (!bgm.getAttribute("src")) return;

    if (!musicEnabled) return;

    bgm.play().catch(() => {

        updateMusicButton();

    });

}
    function updateMusic(file) {

    const nextSource = file
        ? new URL(musicPath + file, document.baseURI).href
        : "";


    /* SAME MUSIC — KEEP PLAYING */

    if (
        nextSource &&
        bgm.getAttribute("src") &&
        bgm.src === nextSource
    ) {

        musicButton.hidden = false;

        updateMusicButton();

        return;

    }


    /* CHANGE MUSIC */

    bgm.pause();

    bgm.removeAttribute("src");

    bgm.load();

    /* NO MUSIC FILE */

    if (!file) {

        musicButton.hidden = true;

        updateMusicButton();

        return;

    }


    /* LOAD MUSIC */

    bgm.src = nextSource;

    bgm.preload = "auto";

    musicButton.hidden = false;

    startMusic();

}

   /* =========================================
   17. MUSIC CONTROLS
========================================= */

/* MUSIC BUTTON */

musicButton.addEventListener("click", () => {

    if (bgm.paused) {

        musicEnabled = true;

        startMusic();

    } else {

        musicEnabled = false;

        bgm.pause();

    }

});


/* AUTOPLAY FALLBACK */

document.addEventListener("click", event => {

    if (musicButton.contains(event.target)) return;

    if (!musicEnabled) return;

    if (!bgm.getAttribute("src")) return;

    if (bgm.paused) {

        startMusic();

    }

});


/* UPDATE MUSIC BUTTON */

bgm.addEventListener(
    "play",
    updateMusicButton
);

bgm.addEventListener(
    "pause",
    updateMusicButton
);


    /* =========================================
       18. BACK TO TOP
    ========================================= */

    const backToTop =
        document.querySelector(".back-to-top");

    if (backToTop) {

        backToTop.addEventListener("click", event => {

            event.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: reducedMotion.matches
                    ? "instant"
                    : "smooth"

            });

        });

    }


    /* =========================================
       19. INITIALIZATION
    ========================================= */

    selectDLC("prisoner", false);

    updateMusicButton();

});
