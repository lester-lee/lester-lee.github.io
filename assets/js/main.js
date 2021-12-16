//-----------------------------
//#region Constants
//-----------------------------
const COLORS = {
  black: "#2b2b2b",
  blue: "#416eae",
  red: "#aa5151",
  white: "#f2ece3",
  yellow: "#ffd502",
};

// Elements
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll(".NavItem");

//#endregion Constants

//-----------------------------
//#region Navigation
//-----------------------------
/** Smooth scroll when nav link is clicked */
// From https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Keep track of active article
let activeArticle;

const updateActiveArticle = (article) => {
  if (activeArticle == article) return;

  const activeId = article.getAttribute("id");
  const color = article.getAttribute("data-color");

  // Update nav items and color
  navItems.forEach((ni) => {
    ni.classList.remove("--active");
    ni.style.color = COLORS[color];
    ni.firstChild.style.borderColor = "#0000";
  });
  const activeNav = document.querySelector(`a[href^="#${activeId}"]`);
  activeNav.classList.add("--active");
  activeNav.firstChild.style.borderColor = COLORS[color];
};

let lastPosition = 0;
main.addEventListener("scroll", (e) => {
  const position = main.scrollTop;
  const scrolledUp = lastPosition > position ? true : false;

  /** Helper function to figure out nearest scrolled-to article */
  const inBounds = (pos, elem) =>
    scrolledUp
      ? elem.offsetTop + elem.offsetHeight > pos && pos >= elem.offsetTop
      : pos + elem.offsetHeight >= elem.offsetTop + elem.offsetHeight / 4 &&
        pos <= elem.offsetTop;

  const articles = document.querySelectorAll("article");
  for (const article of articles) {
    if (inBounds(position, article)) {
      updateActiveArticle(article);
      break;
    }
  }

  lastPosition = position <= 0 ? 0 : position;
});
//#endregion Navigation
