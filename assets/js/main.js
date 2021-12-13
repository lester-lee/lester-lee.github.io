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
//#region Smooth Background Transition
//-----------------------------
document.querySelectorAll("article").forEach(
  elem => elem.style.backgroundColor = COLORS[elem.getAttribute("data-color")]
)
//#endregion Smooth Background Transition
