document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var formulario = document.getElementById('formulario');
  var atividadeInput = document.getElementById('atividadeNome');
  var dataInput = document.getElementById('dataInput');
  var cancelarBtn = document.getElementById('cancelar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'pt-br',

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
        date: '2026-03-31',
        color: 'green'
      }
    ],

    // clicar na atividade
    eventClick: function(info) {
      info.jsEvent.preventDefault();

      //const confirmar = confirm("Deseja solicitar reprogramação para a atividade?");
      const confirmar = confirm("Deseja solicitar reprogramação para a atividade:\n\n" + info.event.title + "?");

      if (confirmar) {
        // preenche os campos
        atividadeInput.value = info.event.title;
        dataInput.value = info.event.startStr;

        // mostra formulário
        formulario.style.display = 'block';

        // rola até ele
        formulario.scrollIntoView();
      }
    }
  });

  calendar.render();

  // botão cancelar
  cancelarBtn.addEventListener('click', function() {
    formulario.style.display = 'none';

    // limpa os campos
    atividadeInput.value = '';
    dataInput.value = '';
  });
});
