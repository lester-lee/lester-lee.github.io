---
---
//-----------------------------
//#region Constants
//-----------------------------
const COLORS = {
  black: "#2b2b2b",
  blue: "#416eae",
  red: "#aa5151",
  white: "#f2ece3",
  yellow: "#ffd502",
}
//#endregion Constants

//-----------------------------
//#region Navigation
//-----------------------------
/** Smooth scroll when nav link is clicked */
// From https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
//#endregion Navigation