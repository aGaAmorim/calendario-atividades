document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var formulario = document.getElementById('formulario');
  var atividadeInput = document.getElementById('atividadeNome');
  var dataInput = document.getElementById('dataInput');
  var cancelarBtn = document.getElementById('cancelar');
  const form = document.getElementById('formRemarcacao'); 

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'pt-br',

    events: [
      { title: 'Trabalho de História', date: '2026-03-28', color: 'red' },
      { title: 'Trabalho de Inglês', date: '2026-03-28', color: 'yellow' },
      { title: 'Prova de Matemática', date: '2026-03-31', color: 'black' }
    ],

    eventClick: function(info) {
      info.jsEvent.preventDefault();

      const confirmar = confirm("Deseja solicitar reprogramação para a atividade:\n\n" + info.event.title + "?");

      if (confirmar) {
        atividadeInput.value = info.event.title;
        dataInput.value = info.event.startStr;

        formulario.style.display = 'block';
        formulario.scrollIntoView();
      }
    }
  });

  calendar.render();

  cancelarBtn.addEventListener('click', function() {
    formulario.style.display = 'none';
    atividadeInput.value = '';
    dataInput.value = '';
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbxmH698UASs2RycR6vA8Y9ssqHFh1sPK8c73cW3c9MJfafu87h8sZEuqdDedIIdtJbRgw/exec", {
      method: "POST",
      body: JSON.stringify({
        atividade: atividadeInput.value,
        nome: form.querySelector('input[placeholder="Nome"]').value,
        data: dataInput.value,
        motivo: form.querySelector('textarea').value
      })
    })
    .then(() => {
      alert("Solicitação enviada com sucesso! ✅");
      form.reset();
      formulario.style.display = 'none';
    })
    .catch(() => {
      alert("Erro ao enviar 😢");
    });
  });

});
