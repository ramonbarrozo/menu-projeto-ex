document.addEventListener('DOMContentLoaded', function () {
    const backgrounds = [
      'url(' + './imagens/menu/textura01.jpeg' + ')',
      'url(' + './imagens/menu/textura02.jpg' + ')',
      'url(' + './imagens/menu/textura03.jpg' + ')',
      'url(' + './imagens/menu/textura04.jpg' + ')',
      'url(' + './imagens/menu/textura05.jpg' + ')'
      // Adicione mais URLs de imagens conforme necessário
    ];
  
    const backgroundImageElement = document.getElementById('backgroundImage');
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const randomBackground = backgrounds[randomIndex];
  
    backgroundImageElement.style.backgroundImage = randomBackground;
  });

  
