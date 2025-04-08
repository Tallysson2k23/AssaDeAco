// Dados iniciais dos motoqueiros
const riders = [
    { name: 'Tallysson Luis', distance: 120 },
    { name: 'Jefferson Oliveira', distance: 135 },
    { name: 'Lucas Ernandes', distance: 150 }
  ];
  
  // Função para animar os números
  function animateDistance(element, finalValue) {
    let current = 0;
    const speed = 10;
    const increment = Math.ceil(finalValue / 50);
  
    const counter = setInterval(() => {
      current += increment;
      if (current >= finalValue) {
        current = finalValue;
        clearInterval(counter);
      }
      element.textContent = `${current} km/h`;
    }, speed);
  }
  
  // Aplicar animação quando a página carregar
  window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.rider-card');
  
    cards.forEach((card, index) => {
      const p = card.querySelector('p strong');
      const distance = riders[index].distance;
      animateDistance(p, distance);
    });
  });
  