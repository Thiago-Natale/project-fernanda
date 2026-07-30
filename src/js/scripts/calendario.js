const monthYear = document.getElementById("month-year");
const calendarGrid = document.getElementById("calendar-grid");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

let currentDate = new Date();

export function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  monthYear.textContent = `${months[month]} ${year}`;
  calendarGrid.innerHTML = "";

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  // Dias do mês anterior para preencher
  for (let i = 0; i < startDay; i++) {
    const prevDate = new Date(year, month, i - startDay + 1);
    const div = document.createElement("div");
    div.textContent = prevDate.getDate();
    div.classList.add("other-month");
    calendarGrid.appendChild(div);
  }

  // Dias do mês atual
  for (let day = 1; day <= totalDays; day++) {
    const div = document.createElement("div");
    div.textContent = day;

    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      div.classList.add("today");
    }

    calendarGrid.appendChild(div);
  }

  // Dias do próximo mês para completar a grade (até múltiplo de 7)
  const filled = calendarGrid.childElementCount;
  const nextDays = Math.ceil(filled / 7) * 7 - filled;
  for (let i = 1; i <= nextDays; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    div.classList.add("other-month");
    calendarGrid.appendChild(div);
  }
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

const noEventsText = document.getElementById("no-events-text");

export function atualizarAgenda() {
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, "0");
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  noEventsText.textContent = `Sem eventos para ${dia}/${mes}`;
}
