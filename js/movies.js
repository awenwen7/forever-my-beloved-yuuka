const movies = [
    {
        id: "robot-dreams",

        // 電影基本資料
        title: "ロボット・ドリームズ",
        originalTitle: "Robot Dreams",
        year: 2023,
        director: "パブロ・ベルヘル",
        country: "スペイン",
        genre: ["アニメーション", "ドラマ"],
        duration: 102,

        // 電影收藏
        category: ["watched"],
        poster: "images/movie-posters/robot-dreams.jpg",

        // 觀影日期
        watchedDate: "2025.01.04"
    },
     {
        id: "look-back",

        // 電影基本資料
        title: "ルックバック",
        originalTitle: "Look Back",
        year: 2024,
        director: "押山清高",
        country: "日本",
        genre: ["アニメーション", "ドラマ"],
        duration: 58,

        // 電影收藏
        category: ["watched"],
        poster: "images/movie-posters/look-back.jpg",

        // 觀影日期
       watchedDate: "2024.11.10"
    },
    {
        id: "intouchables",

        // 電影基本資料
        title: "最強のふたり",
        originalTitle: "Intouchables",
        year: 2011,
        director: "エリック・トレダノ、オリヴィエ・ナカシュ",
        country: "フランス",
        genre: ["コメディ", "ドラマ"],
        duration: 112,

        // 電影收藏
        category: ["watched"],
        poster: "images/movie-posters/intouchables.jpg",

        // 觀影日期
        watchedDate: "2025.02.15"
    },
    {
        id: "society-of-the-snow",

        // 電影基本資料
        title: "雪山の絆",
        originalTitle: "Society of the Snow",
        year: 2023,
        director: "J・A・バヨナ",
        country: "スペイン・アメリカ・ウルグアイ・チリ",
        genre: ["ドラマ", "サバイバル", "スリラー"],
        duration: 144,

        // 電影收藏
        category: ["watched"],
        poster: "images/movie-posters/society-of-the-snow.jpg",

        // 觀影日期
        watchedDate: "2025.03.08"
    },
    {
        id: "happy-death-day",

        // 電影基本資料
        title: "ハッピー・デス・デイ",
        originalTitle: "Happy Death Day",
        year: 2017,
        director: "クリストファー・ランドン",
        country: "アメリカ",
        genre: ["ホラー", "スリラー"],
        duration: 96,

        // 電影收藏
        category: ["watched"],
        poster: "images/movie-posters/happy-death-day.jpg",

        // 觀影日期
        watchedDate: "2025.03.08"
    },
    {
        id: "incantation",

        // 電影基本資料
        title: "咒",
        originalTitle: "Incantation",
        year: 2022,
        director: "柯孟融",
        country: "台湾",
        genre: ["ホラー", "スリラー"],
        duration: 111,

        // 電影收藏
        category: ["watched"],
        poster: "images/movie-posters/incantation.jpg",

        // 觀影日期
        watchedDate: "2025.03.08"
    },
    {
        id: "the-bucket-list",

        // 電影基本資料
        title: "最高の人生の見つけ方",
        originalTitle: "The Bucket List",
        year: 2007,
        director: "ロブ・ライナー",
        country: "アメリカ",
        genre: ["ドラマ", "コメディ"],
        duration: 97,

        // 電影收藏
        category: ["watched"],
        poster: "images/movie-posters/the-bucket-list.jpg",

        // 觀影日期
        watchedDate: "2025.04.01"
    }, 
    {
        id: "green-book",
        title: "グリーンブック",
        originalTitle: "Green Book",
        year: 2018,
        director: "ピーター・ファレリー",
        country: "アメリカ",
        genre: ["ドラマ", "コメディ"],
        duration: 130,
        category: ["watched"],
        poster: "images/movie-posters/green-book.jpg",
        watchedDate: "2025.05.20"
    },
    {
        id: "the-shawshank-redemption",
        title: "ショーシャンクの空に",
        originalTitle: "The Shawshank Redemption",
        year: 1994,
        director: "フランク・ダラボン",
        country: "アメリカ",
        genre: ["ドラマ"],
        duration: 142,
        category: ["watched"],
        poster: "images/movie-posters/the-shawshank-redemption.jpg",
        watchedDate: "2025.06.07"
    },
    {
        id: "sing",
        title: "SING／シング",
        originalTitle: "Sing",
        year: 2016,
        director: "ガース・ジェニングス",
        country: "アメリカ",
        genre: ["アニメーション", "コメディ"],
        duration: 108,
        category: ["watched"],
        poster: "images/movie-posters/sing.jpg",
        watchedDate: "2025.08.22"
    },
    {
        id: "happy-death-day-2u",
        title: "ハッピー・デス・デイ 2U",
        originalTitle: "Happy Death Day 2U",
        year: 2019,
        director: "クリストファー・ランドン",
        country: "アメリカ",
        genre: ["ホラー", "コメディ"],
        duration: 100,
        category: ["watched"],
        poster: "images/movie-posters/happy-death-day-2u.jpg",
        watchedDate: "2025.08.22"
    },
    {
        id: "sing-2",
        title: "SING／シング：ネクストステージ",
        originalTitle: "Sing 2",
        year: 2021,
        director: "ガース・ジェニングス",
        country: "アメリカ",
        genre: ["アニメーション", "コメディ"],
        duration: 110,
        category: ["watched"],
        poster: "images/movie-posters/sing-2.jpg",
        watchedDate: "2025.10.05"
    },
    {
        id: "last-christmas",
        title: "ラスト・クリスマス",
        originalTitle: "Last Christmas",
        year: 2019,
        director: "ポール・フェイグ",
        country: "イギリス",
        genre: ["ロマンス", "コメディ"],
        duration: 103,
        category: ["watched"],
        poster: "images/movie-posters/last-christmas.jpg",
        watchedDate: "2025.12.25"
    },
    {
        id: "the-map-of-tiny-perfect-things",
        title: "明日への地図を探して",
        originalTitle: "The Map of Tiny Perfect Things",
        year: 2021,
        director: "イアン・サミュエルズ",
        country: "アメリカ",
        genre: ["ファンタジー", "ロマンス"],
        duration: 99,
        category: ["watched"],
        poster: "images/movie-posters/the-map-of-tiny-perfect-things.jpg",
        watchedDate: "2026.01.05"
    },
    {
        id: "night-at-the-museum",
        title: "ナイト ミュージアム",
        originalTitle: "Night at the Museum",
        year: 2006,
        director: "ショーン・レヴィ",
        country: "アメリカ",
        genre: ["ファンタジー", "コメディ"],
        duration: 108,
        category: ["watched"],
        poster: "images/movie-posters/night-at-the-museum.jpg",
        watchedDate: "2026.05.01"
    },
    {
        id: "chef",
        title: "シェフ 三ツ星フードトラック始めました",
        originalTitle: "Chef",
        year: 2014,
        director: "ジョン・ファヴロー",
        country: "アメリカ",
        genre: ["ドラマ", "コメディ"],
        duration: 115,
        category: ["watched"],
        poster: "images/movie-posters/chef.jpg",
        watchedDate: "2026.05.18"
    },
    {
        id: "abigail",
        title: "アビゲイル",
        originalTitle: "Abigail",
        year: 2024,
        director: "マット・ベティネッリ＝オルピン、タイラー・ジレット",
        country: "アメリカ",
        genre: ["ホラー", "スリラー"],
        duration: 109,
        category: ["watched"],
        poster: "images/movie-posters/abigail.jpg",
        watchedDate: "2026.08.04"
    },
    {
        id: "all-quiet-on-the-western-front",
        title: "西部戦線異状なし",
        originalTitle: "All Quiet on the Western Front",
        year: 2022,
        director: "エドワード・ベルガー",
        country: "ドイツ",
        genre: ["ドラマ", "戦争"],
        duration: 148,
        category: ["watched"],
        poster: "images/movie-posters/all-quiet-on-the-western-front.jpg",
        watchedDate: "2026.08.06"
    }
];
