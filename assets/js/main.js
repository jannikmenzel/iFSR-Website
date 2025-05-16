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
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    prefersDarkScheme.addEventListener("change", () => {
        updateBodyThemeAttr();
    });
});

/* ========================
   Details Toggle
   ======================== */
window.toggleDetails = function(element) {
    element.classList.toggle('expanded');

    const plusIcon = element.querySelector('.icon-plus');
    const minusIcon = element.querySelector('.icon-minus');

    const isExpanded = element.classList.contains('expanded');

    plusIcon.style.display = isExpanded ? 'none' : 'inline';
    minusIcon.style.display = isExpanded ? 'inline' : 'none';
};