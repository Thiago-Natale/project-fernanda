export function voltarAoTopo() {
  const backToTop = document.getElementById("back-to-top");

  // Mostrar o botão quando rolar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  });

  // Voltar ao topo suavemente
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
