
/* =========================================
   1. ELEMENTS
========================================= */

const cartridges = document.querySelectorAll(".game-cartridge");

const launchScreen = document.getElementById("launchScreen");
const launchCover = document.getElementById("launchCover");
const launchTitle = document.getElementById("launchTitle");

const closeLaunch = document.getElementById("closeLaunch");
const openMemoryButton = document.getElementById("openMemoryButton");

let activePage = null;


/* =========================================
   2. ORIGINAL STARTUP SOUND
========================================= */

function playStartupSound() {

    try {

        const AudioContext =
            window.AudioContext || window.webkitAudioContext;

        if (!AudioContext) return;

        const audio = new AudioContext();

        const notes = [
            523.25,
            659.25,
            783.99
        ];

        notes.forEach((frequency, index) => {

            const oscillator = audio.createOscillator();
            const gain = audio.createGain();

            oscillator.type = "sine";
            oscillator.frequency.value = frequency;

            const startTime = audio.currentTime + index * 0.12;

            gain.gain.setValueAtTime(0, startTime);

            gain.gain.linearRampToValueAtTime(
                0.24,
                startTime + 0.03
            );

            gain.gain.exponentialRampToValueAtTime(
                0.001,
                startTime + 0.25
            );

            oscillator.connect(gain);
            gain.connect(audio.destination);

            oscillator.start(startTime);
            oscillator.stop(startTime + 0.26);

        });

        setTimeout(() => {
            audio.close();
        }, 1000);

    } catch (error) {

        console.log("Audio unavailable:", error);

    }

}


/* =========================================
   3. OPEN CARTRIDGE
========================================= */

function openCartridge(cartridge) {

    const title = cartridge.dataset.title;
    const cover = cartridge.dataset.cover;
    const page = cartridge.dataset.page;

    if (!title || !cover || !page) {

        console.error("Game information is incomplete.");
        return;

    }

    activePage = page;

    launchCover.src = cover;
    launchCover.alt = title + " cover";

    launchTitle.textContent = title;

    document.body.classList.add("launching");

    launchScreen.removeAttribute("inert");
    launchScreen.setAttribute("aria-hidden", "false");

    /* Show the small complete cartridge */
    launchScreen.classList.add("active");

    playStartupSound();

}


/* =========================================
   4. CLOSE CARTRIDGE
========================================= */

function closeCartridge() {

    launchScreen.classList.remove("active");

    launchScreen.setAttribute("aria-hidden", "true");
    launchScreen.setAttribute("inert", "");

    document.body.classList.remove("launching");

    launchCover.src = "";
    launchCover.alt = "";

    activePage = null;

}


/* =========================================
   5. OPEN GAME MEMORY PAGE
========================================= */

function openMemoryPage() {

    if (!activePage) return;

    window.location.href = activePage;

}


/* =========================================
   6. CARTRIDGE CLICK EVENTS
========================================= */

cartridges.forEach((cartridge) => {

    cartridge.addEventListener("click", () => {

        openCartridge(cartridge);

    });

});


/* =========================================
   7. BUTTON EVENTS
========================================= */

closeLaunch.addEventListener("click", () => {

    closeCartridge();

});

openMemoryButton.addEventListener("click", () => {

    openMemoryPage();

});


/* =========================================
   8. ESCAPE KEY
========================================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        launchScreen.classList.contains("active")
    ) {

        closeCartridge();

    }

});


/* =========================================
   9. PAGE RESTORE
========================================= */

window.addEventListener("pageshow", () => {

    closeCartridge();

});
