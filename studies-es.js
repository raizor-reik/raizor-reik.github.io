const drawingSlides = [
  {
    "image": "./assets/drawing-01.png",
    "title": "Figura reclinada",
    "alt": "Estudio a lápiz de una figura reclinada sobre una plataforma con tela"
  },
  {
    "image": "./assets/drawing-02.png",
    "title": "Gesto y ritmo",
    "alt": "Gestos rápidos a lápiz de figuras de pie, reclinadas y sentadas"
  },
  {
    "image": "./assets/drawing-03.png",
    "title": "Pose y equilibrio",
    "alt": "Estudios de una figura arrodillada y un personaje de pie"
  },
  {
    "image": "./assets/drawing-04.png",
    "title": "Personajes en movimiento",
    "alt": "Dos estudios dinámicos de Spider-Man a lápiz"
  },
  {
    "image": "./assets/drawing-05.png",
    "title": "Exploración de personajes",
    "alt": "Página con un retrato enmascarado, un personaje agachado y una pose de béisbol"
  },
  {
    "image": "./assets/drawing-06.png",
    "title": "Figura sentada",
    "alt": "Estudio a lápiz de una figura sentada vista de espaldas"
  },
  {
    "image": "./assets/sketch-04.webp",
    "title": "Estudios y diseño de personajes",
    "alt": "Exploración de diseño de personajes con varios bocetos"
  },
  {
    "image": "./assets/sketch-03.webp",
    "title": "Estudios de gesto y color",
    "alt": "Estudios de dibujo gestual"
  },
  {
    "image": "./assets/sketch-01.webp",
    "title": "Estudio de dibujo 01",
    "alt": "Estudio de personaje y figura"
  },
  {
    "image": "./assets/sketch-02.webp",
    "title": "Estudio de dibujo 02",
    "alt": "Ilustración y dibujo de personajes"
  },
  {
    "image": "./assets/sketch-05.webp",
    "title": "Estudio de figura 05",
    "alt": "Estudio de dibujo de figura"
  },
  {
    "image": "./assets/sketch-06.webp",
    "title": "Estudio de figura 06",
    "alt": "Estudio de figura 06"
  },
  {
    "image": "./assets/sketch-07.webp",
    "title": "Estudio de figura 07",
    "alt": "Estudio de dibujo del natural"
  },
  {
    "image": "./assets/sketch-08.webp",
    "title": "Estudio de figura 08",
    "alt": "Boceto gestual y estudio de figura 08"
  },
  {
    "image": "./assets/sketch-09.webp",
    "title": "Estudio de figura 09",
    "alt": "Boceto gestual y estudio de figura 09"
  }
];
const drawingViewer = document.getElementById('drawing-viewer');
const drawingMain = document.getElementById('drawing-main');
const drawingButtons = [...document.querySelectorAll('[data-drawing]')];
let drawingIndex = 6;
function showDrawing(index) {
  drawingIndex = (index + drawingSlides.length) % drawingSlides.length;
  const slide = drawingSlides[drawingIndex];
  drawingMain.src = slide.image;
  drawingMain.alt = slide.alt;
  document.getElementById('drawing-title').textContent = slide.title;
  document.getElementById('drawing-counter').textContent = String(drawingIndex + 1).padStart(2, '0') + ' / ' + drawingSlides.length;
  drawingButtons.forEach((button, i) => {
    button.classList.toggle('is-active', i === drawingIndex);
    button.setAttribute('aria-pressed', String(i === drawingIndex));
  });
}
drawingButtons.forEach((button, index) => button.addEventListener('click', () => showDrawing(index)));
document.getElementById('drawing-previous').addEventListener('click', () => showDrawing(drawingIndex - 1));
document.getElementById('drawing-next').addEventListener('click', () => showDrawing(drawingIndex + 1));
drawingViewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showDrawing(drawingIndex + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
document.getElementById('drawing-expand').addEventListener('click', () => {
  const dialog = document.getElementById('lightbox');
  const slide = drawingSlides[drawingIndex];
  const image = dialog.querySelector('img');
  image.src = slide.image;
  image.alt = slide.alt;
  dialog.querySelector('p').textContent = slide.title;
  dialog.showModal();
});

showDrawing(drawingIndex);
