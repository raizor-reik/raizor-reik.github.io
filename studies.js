const drawingSlides = [
  {
    "image": "./assets/drawing-01.png",
    "title": "Reclining figure",
    "alt": "Pencil study of a reclining figure on a draped platform"
  },
  {
    "image": "./assets/drawing-02.png",
    "title": "Gesture & rhythm",
    "alt": "Quick pencil gestures of standing, reclining and seated figures"
  },
  {
    "image": "./assets/drawing-03.png",
    "title": "Pose & balance",
    "alt": "Sketchbook studies of a kneeling figure and a standing character"
  },
  {
    "image": "./assets/drawing-04.png",
    "title": "Characters in motion",
    "alt": "Two dynamic Spider-Man pencil studies"
  },
  {
    "image": "./assets/drawing-05.png",
    "title": "Character explorations",
    "alt": "Sketchbook page with a masked portrait, crouching character and baseball pose"
  },
  {
    "image": "./assets/drawing-06.png",
    "title": "Seated figure",
    "alt": "Pencil study of a seated figure viewed from behind"
  },
  {
    "image": "./assets/sketch-04.webp",
    "title": "Character studies and design explorations",
    "alt": "Character design exploration and multiple sketches"
  },
  {
    "image": "./assets/sketch-03.webp",
    "title": "Gesture and color studies",
    "alt": "Gesture drawing studies"
  },
  {
    "image": "./assets/sketch-01.webp",
    "title": "Drawing study 01",
    "alt": "Character and figure drawing study"
  },
  {
    "image": "./assets/sketch-02.webp",
    "title": "Drawing study 02",
    "alt": "Illustration and character drawing"
  },
  {
    "image": "./assets/sketch-05.webp",
    "title": "Figure study 05",
    "alt": "Figure drawing and study"
  },
  {
    "image": "./assets/sketch-06.webp",
    "title": "Figure study 06",
    "alt": "Figure drawing study 06"
  },
  {
    "image": "./assets/sketch-07.webp",
    "title": "Figure study 07",
    "alt": "Life drawing study"
  },
  {
    "image": "./assets/sketch-08.webp",
    "title": "Figure study 08",
    "alt": "Gesture sketch and figure study 08"
  },
  {
    "image": "./assets/sketch-09.webp",
    "title": "Figure study 09",
    "alt": "Gesture sketch and figure study 09"
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
