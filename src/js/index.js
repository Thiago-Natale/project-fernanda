import { sideMenuView } from "./scripts/sideMenu.js";
import { renderCalendar, atualizarAgenda } from "./scripts/calendario.js";
import { voltarAoTopo } from "./scripts/btn-voltar-topo.js";
import { dados } from "./dados.js";

document.addEventListener("DOMContentLoaded", () => {
  sideMenuView();
  renderCalendar();
  atualizarAgenda();
  carregarDados();
  voltarAoTopo()
});

function carregarDados() {
  const divEmail = document.getElementById("divEmail");
  const dataValidade = document.getElementById("dt_validade");

  divEmail.innerHTML = `<p>E-mail</p>
                        <p>${dados.email}</p>`;

  dataValidade.innerHTML = `<strong>Validade até:</strong> ${dados.validade}`;
}
