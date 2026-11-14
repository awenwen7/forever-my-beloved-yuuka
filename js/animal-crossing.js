
/* =====================================
   ANIMAL CROSSING
   FURTARI NO SHIMA
===================================== */

const islandPages = {
  passport: {
    icon: "🪪",
    title: "パスポート",
    english: "PASSPORT",
    content: `
      <div class="ac-info-box">
        <h3>WEN'S PASSPORT</h3>
        <p>プレイヤーのプロフィールや島の情報を記録します。</p>
      </div>
      <div class="ac-info-box">
        <h3>YUUKA'S PASSPORT</h3>
        <p>ふたりのパスポートを同じページに並べて保存します。</p>
      </div>
    `
  },

  music: {
    icon: "🎵",
    title: "ミュージック",
    english: "MUSIC",
    content: `
      <div class="ac-empty">
        <span class="ac-empty-icon">🎶</span>
        <p>まだ曲が登録されていません。</p>
        <p>お気に入りの音楽を追加してね ♡</p>
      </div>
    `
  },

  photos: {
    icon: "📷",
    title: "島の写真",
    english: "PHOTO ALBUM",
    content: `
      <div class="ac-empty">
        <span class="ac-empty-icon">🌷</span>
        <p>ふたりの島で撮った写真を保存します。</p>
        <p>思い出の写真をここに追加してね。</p>
      </div>
    `
  },

  dream: {
    icon: "🌙",
    title: "夢の島",
    english: "DREAM ISLAND",
    content: `
      <div class="ac-empty">
        <span class="ac-empty-icon">✨</span>
        <p>夢の中で出会った景色を保存します。</p>
      </div>
    `
  },

  design: {
    icon: "🌳",
    title: "島づくり",
    english: "ISLAND DESIGN",
    content: `
      <div class="ac-empty">
        <span class="ac-empty-icon">🌿</span>
        <p>島の地形や道、橋、坂道など。</p>
        <p>ふたりの島づくりの記録です。</p>
      </div>
    `
  },

  home: {
    icon: "🏡",
    title: "おうち",
    english: "OUR HOME",
    content: `
      <div class="ac-empty">
        <span class="ac-empty-icon">🪴</span>
        <p>おうちの外観やお部屋の写真を保存します。</p>
      </div>
    `
  },

  bulletin: {
    icon: "📌",
    title: "島のおしらせ",
    english: "ISLAND BULLETIN",
    content: `
      <div class="ac-notice">
        <span class="ac-notice-date">WELCOME</span>
        <h3>ふたりの島へようこそ！</h3>
        <p>ここはふたりだけの小さな島。</p>
      </div>

      <div class="ac-notice">
        <span class="ac-notice-date">ISLAND NEWS</span>
        <h3>島のニュース</h3>
        <p>新しい思い出ができたら、ここにお知らせを追加してね。</p>
      </div>

      <div class="ac-notice">
        <span class="ac-notice-date">SPECIAL NOTE</span>
        <h3>ふたりへのメモ ♡</h3>
        <p>これからも一緒に、たくさんの思い出を作ろうね。</p>
      </div>
    `
  },

  events: {
    icon: "🎉",
    title: "イベント",
    english: "EVENTS",
    content: `
      <div class="ac-empty">
        <span class="ac-empty-icon">🎂</span>
        <p>誕生日や季節のイベントなど、</p>
        <p>ふたりで過ごした特別な日を保存します。</p>
      </div>
    `
  },

  memories: {
    icon: "💗",
    title: "ふたりの記録",
    english: "OUR MEMORIES",
    content: `
      <div class="ac-empty">
        <span class="ac-empty-icon">💕</span>
        <p>ふたりだけの大切な思い出。</p>
        <p>忘れたくない瞬間をここに残そう。</p>
      </div>
    `
  }
};


/* =====================================
   OPEN MODAL
===================================== */

const modal = document.getElementById("acModal");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalEnglish = document.getElementById("modalEnglish");
const modalContent = document.getElementById("modalContent");

const menuButtons = document.querySelectorAll(".ac-tile");

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageName = button.dataset.page;
    const page = islandPages[pageName];

    if (!page) return;

    modalIcon.textContent = page.icon;
    modalTitle.textContent = page.title;
    modalEnglish.textContent = page.english;
    modalContent.innerHTML = page.content;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});


/* =====================================
   CLOSE MODAL
===================================== */

function closeIslandModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("closeModal")
  .addEventListener("click", closeIslandModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeIslandModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeIslandModal();
  }
});
