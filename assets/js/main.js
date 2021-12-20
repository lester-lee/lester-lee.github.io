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
let activeArticle = document.querySelector("#Welcome");
const updateActiveArticle = (article) => {
  if (activeArticle == article) return;

  activeArticle = article;
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

// Draw box around link on page load; kinda hacky
document.querySelector(`a[href^="#Welcome"]`).firstChild.style.borderColor =
  COLORS["yellow"];

// Update active article on scroll
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

//-----------------------------
//#region Drawings Animation
//-----------------------------
// Make portraits tilt toward mouse
// Code from https://www.armandocanals.com/posts/CSS-transform-rotating-a-3D-object-perspective-based-on-mouse-position.html
const constraint = 20;

const transforms = (x, y, elem) => {
  const box = elem.getBoundingClientRect();
  const cX = -(y - box.y - box.height / 2) / constraint;
  const cY = (x - box.x - box.width / 2) / constraint;

  return `perspective(600px) rotateX(${cX}deg) rotateY(${cY}deg)`;
};

const transformElement = (elem, xyelem) => {
  elem.style.transform = transforms.apply(null, xyelem);
};

main.addEventListener("mousemove", (e) => {
  const activePortrait = document.querySelector(`#${activeArticle.id} .Eyes`);
  const xy = [e.clientX, e.clientY];
  const position = xy.concat([activePortrait]);

  window.requestAnimationFrame(() => {
    transformElement(activePortrait, position);
  });
});

//#endregion Drawings Animation
