const displayKey = document.querySelector(".key h2");
const displayKeyCode = document.querySelector(".keyCode h2");
const keyCodeDiv = document.querySelector(".keyCode");
const overlay = document.querySelector(".overlay");

window.addEventListener("keydown", (e) => {
  overlay.classList.add("hide");
  displayKey.innerHTML = e.key;
  displayKeyCode.innerHTML = e.keyCode;
  if (e.keyCode === 32) {
    displayKey.innerHTML = `'space'`;
  }
});




