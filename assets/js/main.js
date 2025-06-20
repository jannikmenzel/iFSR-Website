/* ========================
   Darkmode
   ======================== */
document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("theme-switch");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (theme) => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    };

    const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

    // system changes
    prefersDarkScheme.addEventListener("change", (e) => {
        const saved = localStorage.getItem("theme");
        if (!saved) {
            applyTheme(e.matches ? "dark" : "light");
        }
    });

    // toggle handler
    themeSwitch.addEventListener("click", () => {
        const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
        setStoredTheme(newTheme);
    });

    const updateBodyThemeAttr = () => {
        const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
        document.body.setAttribute("data-theme", current);
    };
    updateBodyThemeAttr();

    // update on change
    const observer = new MutationObserver(updateBodyThemeAttr);
    observer.observe(document.documentElement, {attributes: true, attributeFilter: ["class"]});

    prefersDarkScheme.addEventListener("change", () => {
        updateBodyThemeAttr();
    });
});

/* ========================
   Details Toggle
   ======================== */
window.toggleDetails = function (element) {
    element.classList.toggle('expanded');

    const plusIcon = element.querySelector('.icon-plus');
    const minusIcon = element.querySelector('.icon-minus');

    const isExpanded = element.classList.contains('expanded');

    plusIcon.style.display = isExpanded ? 'none' : 'inline';
    minusIcon.style.display = isExpanded ? 'inline' : 'none';
};

/* ========================
   News Feed
   ======================== */
let lastColumnCount = null;

function renderFeedEntries(data) {
    const container = document.getElementById('feed');
    if (!container) return;
    container.innerHTML = '';
    const isInFeedSection = container.closest('.feed-section') !== null;
    let maxItems;
    if (isInFeedSection) {
        const computedStyle = window.getComputedStyle(container);
        const columnCount = computedStyle.getPropertyValue('grid-template-columns').split(' ').length;
        lastColumnCount = columnCount;
        maxItems = columnCount === 3 ? 3 : 4;
    } else {
        maxItems = data.items.length;
    }

    data.items.slice(0, maxItems).forEach(item => {
        const cleanedContent = item.content.replace(/<span class="invisible">.*?<\/span>/g, '');

        let imageUrl;

        if (item.thumbnail) {
            imageUrl = item.thumbnail;
        } else if (item.enclosure && item.enclosure.link) {
            imageUrl = item.enclosure.link;
        } else {
            const imgMatch = item.content.match(/<img.*?src="(.*?)"/);
            if (imgMatch && imgMatch[1]) {
                imageUrl = imgMatch[1];
            } else {
                imageUrl = '/images/thumbnail.jpg';
            }
        }

        const entry = document.createElement('article');
        entry.classList.add('feed-entry');

        const imageHtml = `
        <div class="feed-thumbnail-wrapper">
          <img src="${imageUrl}" alt="Beitragsbild" class="feed-thumbnail" />
        </div>
      `;

        entry.innerHTML = `
        ${imageHtml}
        <div class="feed-content">${cleanedContent}</div>
        <a href="${item.link}" class="btn btn-secondary" target="_blank">
            ${document.documentElement.lang === 'en' ? 'Read more' : 'Zum Beitrag'}
        </a>
      `;
        container.appendChild(entry);
    });
}

fetch('https://api.rss2json.com/v1/api.json?rss_url=https://toot.kif.rocks/@ifsr.rss')
    .then(res => res.json())
    .then(data => {
        renderFeedEntries(data);
        window.addEventListener('resize', () => {
            const container = document.getElementById('feed');
            if (!container) return;

            const computedStyle = window.getComputedStyle(container);
            const columnCount = computedStyle.getPropertyValue('grid-template-columns').split(' ').length;

            if (columnCount !== lastColumnCount) {
                renderFeedEntries(data);
            }
        });
    });