const themeSwitchButton = document.getElementById('themeSwitchBtn');
const themeSwitchIcon = document.getElementById('themeSwitchIcon');
const themeLocalStorageKey = 'theme';
const lightThemeIcon = 'light_mode';
const darkThemeIcon = 'dark_mode';
const darkThemeClass = 'dark-mode';

/**
 * Checks if theme was previously stored in local storage, and sets it accordingly.
 */
function validateTheme() {
    const storedTheme = getTheme();

    storedTheme && storedTheme === 'dark' ? setDarkTheme() : setLightTheme();
}

/**
 * Checks if dark mode is currently enabled.
 *
 * @returns `true` if dark mode is enabled, otherwise it will return `false`
 */
function isDarkModeEnabled() {
    return document.body.classList.contains('dark-mode');
}

/**
 * Stores theme in local storage.
 *
 * @param {string} theme
 */
function storeTheme(theme) {
    localStorage.setItem(themeLocalStorageKey, theme);
}

/**
 * Gets theme saved in local storage.
 *
 * @returns theme saved in local storage, if it exists, otherwise it will return `null`
 */
function getTheme() {
    return localStorage.getItem(themeLocalStorageKey);
}

/**
 * - Removes dark theme class from `body`
 * - Sets light theme icon in theme switch button
 * - Saves theme in local storage
 */
function setLightTheme() {
    document.body.classList.remove(darkThemeClass);
    themeSwitchIcon.innerText = lightThemeIcon;
    storeTheme('light');
}

/**
 * - Adds dark theme class to `body`
 * - Sets dark theme icon in theme switch button
 * - Saves theme in local storage
 */
function setDarkTheme() {
    document.body.classList.add(darkThemeClass);
    themeSwitchIcon.innerText = darkThemeIcon;
    storeTheme('dark');
}

themeSwitchButton.addEventListener('click', () => {
    isDarkModeEnabled() ? setLightTheme() : setDarkTheme();
});

validateTheme();
