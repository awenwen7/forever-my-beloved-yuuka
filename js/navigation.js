/* =========================================
   SHARED NAVIGATION
   Forever My Beloved Yuuka
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const pageTitle = "♡ Wen & Yuuka ♡";

   /* =====================================
   PAGE NAVIGATION SETTINGS
===================================== */

const navColor =
    document.body.dataset.navColor || "#806B5A";

const navWidth =
    document.body.dataset.navWidth || "680px";

document.documentElement.style.setProperty(
    "--nav-bg",
    navColor
);

document.documentElement.style.setProperty(
    "--nav-width",
    navWidth
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

                <svg viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="2"
                     stroke-linecap="round">
                    <path d="M4 7h16M4 12h16M4 17h16"/>
                </svg>

            </button>

            <div class="nav-title">${pageTitle}</div>

            <button class="language-button"
                    id="language-toggle"
                    aria-label="Select language"
                    aria-expanded="false">

                <svg viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="1.6"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M3 12h18M12 3a15 15 0 0 1 0 18
                             M12 3a15 15 0 0 0 0 18"/>
                </svg>

            </button>

        </header>

        <div class="menu-overlay" id="menu-overlay"></div>

        <nav class="side-menu"
             id="side-menu"
             aria-hidden="true">

            <button class="menu-close"
                    id="menu-close"
                    aria-label="Close menu">

                <svg viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="1.7"
                     stroke-linecap="round">
                    <path d="m6 6 12 12M18 6 6 18"/>
                </svg>

            </button>

            <div class="menu-heading">
                ♡ Wen &amp; Yuuka ♡
            </div>

            <!-- SOCIAL LINKS -->

            <div class="menu-socials">

                <!-- Twitter -->

                <a class="menu-social-icon"
                   href="https://x.com/_awen7"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="X">

                    <svg viewBox="0 0 24 24"
                         aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723 9.99 9.99 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482A13.98 13.98 0 0 1 1.64 3.162a4.822 4.822 0 0 0-.666 2.475 4.92 4.92 0 0 0 2.188 4.1 4.903 4.903 0 0 1-2.23-.616v.06a4.926 4.926 0 0 0 3.946 4.827 4.936 4.936 0 0 1-2.224.084 4.936 4.936 0 0 0 4.6 3.42A9.874 9.874 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.46-2.548z"/>
                    </svg>

                </a>

                <!-- YouTube -->

                <a class="menu-social-icon"
                   href="https://youtube.com/playlist?list=PLRUbGBTaFHnvHvLbeXV1Fbs-R1oQ9p-Ol&si=H0mvf07D8bgm6zHt"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="YouTube">

                    <svg viewBox="0 0 24 24"
                         aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.376.55A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.5 12 20.5 12 20.5s7.505 0 9.376-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 23.498 6.186zM9.6 15.5v-7l6.3 3.5-6.3 3.5z"/>
                    </svg>

                </a>

                <!-- GitHub -->

                <a class="menu-social-icon"
                   href="https://github.com/awenwen7/forever-my-beloved-yuuka"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="GitHub">

                    <svg viewBox="0 0 24 24"
                         aria-hidden="true">
                        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.15-2.97-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.05-1.13 3.05-1.13.61 1.53.23 2.66.11 2.94.72.77 1.15 1.76 1.15 2.97 0 4.27-2.6 5.22-5.08 5.5.4.35.76 1.02.76 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9z"/>
                    </svg>

                </a>

            </div>

            <div class="menu-divider"></div>

            <div class="menu-label">MENU</div>

            <div id="menu-links">

                <!-- HOME -->

                <section class="menu-section home-section">

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

                <!-- MEMORIES -->

                <section class="menu-section memories-section">

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

        <!-- LANGUAGE MENU -->

        <div class="language-menu"
             id="language-menu"
             hidden>

            <button class="language-option"
                    data-language="ja">
                日本語
                <span class="language-check">✓</span>
            </button>

            <button class="language-option"
                    data-language="zh-TW">
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

    const menuToggle =
        document.getElementById("menu-toggle");

    const menuClose =
        document.getElementById("menu-close");

    const sideMenu =
        document.getElementById("side-menu");

    const menuOverlay =
        document.getElementById("menu-overlay");

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

                const check =
                    option.querySelector(".language-check");

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

document.querySelectorAll(".menu-link").forEach(link => {

    const linkURL = new URL(link.href, window.location.href);

    // 標示目前所在頁面
    if (
        linkURL.pathname === currentPath &&
        (
            linkURL.hash === "" ||
            linkURL.hash === currentHash
        )
    ) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }

    link.addEventListener("click", event => {

        // About Us：開啟介紹彈窗
        if (linkURL.hash === "#about-website") {
            event.preventDefault();
            closeSideMenu();

            const aboutModal =
                document.getElementById("aboutModal");

            if (aboutModal) {
                aboutModal.hidden = false;
                aboutModal.setAttribute("aria-hidden", "false");
                document.body.style.overflow = "hidden";
            }

            return;
        }

        // 判斷是否為目前頁面的錨點
        if (
            linkURL.pathname === window.location.pathname &&
            linkURL.hash
        ) {
            event.preventDefault();
            closeSideMenu();

            const target =
                document.querySelector(linkURL.hash);

            if (!target) return;

            history.pushState(null, "", linkURL.hash);

            const offset =
                linkURL.hash === "#osaka-weather" ? 125 : 66;

            const top =
                target.getBoundingClientRect().top +
                window.scrollY -
                offset;

            window.scrollTo({
                top: Math.max(0, top),
                behavior: "smooth"
            });

            return;
        }

        // 其他頁面連結照常跳轉
        closeSideMenu();

    });

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
