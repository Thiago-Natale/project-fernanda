import { dados } from "./dados.js";
import { sideMenuView } from "./scripts/sideMenu.js";

function carregarDados() {
  const divInfo = document.getElementById("divInfo");
  
  divInfo.innerHTML = `
          <h3>${dados.nome_upper}</h3>
            <span class="registration">${dados.ra}</span>

            <p class="course">
              Universidade de Uberaba<br />
              <span>Bacharelado em Direito</span>
            </p>

            <p><strong>CPF:</strong> ${dados.cpf}</p>
            <p><strong>Nascimento:</strong> ${dados.dt_nascimento}</p>

            <p class="issued" id="emitidoInfo">
              Documento emitido às --:--:-- do dia --/--/----
            </p>

            <p>
              Código de controle:<br />
              <span class="code">XN8R.5KTD.Q7LP.2ZWF</span>
            </p>`;
}

function atualizarDataHoraEmissao() {
    const agora = new Date();

    // hora formatada (08:56:09)
    const horas = agora.toLocaleTimeString("pt-BR");

    // data formatada (12/11/2025)
    const data = agora.toLocaleDateString("pt-BR");

    // Seleciona o elemento que deve receber o texto
    const elemento = document.getElementById("emitidoInfo");

    elemento.innerHTML = `Documento emitido às <strong>${horas}</strong> do dia <strong>${data}</strong>`;
}

// Executa ao carregar a página
document.addEventListener("DOMContentLoaded",()=>{
    carregarDados()
    atualizarDataHoraEmissao()
    sideMenuView()
})