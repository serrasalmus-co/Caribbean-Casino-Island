document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('founders-form');
  const dashboard = document.getElementById('founders-dashboard');
  const memberIdElement = document.getElementById('member-id-number');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      memberIdElement.textContent = `MG-0${randomNum}`;
      form.classList.add('hidden');
      dashboard.classList.remove('hidden');
    });
  }
});
