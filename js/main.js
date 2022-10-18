let menu = document.getElementById("menu-btn");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 500) {
    menu.checked = false;
  }
});
