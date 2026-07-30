export function sideMenuView() {
  const menuBtn = document.getElementById("menu-btn");
  const sideMenu = document.getElementById("side-menu");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    sideMenu.classList.toggle("active");
  });
}
