
/* =========================================
   SHARED NAVIGATION
   Forever My Beloved Yuuka
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const pageTitle = "♡ Wen & Yuuka ♡";
    const navColor =
        document.body.dataset.navColor || "#806B5A";

    document.documentElement.style.setProperty(
        "--nav-bg",
        navColor
    );

    /* =====================================
       NAVIGATION HTML
    ===================================== */

    const navigationHTML = `
        <header class="site-header">

            <button class="nav-button"
                    id="menu-toggle"
                    aria-label="Open menu"
                    aria-expanded="false">
                <svg viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="1.7"
                     stroke-linecap="round">
                    <path d="M4 7h16M4 12h16M4 17h16"/>
                </svg>
            </button>

            <div class="nav-title">${pageTitle}</div>

            <button class="language-button"
                    id="language-toggle"
                    aria-label="Select language"
                    aria-expanded="false">
                <svg viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="1.6"
                     stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M3 12h18M12 3a15 15 0 0 1 0 18
                             M12 3a15 15 0 0 0 0 18"/>
                </svg>
            </button>

        </header>

        <div class="menu-overlay" id="menu-overlay"></div>

        <nav class="side-menu" id="side-menu"
             aria-hidden="true">

            <button class="menu-close" id="menu-close"
                    aria-label="Close menu">
                <svg viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="1.7"
                     stroke-linecap="round">
                    <path d="m6 6 12 12M18 6 6 18"/>
                </svg>
            </button>

            <div class="menu-heading">
                ♡ Wen &amp; Yuuka ♡
            </div>

            <div class="menu-label">MENU</div>

           
<div class="menu-socials">

    <!-- X / Twitter -->
    <a class="menu-social-icon"
       href="https://x.com/_awen7"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="X">
        <svg viewBox="0 0 24 24"
             fill="currentColor"
             aria-hidden="true">
            <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-8.1L5 22H1.8l7.3-8.4L1.3 2h6.5l4.4 7.5L18.9 2zm-1.1 17.9h1.7L6.7 4H4.9l12.9 15.9z"/>
        </svg>
    </a>

    <!-- YouTube -->
    <a class="menu-social-icon"
       href="https://www.youtube.com/playlist?list="
       target="_blank"
       rel="noopener noreferrer"
       aria-label="YouTube">
        <svg viewBox="0 0 24 24"
             fill="currentColor"
             aria-hidden="true">
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.8V8.2l6.3 3.8-6.3 3.8z"/>
        </svg>
    </a>

    <!-- GitHub -->
    <a class="menu-social-icon"
       href="https://github.com/awenwen7/forever-my-beloved-yuuka"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="GitHub">
        <svg viewBox="0 0 24 24"
             fill="currentColor"
             aria-hidden="true">
            <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.7 1.7.3 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9z"/>
        </svg>
    </a>

</div>


            <div class="menu-divider"></div>

            <div id="menu-links">

                <section class="menu-section">

                    <div class="menu-section-title">HOME</div>

                    <div class="menu-links">

                        <a class="menu-link"
                           href="index.html#home">
                           ホーム｜Home
                        </a>

                        <a class="menu-link"
                           href="index.html#about-website">
                           私たちについて｜About Us
                        </a>

                        <a class="menu-link"
                           href="index.html#our-days">
                           ふたりの日々｜Our Days
                        </a>

                        <a class="menu-link"
                           href="index.html#osaka-weather">
                           大阪の天気｜Osaka Weather
                        </a>

                        <a class="menu-link"
                           href="important-days.html">
                           大切な記念日｜Important Days
                        </a>

                    </div>
                </section>

                <div class="menu-divider"></div>

                <section class="menu-section">

                    <div class="menu-section-title">MEMORIES</div>

                    <div class="menu-links">

                        <a class="menu-link" href="photos.html">
                            写真｜Photos
                        </a>

                        <a class="menu-link" href="gifts.html">
                            イラストと贈り物｜Illustrations & Gifts
                        </a>

                        <a class="menu-link" href="movies.html">
                            映画｜Movies
                        </a>

                        <a class="menu-link" href="games.html">
                            ゲーム｜Games
                        </a>

                        <a class="menu-link" href="little-things.html">
                            日々の小さなこと｜Little Things
                        </a>

                        <a class="menu-link" href="music.html">
                            音楽｜Music
                        </a>

                        <a class="menu-link" href="letters.html">
                            手紙｜Letters
                        </a>

                        <a class="menu-link" href="places.html">
                            ふたりで訪れた場所｜Places
                        </a>

                        <a class="menu-link" href="timeline.html">
                            思い出のタイムライン｜Timeline
                        </a>

                        <a class="menu-link" href="food.html">
                            ふたりの食べもの｜Food
                        </a>

                        <a class="menu-link" href="wishlist.html">
                            いつか叶えたいこと｜Wishlist
                        </a>

                    </div>
                </section>

            </div>
        </nav>

        <div class="language-menu" id="language-menu" hidden>

            <button class="language-option" data-language="ja">
                日本語
                <span class="language-check">✓</span>
            </button>

            <button class="language-option" data-language="zh-TW">
                繁體中文
                <span class="language-check"></span>
            </button>

        </div>
    `;

    document.body.insertAdjacentHTML(
        "afterbegin",
        navigationHTML
    );

    /* =====================================
       ELEMENTS
    ===================================== */

    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const sideMenu = document.getElementById("side-menu");
    const menuOverlay = document.getElementById("menu-overlay");

    const languageToggle =
        document.getElementById("language-toggle");

    const languageMenu =
        document.getElementById("language-menu");

    /* =====================================
       SIDE MENU
    ===================================== */

    function openSideMenu() {
        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");

        sideMenu.setAttribute("aria-hidden", "false");
        menuToggle.setAttribute("aria-expanded", "true");

        document.body.style.overflow = "hidden";
    }

    function closeSideMenu() {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");

        sideMenu.setAttribute("aria-hidden", "true");
        menuToggle.setAttribute("aria-expanded", "false");

        document.body.style.overflow = "";
    }

    menuToggle.addEventListener("click", openSideMenu);
    menuClose.addEventListener("click", closeSideMenu);
    menuOverlay.addEventListener("click", closeSideMenu);

    /* =====================================
       LANGUAGE MENU
    ===================================== */

    let currentLanguage = "ja";

    function updateLanguageCheck() {
        document.querySelectorAll(".language-option")
            .forEach(option => {
                const check = option.querySelector(".language-check");

                check.textContent =
                    option.dataset.language === currentLanguage
                        ? "✓"
                        : "";
            });
    }

    languageToggle.addEventListener("click", event => {
        event.stopPropagation();

        languageMenu.hidden = !languageMenu.hidden;

        languageToggle.setAttribute(
            "aria-expanded",
            String(!languageMenu.hidden)
        );
    });

    document.querySelectorAll(".language-option")
        .forEach(option => {
            option.addEventListener("click", () => {
                currentLanguage = option.dataset.language;

                updateLanguageCheck();

                languageMenu.hidden = true;

                languageToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });
        });

    document.addEventListener("click", event => {
        if (
            !languageMenu.contains(event.target) &&
            !languageToggle.contains(event.target)
        ) {
            languageMenu.hidden = true;

            languageToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });

    updateLanguageCheck();

    /* =====================================
       ACTIVE MENU LINK
    ===================================== */

    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    document.querySelectorAll(".menu-link")
        .forEach(link => {

            const linkURL = new URL(
                link.href,
                window.location.href
            );

            if (
                linkURL.pathname === currentPath &&
                (linkURL.hash === "" || linkURL.hash === currentHash)
            ) {
                link.classList.add("active");
                link.setAttribute("aria-current", "page");
            }

            link.addEventListener("click", closeSideMenu);
        });

    /* =====================================
       ESCAPE KEY
    ===================================== */

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeSideMenu();

            languageMenu.hidden = true;

            languageToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });

});
