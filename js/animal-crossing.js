/* =========================================
   1. ELEMENTS
========================================= */

const acModal = document.getElementById("acModal");

const acModalClose = document.getElementById("acModalClose");

const acModalTitle = document.getElementById("acModalTitle");

const acModalEnglish = document.getElementById("acModalEnglish");

const acModalContent = document.getElementById("acModalContent");

const acMenuButtons = document.querySelectorAll(".ac-menu-button");


/* =========================================
   2. SECTION CONTENT
========================================= */

const acSections = {

    passport: {
        title: "パスポート",
        english: "PASSPORT",

        content: `
            <div class="ac-passport-grid">

                <article class="ac-passport-card">

                    <img
                        class="ac-passport-photo"
                        src="images/animal-crossing/passport/wen.jpg"
                        alt="Wen's passport"
                    >

                    <div class="ac-passport-info">
                        <h3>Wen</h3>
                        <p>ISLAND RESIDENT</p>
                    </div>

                </article>


                <article class="ac-passport-card">

                    <img
                        class="ac-passport-photo"
                        src="images/animal-crossing/passport/yuuka.jpg"
                        alt="Yuuka's passport"
                    >

                    <div class="ac-passport-info">
                        <h3>Yuuka</h3>
                        <p>ISLAND RESIDENT</p>
                    </div>

                </article>

            </div>
        `
    },


    music: {
        title: "ミュージック",
        english: "MUSIC",

        content: `
            <div class="ac-empty-state">

                <div class="ac-empty-icon">♫</div>

                <h3>島の音楽</h3>

                <p>
                    これからふたりのお気に入りの音楽を<br>
                    少しずつ追加していこう。
                </p>

            </div>
        `
    },


    photos: {
        title: "島の写真",
        english: "PHOTO ALBUM",

        content: `
            <div class="ac-empty-state">

                <div class="ac-empty-icon">📷</div>

                <h3>島で撮った写真</h3>

                <p>
                    ふたりで過ごした島の日々を<br>
                    写真に残していこう。
                </p>

            </div>
        `
    },


    dream: {
        title: "夢の島",
        english: "DREAM ISLAND",

        content: `
            <div class="ac-empty-state">

                <div class="ac-empty-icon">☁</div>

                <h3>夢の中の島</h3>

                <p>
                    夢番地や訪れた島の記録を<br>
                    ここに残していこう。
                </p>

            </div>
        `
    },


    design: {
        title: "島づくり",
        english: "ISLAND DESIGN",

        content: `
            <div class="ac-empty-state">

                <div class="ac-empty-icon">🌳</div>

                <h3>ふたりの島づくり</h3>

                <p>
                    島の地形や道、橋や坂など<br>
                    ふたりで作った島の記録。
                </p>

            </div>
        `
    },


    home: {
        title: "おうち",
        english: "OUR HOME",

        content: `
            <div class="ac-empty-state">

                <div class="ac-empty-icon">🏡</div>

                <h3>ふたりのおうち</h3>

                <p>
                    おうちの外観やお部屋のインテリアを<br>
                    ここに記録していこう。
                </p>

            </div>
        `
    },


    bulletin: {
        title: "島のおしらせ",
        english: "ISLAND BULLETIN",

        content: `
            <div class="ac-bulletin-board">

                <h3 class="ac-bulletin-title">
                    ふたりの島のおしらせ
                </h3>

                <div class="ac-bulletin-paper">

                    <h3>📌 おしらせ</h3>

                    <p>
                        まだおしらせはありません。<br>
                        これから島での出来事を<br>
                        少しずつ書き残していこう。
                    </p>

                    <small>FROM OUR ISLAND ♡</small>

                </div>

            </div>
        `
    },


    events: {
        title: "イベント",
        english: "EVENTS",

        content: `
            <div class="ac-empty-state">

                <div class="ac-empty-icon">🎈</div>

                <h3>島のイベント</h3>

                <p>
                    誕生日や季節のイベントなど<br>
                    ふたりで楽しんだ日を記録しよう。
                </p>

            </div>
        `
    },


    memories: {
        title: "ふたりの記録",
        english: "OUR MEMORIES",

        content: `
            <div class="ac-empty-state">

                <div class="ac-empty-icon">♡</div>

                <h3>ふたりの大切な思い出</h3>

                <p>
                    この島で過ごした特別な時間を<br>
                    ひとつずつ残していこう。
                </p>

            </div>
        `
    }

};


/* =========================================
   3. OPEN MODAL
========================================= */

function openAcSection(sectionName) {

    const section = acSections[sectionName];

    if (!section) return;

    acModalTitle.textContent = section.title;

    acModalEnglish.textContent = section.english;

    acModalContent.innerHTML = section.content;

    acModal.classList.add("active");

    acModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}


/* =========================================
   4. CLOSE MODAL
========================================= */

function closeAcModal() {

    acModal.classList.remove("active");

    acModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


/* =========================================
   5. MENU BUTTON EVENTS
========================================= */

acMenuButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const sectionName = button.dataset.section;

        openAcSection(sectionName);

    });

});


/* =========================================
   6. CLOSE BUTTON
========================================= */

acModalClose.addEventListener("click", () => {

    closeAcModal();

});


/* =========================================
   7. BACKDROP CLICK
========================================= */

acModal.addEventListener("click", (event) => {

    if (event.target.hasAttribute("data-close-modal")) {

        closeAcModal();

    }

});


/* =========================================
   8. ESCAPE KEY
========================================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        acModal.classList.contains("active")
    ) {

        closeAcModal();

    }

});
