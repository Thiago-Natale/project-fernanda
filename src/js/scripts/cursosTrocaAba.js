export function trocarAbas() {
  const abas = document.querySelectorAll(".aba");
  const conteudos = document.querySelectorAll(".conteudo-aba");

  abas.forEach((aba) => {
    aba.addEventListener("click", () => {
      // reset
      abas.forEach((a) => a.classList.remove("active"));
      conteudos.forEach((c) => c.classList.remove("active"));

      // ativa aba clicada
      aba.classList.add("active");
      document.getElementById(aba.dataset.target).classList.add("active");
    });
  });
}
