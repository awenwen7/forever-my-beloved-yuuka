
/* =========================================
   GAME CARTRIDGE INTERACTION
========================================= */

const cartridges = document.querySelectorAll(".game-cartridge");

const launchScreen = document.getElementById("launchScreen");
const launchCover = document.getElementById("launchCover");
const launchTitle = document.getElementById("launchTitle");
const closeLaunch = document.getElementById("closeLaunch");

let launchTimer = null;
let activePage = null;


/* =========================================
   ORIGINAL STARTUP SOUND
========================================= */

function playStartupSound() {

    try {

        const AudioContext =
            window.AudioContext || window.webkitAudioContext;

        if (!AudioContext) return;

        const audio = new AudioContext();

        [523.25, 659.25, 783.99].forEach((frequency, index) => {

            const oscillator = audio.createOscillator();
            const gain = audio.createGain();

            oscillator.type = "sine";
            oscillator.frequency.value = frequency;

            const startTime = audio.currentTime + index * 0.12;

            gain.gain.setValueAtTime(0, startTime);

            gain.gain.linearRampToValueAtTime(
                0.08,
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

        setTimeout(() => audio.close(), 1000);

    } catch (error) {

        console.log("Audio unavailable:", error);

    }

}


/* =========================================
   OPEN CARTRIDGE
========================================= */

function openCartridge(cartridge) {

    const title = cartridge.dataset.title;
    const cover = cartridge.dataset.cover;

    activePage = cartridge.dataset.page;

    clearTimeout(launchTimer);

    launchCover.src = cover;
    launchCover.alt = title + " cover";

    launchTitle.textContent = title;

    launchScreen.classList.remove("cover-open");

    launchScreen.classList.add("active");

    launchScreen.setAttribute("aria-hidden", "false");

    document.body.classList.add("launching");

    playStartupSound();

    launchTimer = setTimeout(() => {

        launchScreen.classList.add("cover-open");

    }, 750);

}


/* =========================================
   CLOSE CARTRIDGE
========================================= */

function closeCartridge() {

    clearTimeout(launchTimer);

    launchScreen.classList.remove("cover-open");
    launchScreen.classList.remove("active");

    launchScreen.setAttribute("aria-hidden", "true");

    document.body.classList.remove("launching");

    activePage = null;

}


/* =========================================
   CLICK EVENTS
========================================= */

cartridges.forEach((cartridge) => {

    cartridge.addEventListener("click", () => {

        openCartridge(cartridge);

    });

});


closeLaunch.addEventListener("click", closeCartridge);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        launchScreen.classList.contains("active")
    ) {

        closeCartridge();

    }

});
