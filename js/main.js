document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger) burger.addEventListener('click', () => navLinks.classList.toggle('open'));

  // Квиз-калькулятор
  const quiz = document.querySelector('#quiz');
  if (quiz) {
    const steps = quiz.querySelectorAll('.quiz-step');
    let step = 0;
    let answers = {};
    const show = () => {
      steps.forEach((s, i) => s.classList.toggle('active', i === step));
    };
    quiz.querySelectorAll('.quiz-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        const group = opt.closest('.quiz-step');
        group.querySelectorAll('.quiz-opt').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        answers[group.dataset.key] = opt.dataset.value;
      });
    });
    quiz.querySelectorAll('[data-next]').forEach(btn => btn.addEventListener('click', () => {
      if (step < steps.length - 1) { step++; show(); }
    }));
    quiz.querySelectorAll('[data-prev]').forEach(btn => btn.addEventListener('click', () => {
      if (step > 0) { step--; show(); }
    }));
    const form = quiz.querySelector('#quizForm');
    if (form) form.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(form);
      const msg = 'Заявка с квиза:\n' +
        'Тип: ' + (answers.type || '-') + '\n' +
        'Профиль: ' + (answers.profile || '-') + '\n' +
        'Размер: ' + (answers.size || '-') + '\n' +
        'Имя: ' + fd.get('name') + '\n' +
        'Телефон: ' + fd.get('phone');
      alert('Спасибо! Мы свяжемся с вами в течение 15 минут.\n\n' + msg);
      form.reset();
      step = 0; show();
    });
    show();
  }

  // Форма заявки
  const leadForm = document.querySelector('#leadForm');
  if (leadForm) leadForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Заявка отправлена. Менеджер перезвонит в течение 15 минут.');
    leadForm.reset();
  });
});