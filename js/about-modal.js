
/* =========================================
   ABOUT US MODAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("aboutModal");

    if (!modal) return;

    const closeButtons = modal.querySelectorAll("[data-about-close]");
    const modalContent = modal.querySelector(".about-modal-content");

    let previousFocus = null;

    /* OPEN MODAL */

    function openAboutModal() {

        previousFocus = document.activeElement;

        modal.hidden = false;
        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        const closeButton = modal.querySelector(".about-modal-close");

        if (closeButton) {
            closeButton.focus();
        }

    }

    /* CLOSE MODAL */

    function closeAboutModal() {

        if (modal.hidden) return;

        modal.hidden = true;
        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        if (previousFocus && typeof previousFocus.focus === "function") {
            previousFocus.focus();
        }

    }

    /* OPEN BUTTON / ABOUT US LINK */

    document.addEventListener("click", (event) => {

        const trigger = event.target.closest(
            '[data-about-open], a[href$="#about-website"]'
        );

        if (!trigger) return;

        event.preventDefault();
        openAboutModal();

    });

    /* CLOSE BUTTONS AND OVERLAY */

    closeButtons.forEach(button => {

        button.addEventListener("click", closeAboutModal);

    });

    /* ESCAPE KEY */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape" && !modal.hidden) {
            closeAboutModal();
        }

    });

    /* KEEP CLICKS INSIDE THE MODAL */

    modalContent.addEventListener("click", (event) => {
        event.stopPropagation();
    });

});

