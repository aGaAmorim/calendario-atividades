document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',

    events: [
      {
        title: 'Trabalho de História',
        date: '2026-03-28',
        color: 'red'
      },
      {
        title: 'Trabalho de Inglês',
        date: '2026-03-28',
        color: 'yellow'
      },
      {
        title: 'Prova de Matemática',
        date: '2026-03-30'
      }
    ],

    // clique no dia
    dateClick: function(info) {
      document.querySelector('#formulario input[type="date"]').value = info.dateStr;
      document.getElementById('formulario').scrollIntoView();
    },

    // clique na atividade
    eventClick: function(info) {
      info.jsEvent.preventDefault();

      // mostra qual atividade foi clicada
      alert("Atividade: " + info.event.title);

      // preenche a data no formulário
      document.querySelector('#formulario input[type="date"]').value = info.event.startStr;

      // rola até o formulário
      document.getElementById('formulario').scrollIntoView();
    }

  });

  calendar.render();
});
