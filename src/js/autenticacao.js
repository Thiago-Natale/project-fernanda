import { dados } from "./dados.js";

document.addEventListener("DOMContentLoaded", () => {
  iniciarValidacao();
});

function carregarDados() {
  const divInfo = document.getElementById("divInfo");
  const dataValidade = document.getElementById("dt_validade");
  
  divInfo.innerHTML = `
          <p><strong>Registro Acadêmico:</strong> ${dados.ra}</p>
          <p><strong>Nome:</strong> ${dados.nome_upper}</p>
          <p><strong>Data da Emissão:</strong> <span id="dataFinal"></span></p>
          <p><strong>Hora da Emissão:</strong> <span id="horaFinal"></span></p>
          <p><strong>Código de Controle:</strong> ZKQJ.7LMP.RT9X.3VWB</p>`;

  dataValidade.innerHTML = `<strong>Validade até:</strong> ${dados.validade}`;
}

function pegarDataHora() {
  const agora = new Date();

  const data = agora.toLocaleDateString("pt-BR");
  const hora = agora.toLocaleTimeString("pt-BR", { hour12: false });

  return { data, hora };
}

function iniciarValidacao() {
  // Preenche campos iniciais
  const { data, hora } = pegarDataHora();

  document.getElementById("dataEmissao").value = data;
  document.getElementById("horaEmissao").value = hora;
  document.getElementById("codigoControle").value = "ZKQJ.7LMP.RT9X.3VWB";

  // Exibe tela inicial / esconde outras
  // Estado inicial do validador (sempre visível)
  document.getElementById("telaVerificacao").classList.remove("hidden");
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("telaConfirmada").classList.remove("hidden");

  // Simula validação após carregamento da página
  iniciarLoading();
}

function iniciarLoading() {
  carregarDados();
  document.getElementById("loading").classList.remove("hidden");
  document.getElementById("telaConfirmada").classList.add("hidden");

  const { data, hora } = pegarDataHora();

  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");

    // Atualiza dados finais
    document.getElementById("dataFinal").textContent = data;
    document.getElementById("horaFinal").textContent = hora;

    document.getElementById("telaConfirmada").classList.remove("hidden");
  }, 2500);
}

// Botão verificar repete o processo
document
  .getElementById("btnVerificar")
  .addEventListener("click", iniciarLoading);
