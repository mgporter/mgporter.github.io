function importAll(r) {
// This function maps an input url to a webpacked id url
const images = {};
r.keys().forEach((item) => (images[item] = r(item)));
return images; // it then returns an object with key-value pairs of the matchings
}

// Create an object with the webpack urls of all images in the screenshots folder
export const screenshots = importAll(
require.context("./screenshots/", false, /\.(jpg|jpeg|png|gif)$/i)
);

export const gifpreviews = importAll(require.context("./gifs/", false, /\.gif$/i));