document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

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
      document.getElementById('formulario').scrollIntoView();
    }
  });

  calendar.render();
});
