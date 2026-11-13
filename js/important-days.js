
/* =========================================
   FOREVER MY BELOVED YUUKA
   IMPORTANT DAYS
   Japanese & English
========================================= */


/* =========================================
   1. BASIC SETTINGS
========================================= */

const relationshipStartDate = "2024-06-29";

const today = new Date();
today.setHours(0, 0, 0, 0);

const DAY_IN_MS = 86400000;


/* =========================================
   2. IMPORTANT DAYS DATA

   Edit your memories here.
   No in-page editing controls.
========================================= */

const importantDays = [

    {
        id: "anniversary",
        date: "2024-06-29",
        title: "Our Anniversary",
        japaneseTitle: "ふたりの記念日",
        category: "anniversary",
        description: "The day our story began. ふたりの物語が始まった日。",
        location: "",
        photos: [],
        annual: true
    },

    {
        id: "yuuka-birthday",
        date: "2007-10-06",
        title: "Yuuka's Birthday",
        japaneseTitle: "優花の誕生日",
        category: "birthday",
        description: "A special day celebrating Yuuka's birth. 優花が生まれた大切な日。",
        location: "",
        photos: [],
        annual: true
    },

    {
        id: "wen-birthday",
        date: "2004-01-27",
        title: "Wen's Birthday",
        japaneseTitle: "妏妏の誕生日",
        category: "birthday",
        description: "A special day celebrating Wen's birth. 妏妏が生まれた大切な日。",
        location: "",
        photos: [],
        annual: true
    },

    {
        id: "first-meeting",
        date: "2026-01-20",
        title: "Our First Meeting",
        japaneseTitle: "初めて会った日",
        category: "special",
        description: "The day we finally met in person. 初めて直接会えた大切な日。",
        location: "",
        photos: [],
        annual: false
    },

    {
        id: "kansai-trip",
        date: "2027-01-31",
        title: "Our Kansai Trip",
        japaneseTitle: "ふたりの関西旅行",
        category: "travel",
        description: "A special journey together in Japan. ふたりで過ごす特別な旅。",
        location: "Osaka, Japan",
        photos: [],
        annual: false
    }

];


/* =========================================
   3. CATEGORY SETTINGS
========================================= */

const categoryInfo = {

    anniversary: {
        label: "Anniversary",
        japanese: "記念日",
        color: "#E9B9BE"
    },

    birthday: {
        label: "Birthday",
        japanese: "誕生日",
        color: "#EED9A1"
    },

    special: {
        label: "Special Day",
        japanese: "特別な日",
        color: "#C9BEDF"
    },

    milestone: {
        label: "Milestone",
        japanese: "100日記念日",
        color: "#BDD4E8"
    },

    travel: {
        label: "Travel",
        japanese: "旅行",
        color: "#BBD8C8"
    },

    memory: {
        label: "Memory",
        japanese: "思い出",
        color: "#EBC5AD"
    }

};


/* =========================================
   4. DATE UTILITIES
========================================= */

function parseDate(dateString) {

    const [year, month, day] = dateString.split("-").map(Number);

    return new Date(year, month - 1, day);

}


function formatDate(date) {

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


function addDays(date, days) {

    const result = new Date(date);
    result.setDate(result.getDate() + days);

    return result;

}


function getDayDifference(dateA, dateB) {

    const a = Date.UTC(
        dateA.getFullYear(),
        dateA.getMonth(),
        dateA.getDate()
    );

    const b = Date.UTC(
        dateB.getFullYear(),
        dateB.getMonth(),
        dateB.getDate()
    );

    return Math.round((b - a) / DAY_IN_MS);

}


function formatDisplayDate(date) {

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

}


function getNextAnnualDate(event) {

    const originalDate = parseDate(event.date);

    let nextDate = new Date(
        today.getFullYear(),
        originalDate.getMonth(),
        originalDate.getDate()
    );

    if (nextDate < today) {

        nextDate = new Date(
            today.getFullYear() + 1,
            originalDate.getMonth(),
            originalDate.getDate()
        );

    }

    return nextDate;

}


function getMostRecentAnnualDate(event) {

    const originalDate = parseDate(event.date);

    let recentDate = new Date(
        today.getFullYear(),
        originalDate.getMonth(),
        originalDate.getDate()
    );

    if (recentDate > today) {

        recentDate = new Date(
            today.getFullYear() - 1,
            originalDate.getMonth(),
            originalDate.getDate()
        );

    }

    return recentDate;

}


function escapeHTML(value) {

    return String(value ?? "").replace(/[&<>"']/g, character => {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];

    });

}


/* =========================================
   5. AUTOMATIC 100-DAY MILESTONES

   Day 1 = June 29, 2024
   Generate every 100 days.
========================================= */

function generateMilestones() {

    const startDate = parseDate(relationshipStartDate);

    const elapsedDays = getDayDifference(startDate, today) + 1;

    const lastMilestone = Math.ceil(
        (elapsedDays + 730) / 100
    ) * 100;

    const milestones = [];

    for (let days = 100; days <= lastMilestone; days += 100) {

        const milestoneDate = addDays(startDate, days - 1);

        milestones.push({

            id: `milestone-${days}`,

            date: formatDate(milestoneDate),

            title: `${days.toLocaleString("en-US")} Days Together`,

            japaneseTitle: `ふたりで過ごした${days.toLocaleString("en-US")}日`,

            category: "milestone",

            description:
                `Our ${days.toLocaleString("en-US")}th day together. ` +
                `ふたりで迎えた、大切な100日ごとの記念日。`,

            location: "",

            photos: [],

            annual: false,

            milestoneDays: days

        });

    }

    return milestones;

}


const milestoneEvents = generateMilestones();


/* =========================================
   6. COMBINE ALL EVENTS
========================================= */

const allEvents = [
    ...importantDays,
    ...milestoneEvents
];


/* =========================================
   7. DAYS TOGETHER
========================================= */

function updateDaysTogether() {

    const startDate = parseDate(relationshipStartDate);

    const daysTogether = getDayDifference(startDate, today) + 1;

    const daysElement = document.getElementById("days-together");

    if (daysElement) {

        daysElement.textContent =
            daysTogether.toLocaleString("en-US");

    }

    const labelElement =
        document.getElementById("days-together-label");

    if (labelElement) {

        labelElement.textContent =
            "Days Together · 一緒に過ごした日々";

    }

}


/* =========================================
   8. ANNIVERSARY COUNTDOWN
========================================= */

function updateAnniversaryCountdown() {

    const startDate = parseDate(relationshipStartDate);

    let nextAnniversary = new Date(
        today.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
    );

    if (nextAnniversary < today) {

        nextAnniversary.setFullYear(
            nextAnniversary.getFullYear() + 1
        );

    }

    const remainingDays = getDayDifference(
        today,
        nextAnniversary
    );

    const countdownElement =
        document.getElementById("anniversary-countdown");

    if (countdownElement) {

        countdownElement.textContent = remainingDays;

    }

}


/* =========================================
   9. CALENDAR STATE & ELEMENTS
========================================= */

let currentCalendarDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
);

let selectedDate = new Date(today);


function getCalendarElements() {

    return {

        monthTitle: document.getElementById("calendar-month"),

        calendarGrid: document.getElementById("calendar-grid"),

        selectedTitle: document.getElementById("selected-date"),

        selectedEvents: document.getElementById("selected-events")

    };

}


/* =========================================
   10. EVENTS FOR A DATE
========================================= */

function getEventsForDate(date) {

    const targetDate = formatDate(date);

    return allEvents.filter(event => {

        if (event.annual) {

            const originalDate = parseDate(event.date);

            return (
                originalDate.getMonth() === date.getMonth() &&
                originalDate.getDate() === date.getDate()
            );

        }

        return event.date === targetDate;

    });

}


/* =========================================
   11. CALENDAR RENDERING
========================================= */

function renderCalendar() {

    const elements = getCalendarElements();

    if (!elements.calendarGrid) return;

    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    if (elements.monthTitle) {

        elements.monthTitle.textContent =
            currentCalendarDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric"
            });

    }

    let calendarHTML = "";

    for (let i = 0; i < firstDay; i++) {

        calendarHTML += `
            <div class="calendar-day empty" aria-hidden="true"></div>
        `;

    }

    for (let day = 1; day <= daysInMonth; day++) {

        const date = new Date(year, month, day);

        const dateString = formatDate(date);

        const events = getEventsForDate(date);

        const isToday = dateString === formatDate(today);

        const isSelected =
            dateString === formatDate(selectedDate);

        const eventColors = [
            ...new Set(
                events.map(event =>
                    categoryInfo[event.category]?.color
                ).filter(Boolean)
            )
        ];

        const dotsHTML = eventColors.slice(0, 3).map(color => `
            <span
                class="calendar-event-dot"
                style="background-color: ${color};"
            ></span>
        `).join("");

        calendarHTML += `
            <button
                type="button"
                class="calendar-day
                    ${isToday ? "today" : ""}
                    ${isSelected ? "selected" : ""}
                    ${events.length ? "has-event" : ""}"
                data-date="${dateString}"
                aria-label="${dateString}${events.length ? ", has special day" : ""}"
                aria-pressed="${isSelected}"
            >
                <span class="calendar-day-number">${day}</span>
                <span class="calendar-event-dots">${dotsHTML}</span>
            </button>
        `;

    }

    elements.calendarGrid.innerHTML = calendarHTML;

    elements.calendarGrid
        .querySelectorAll(".calendar-day[data-date]")
        .forEach(button => {

            button.addEventListener("click", () => {

                selectedDate = parseDate(button.dataset.date);

                renderCalendar();
                renderSelectedDateEvents();

            });

        });

}


/* =========================================
   12. SELECTED DATE EVENTS
========================================= */

function renderSelectedDateEvents() {

    const elements = getCalendarElements();

    if (!elements.selectedEvents) return;

    if (elements.selectedTitle) {

        elements.selectedTitle.textContent =
            formatDisplayDate(selectedDate);

    }

    const events = getEventsForDate(selectedDate);

    if (events.length === 0) {

        elements.selectedEvents.innerHTML = `
            <div class="empty-state">
                <p>No special memories yet.</p>
                <p>まだ特別な思い出はありません。</p>
            </div>
        `;

        return;

    }

    elements.selectedEvents.innerHTML = events.map(event => {

        const category =
            categoryInfo[event.category] || categoryInfo.memory;

        return `
            <article class="selected-event-card">

                <span
                    class="selected-event-color"
                    style="background-color: ${category.color};"
                ></span>

                <div class="selected-event-content">

                    <span class="event-category">
                        ${escapeHTML(category.label)}
                        ·
                        ${escapeHTML(category.japanese)}
                    </span>

                    <h3>${escapeHTML(event.title)}</h3>

                    <p class="event-japanese-title">
                        ${escapeHTML(event.japaneseTitle || "")}
                    </p>

                    <p>${escapeHTML(event.description)}</p>

                    ${event.location ? `
                        <p class="event-location">
                            ${escapeHTML(event.location)}
                        </p>
                    ` : ""}

                </div>

            </article>
        `;

    }).join("");

}


/* =========================================
   13. MEMORY JOURNAL
========================================= */

function getPastEventDate(event) {

    return event.annual
        ? getMostRecentAnnualDate(event)
        : parseDate(event.date);

}


function renderMemoryJournal() {

    const container = document.getElementById("memory-grid");

    if (!container) return;

    const pastEvents = allEvents
        .map(event => ({
            ...event,
            displayDate: getPastEventDate(event)
        }))
        .filter(event => event.displayDate <= today)
        .sort((a, b) => b.displayDate - a.displayDate);

    if (pastEvents.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <p>Our memories will appear here.</p>
                <p>ふたりの思い出がここに並びます。</p>
            </div>
        `;

        return;

    }

    container.innerHTML = pastEvents.map(event => {

        const category =
            categoryInfo[event.category] || categoryInfo.memory;

        const photosHTML = (event.photos || []).length > 0
            ? `
                <div class="memory-photos">
                    ${event.photos.map(photo => `
                        <img
                            src="${escapeHTML(photo)}"
                            alt="${escapeHTML(event.title)}"
                            loading="lazy"
                        >
                    `).join("")}
                </div>
            `
            : "";

        return `
            <article class="memory-card">

                <div class="memory-card-date">
                    ${formatDisplayDate(event.displayDate)}
                </div>

                <span
                    class="memory-category"
                    style="background-color: ${category.color};"
                >
                    ${escapeHTML(category.label)}
                </span>

                <h3>${escapeHTML(event.title)}</h3>

                <p class="memory-japanese-title">
                    ${escapeHTML(event.japaneseTitle || "")}
                </p>

                <p class="memory-description">
                    ${escapeHTML(event.description)}
                </p>

                ${event.location ? `
                    <p class="memory-location">
                        ${escapeHTML(event.location)}
                    </p>
                ` : ""}

                ${photosHTML}

            </article>
        `;

    }).join("");

}


/* =========================================
   14. FUTURE MEMORIES
========================================= */

function renderFutureMemories() {

    const container = document.getElementById("future-grid");

    if (!container) return;

    const futureEvents = allEvents
        .map(event => {

            const eventDate = event.annual
                ? getNextAnnualDate(event)
                : parseDate(event.date);

            return {
                ...event,
                nextDate: eventDate
            };

        })
        .filter(event => event.nextDate > today)
        .sort((a, b) => a.nextDate - b.nextDate);

    if (futureEvents.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <p>More beautiful days are waiting for us.</p>
                <p>これからも、ふたりでたくさんの思い出を。</p>
            </div>
        `;

        return;

    }

    container.innerHTML = futureEvents.map(event => {

        const category =
            categoryInfo[event.category] || categoryInfo.memory;

        const remainingDays = getDayDifference(
            today,
            event.nextDate
        );

        return `
            <article class="future-card">

                <div class="future-card-date">
                    ${formatDisplayDate(event.nextDate)}
                </div>

                <span
                    class="future-category"
                    style="background-color: ${category.color};"
                >
                    ${escapeHTML(category.label)}
                </span>

                <h3>${escapeHTML(event.title)}</h3>

                <p>${escapeHTML(event.japaneseTitle || "")}</p>

                <div class="future-countdown">
                    ${remainingDays}
                    <span>days left · あと${remainingDays}日</span>
                </div>

            </article>
        `;

    }).join("");

}


/* =========================================
   15. CALENDAR NAVIGATION
========================================= */

function changeCalendarMonth(amount) {

    currentCalendarDate = new Date(
        currentCalendarDate.getFullYear(),
        currentCalendarDate.getMonth() + amount,
        1
    );

    renderCalendar();

}


function setupCalendarNavigation() {

    const previousButton = document.getElementById("prev-month");

    const nextButton = document.getElementById("next-month");

    if (previousButton) {

        previousButton.addEventListener("click", () => {
            changeCalendarMonth(-1);
        });

    }

    if (nextButton) {

        nextButton.addEventListener("click", () => {
            changeCalendarMonth(1);
        });

    }

}


/* =========================================
   16. DATE SEARCH
========================================= */

function setupDateSearch() {

    const dateInput =
        document.getElementById("date-search-input");

    const searchButton =
        document.getElementById("date-search-button");

    if (!dateInput || !searchButton) return;

    function searchDate() {

        if (!dateInput.value) {

            dateInput.focus();
            return;

        }

        const date = parseDate(dateInput.value);

        selectedDate = date;

        currentCalendarDate = new Date(
            date.getFullYear(),
            date.getMonth(),
            1
        );

        renderCalendar();
        renderSelectedDateEvents();

        document.querySelector(".calendar-section")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    }

    searchButton.addEventListener("click", searchDate);

    dateInput.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            searchDate();
        }

    });

}


/* =========================================
   17. MEMORY SEARCH
========================================= */

function getSearchDate(event) {

    return event.annual
        ? getNextAnnualDate(event)
        : parseDate(event.date);

}


function searchEvents(keyword) {

    const query = keyword.trim().toLowerCase();

    if (!query) return [];

    return allEvents
        .filter(event => {

            const category =
                categoryInfo[event.category] || categoryInfo.memory;

            const searchableText = [

                event.title,
                event.japaneseTitle,
                event.description,
                event.location,
                event.date,
                event.category,
                category.label,
                category.japanese,
                event.milestoneDays

            ].join(" ").toLowerCase();

            return searchableText.includes(query);

        })
        .map(event => ({
            ...event,
            searchDate: getSearchDate(event)
        }))
        .sort((a, b) => a.searchDate - b.searchDate);

}


function renderSearchResults(keyword) {

    const resultsContainer =
        document.getElementById("search-results");

    const resultsList =
        document.getElementById("search-results-list");

    const resultCount =
        document.getElementById("search-result-count");

    if (!resultsContainer || !resultsList || !resultCount) return;

    const query = keyword.trim();

    if (!query) {

        resultsContainer.hidden = true;
        resultsList.innerHTML = "";
        return;

    }

    const results = searchEvents(query);

    resultsContainer.hidden = false;

    resultCount.textContent =
        `${results.length} result${results.length === 1 ? "" : "s"}`;

    if (results.length === 0) {

        resultsList.innerHTML = `
            <div class="empty-state">
                <p>No memories found.</p>
                <p>該当する思い出は見つかりませんでした。</p>
            </div>
        `;

        return;

    }

    resultsList.innerHTML = results.map(event => {

        const category =
            categoryInfo[event.category] || categoryInfo.memory;

        return `
            <button
                type="button"
                class="search-result-item"
                data-event-date="${formatDate(event.searchDate)}"
            >

                <span
                    class="search-result-color"
                    style="background-color: ${category.color};"
                ></span>

                <span class="search-result-content">

                    <span class="search-result-date">
                        ${formatDisplayDate(event.searchDate)}
                    </span>

                    <span class="search-result-title">
                        ${escapeHTML(event.title)}
                    </span>

                    <span class="search-result-japanese">
                        ${escapeHTML(event.japaneseTitle || "")}
                    </span>

                </span>

                <span class="search-result-arrow">›</span>

            </button>
        `;

    }).join("");

    resultsList
        .querySelectorAll(".search-result-item")
        .forEach(button => {

            button.addEventListener("click", () => {

                const date = parseDate(button.dataset.eventDate);

                selectedDate = date;

                currentCalendarDate = new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    1
                );

                renderCalendar();
                renderSelectedDateEvents();

                document.querySelector(".calendar-section")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

            });

        });

}


function setupMemorySearch() {

    const searchInput =
        document.getElementById("memory-search-input");

    const clearButton =
        document.getElementById("clear-search-button");

    if (!searchInput || !clearButton) return;

    searchInput.addEventListener("input", () => {

        renderSearchResults(searchInput.value);

    });

    clearButton.addEventListener("click", () => {

        searchInput.value = "";

        renderSearchResults("");

        searchInput.focus();

    });

}


/* =========================================
   18. INITIALIZE PAGE
========================================= */

function initializeImportantDays() {

    updateDaysTogether();

    updateAnniversaryCountdown();

    renderCalendar();

    renderSelectedDateEvents();

    renderMemoryJournal();

    renderFutureMemories();

    setupCalendarNavigation();

    setupDateSearch();

    setupMemorySearch();

}


/* =========================================
   19. START
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeImportantDays();

});
