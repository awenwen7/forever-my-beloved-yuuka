
/* =========================================
   SHARED NAVIGATION
   Forever My Beloved Yuuka
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       PAGE SETTINGS
       Each page can customize its title
       and navigation bar color.
    ===================================== */

    const pageTitle =
        document.body.dataset.pageTitle || "♡ Wen & Yuuka ♡";

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

            <button
                class="nav-button"
                id="menu-toggle"
                aria-label="Open menu"
                aria-expanded="false"
            >
                <svg viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="1.7"
                     stroke-linecap="round">
                    <path d="M4 7h16M4 12h16M4 17h16"/>
                </svg>
            </button>

            <div class="nav-title">${pageTitle}</div>

            <button
                class="language-button"
                id="language-toggle"
                aria-label="Select language"
                aria-expanded="false"
            >
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

            <div class="menu-socials">

                <a class="menu-social-icon"
                   href="https://x.com/_awen7"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="X">
                    <span>𝕏</span>
                </a>

                <a class="menu-social-icon"
                   href="https://www.youtube.com/playlist?list="
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="YouTube">
                    <span>▶</span>
                </a>

                <a class="menu-social-icon"
                   href="https://github.com/awenwen7/forever-my-beloved-yuuka"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="GitHub">
                    <span>⌘</span>
                </a>

            </div>

            <div class="menu-divider"></div>

            <div id="menu-links">

                <section class="menu-section">

                    <div class="menu-section-title">HOME</div>

                    <div class="menu-links">

                        <a class="menu-link" href="index.html#home">
                            Home
                        </a>

                        <a class="menu-link" href="index.html#about-website">
                            About
                        </a>

                        <a class="menu-link" href="index.html#our-days">
                            Our Days
                        </a>

                        <a class="menu-link" href="index.html#osaka-weather">
                            Osaka Weather
                        </a>

                        <a class="menu-link" href="important-days.html">
                            Important Days
                        </a>

                    </div>
                </section>

                <div class="menu-divider"></div>

                <section class="menu-section">

                    <div class="menu-section-title">MEMORIES</div>

                    <div class="menu-links">

                        <a class="menu-link" href="photos.html">Photos</a>
                        <a class="menu-link" href="gifts.html">Gifts</a>
                        <a class="menu-link" href="movies.html">Our Cinema</a>
                        <a class="menu-link" href="games.html">Our Games</a>
                        <a class="menu-link" href="little-things.html">Little Things</a>
                        <a class="menu-link" href="music.html">Music</a>
                        <a class="menu-link" href="letters.html">Letters</a>
                        <a class="menu-link" href="places.html">Places</a>
                        <a class="menu-link" href="timeline.html">Timeline</a>
                        <a class="menu-link" href="food.html">Food</a>
                        <a class="menu-link" href="wishlist.html">Wishlist</a>

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
                const check = option.querySelector(
                    ".language-check"
                );

                check.textContent =
                    option.dataset.language === currentLanguage
                        ? "✓"
                        : "";
            });
    }

    languageToggle.addEventListener("click", (event) => {
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

    document.addEventListener("click", (event) => {
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

            const samePage =
                linkURL.pathname === currentPath;

            const sameHash =
                linkURL.hash === currentHash;

            if (
                samePage &&
                (linkURL.hash === "" || sameHash)
            ) {
                link.classList.add("active");
                link.setAttribute("aria-current", "page");
            }

            link.addEventListener("click", () => {
                closeSideMenu();
            });
        });

    /* =====================================
       ESCAPE KEY
    ===================================== */

    document.addEventListener("keydown", (event) => {
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

