import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('.cta-button');
  if (startButton) {
    startButton.addEventListener('click', () => {
      window.location.href = '/login.html';
    });
  }
});

console.log('Banca Móvil initialized');
