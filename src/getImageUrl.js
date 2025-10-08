/**
 * Resolves the path to an asset dynamically for Vite.
 * @param {string} path - The path to the image starting from the 'assets' folder (e.g., '/products/airpod-1.webp').
 * @returns {string} The resolved full URL for the asset.
 */
export const getImageUrl = (path) => {
    // The base URL is relative to the 'src' directory.
    // We construct the path relative to the 'src' directory where this util file lives.
    return new URL(`../assets${path}`, import.meta.url).href;
};