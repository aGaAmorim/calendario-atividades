var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',

  events: [
    {
      title: 'Trabalho de História',
      date: '2026-03-28'
    },
    {
      title: 'Prova de Matemática',
      date: '2026-03-30'
    }
  ],

  dateClick: function(info) {
    document.querySelector('#formulario input[type="date"]').value = info.dateStr;
  },

  eventClick: function(info) {
    alert("Atividade: " + info.event.title);

    document.querySelector('#formulario input[type="date"]').value = info.event.startStr;

    document.getElementById('formulario').scrollIntoView();
  }
});
