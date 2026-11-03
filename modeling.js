const art = filename => `./assets/${filename}`;
const projects = [
  {
    id: 'rojin', title: 'Rojin', type: 'THESIS PROJECT / 2.5D CHARACTER',
    intro: 'Rojin is the protagonist of my thesis project. I created the original hand-drawn concept art, then developed the 3D model and shaders to achieve a 2.5D aesthetic.',
    tools: ['Maya', 'ZBrush', 'Substance Painter'],
    featuredIndex: 2,
    slides: [
      { image: art('concept-design.jpg'), title: 'Original concept art — by Ernesto Molina', short: 'My concept art', description: 'Original hand-drawn character designs by Ernesto Molina, exploring Rojin’s silhouette, outfit and personality during the early stages of the thesis project.', alt: 'Original character design sketches drawn by Ernesto Molina for Rojin' },
      { image: art('concept-illustration.jpg'), title: '3D model — before shaders', short: '3D model', description: 'The character in grayscale before the final shader treatment, with multiple angles to show the model and its form.', alt: 'Rojin in a grayscale 3D model turnaround before the final shader look' },
      { image: art('concept-views.jpg'), title: 'Final result — 2.5D shaders', short: 'Final 2.5D look', description: 'The finished 3D model, using shaders to achieve a stylized 2.5D appearance. Front, side and back views.', alt: 'Final 3D render of Rojin with 2.5D shaders, shown from front, side and back' }
    ]
  },
  {
    id: 'masked', title: 'Masked Fighter', type: 'CHARACTER MODELING / STYLIZED 3D',
    intro: 'A stylized character project developed from my own hand-drawn concept art through model construction, topology and final presentation.',
    tools: ['Maya', 'Substance Painter'],
    featuredIndex: 3,
    slides: [
      { image: art('samurai-finished.jpg'), title: 'Original concept art — by Ernesto Molina', short: 'My concept art', description: 'Original character concept drawn by Ernesto Molina. These front and rear designs establish the silhouette and visual direction before modeling.', alt: 'Original front and rear concept art drawn by Ernesto Molina for Masked Fighter' },
      { image: art('samurai-turn-1.jpg'), title: 'Character model', short: '3D model', description: 'The character geometry before the final materials and textures.', alt: 'Untextured three-view model of the masked fighter' },
      { image: art('samurai-turn-2.jpg'), title: 'Character wireframe', short: 'Wireframe', description: 'Topology views showing the mesh structure across the character.', alt: 'Wireframe topology of the masked fighter character' },
      { image: art('scene-render-1.jpg'), title: 'Final character render', short: 'Final render 01', description: 'The finished stylized character, with materials, textures and a graphic presentation.', alt: 'Finished 3D render of a masked fighter holding a gun' },
      { image: art('scene-render-2.jpg'), title: 'Final character — second view', short: 'Final render 02', description: 'An additional presentation angle of the finished character.', alt: 'Alternative final render of the masked fighter' },
      { image: art('scene-render-3.jpg'), title: 'Final character — third view', short: 'Final render 03', description: 'Another view of the textured character and its silhouette.', alt: 'Third stylized render of the masked fighter' }
    ]
  },
  {
    id: 'fighter_weapon', title: 'Steam Punk Shotgun', type: 'WEAPON PROP / 3D MODELING',
    intro: 'A standalone steampunk shotgun project, from my original hand-drawn concept art through 3D topology to the final textured render.',
    tools: ['Maya', 'Substance Painter'],
    featuredIndex: 2,
    slides: [
      { image: art('prop-shotgun.jpg'), title: 'Original concept art — by Ernesto Molina', short: 'My concept art', description: 'Original steampunk shotgun concept drawn by Ernesto Molina, used as the visual reference for the 3D model.', alt: 'Original steampunk shotgun concept illustrated by Ernesto Molina' },
      { image: art('samurai-turn-3.jpg'), title: 'Weapon model — wireframe', short: 'Wireframe', description: 'The weapon geometry shown in wireframe from multiple angles, revealing the model topology.', alt: 'Stylized shotgun 3D model with visible wireframe topology' },
      { image: art('prop-turn.jpg'), title: 'Finished weapon model', short: 'Final render', description: 'The completed stylized shotgun prop with its color, textures and material treatment.', alt: 'Stylized brown and golden shotgun final 3D render' }
    ]
  },
  {
    id: 'playcity', title: 'PlayCity Commercials', type: 'ADVERTISING / 3D ENVIRONMENTS',
    intro: 'For these PlayCity commercials, I was responsible for 3D environment modeling and directing the modeling of the environments. Select a commercial to watch it here.',
    tools: ['Cinema 4D'],
    slides: [
      { video: 'QmYn3zF4fmQ', title: 'PlayCity — commercial 01', short: 'Commercial 01', description: 'My role: 3D environment modeling and directing the modeling of the environments for this commercial.', alt: 'PlayCity commercial video 01' },
      { video: 'CjLbYwkJBY4', title: 'PlayCity — commercial 02', short: 'Commercial 02', description: 'My role: 3D environment modeling and directing the modeling of the environments for this commercial.', alt: 'PlayCity commercial video 02' },
      { video: 'klpp5B8zuk0', title: 'PlayCity — commercial 03', short: 'Commercial 03', description: 'My role: 3D environment modeling and directing the modeling of the environments for this commercial.', alt: 'PlayCity commercial video 03' }
    ]
  },
  {
    id: 'racing_car', title: 'Racing Car', type: 'VEHICLE MODELING / HIGH & LOW POLY',
    intro: 'A separate 3D vehicle modeling project, featuring low-poly and high-poly versions of the racing car and their wireframes.',
    featuredIndex: 3,
    slides: [
      { image: art('race-wireframe.jpg'), title: 'Racing car — low-poly wireframe', short: 'Low-poly wireframe', description: 'The topology of the simplified racing vehicle mesh.', alt: 'Racing car low-poly topology' },
      { image: art('race-low.jpg'), title: 'Racing car — low-poly model', short: 'Low-poly model', description: 'The low-poly racing car model.', alt: 'Racing car low-poly model' },
      { image: art('race-high-wireframe.jpg'), title: 'Racing car — high-poly wireframe', short: 'High-poly wireframe', description: 'A wireframe view of the detailed vehicle geometry.', alt: 'Wireframe of the high-poly racing car' },
      { image: art('race-high.jpg'), title: 'Racing car — high-poly model', short: 'High-poly model', description: 'The high-detail version of the racing car.', alt: 'Racing car 3D high-poly model' }
    ]
  },
  {
    id: 'gun', title: 'Han Solo Blaster', type: 'UNIVERSITY PROJECT / 3D PROP',
    intro: 'A university modeling project recreating Han Solo’s blaster. The hard-surface model is presented through close-up renders, different angles and material details.',
    tools: ['Maya', 'Substance Painter'],
    featuredIndex: 3,
    slides: [
      { image: art('character-front.jpg'), title: 'Han Solo Blaster — muzzle detail', short: 'Muzzle detail', description: 'A close-up highlighting the blaster muzzle, metal surfaces and geometry.', alt: 'Han Solo blaster 3D muzzle close-up' },
      { image: art('character-back.jpg'), title: 'Han Solo Blaster — scope detail', short: 'Scope detail', description: 'A close-up of the sight and its textured surface details.', alt: 'Han Solo blaster 3D scope detail' },
      { image: art('character-view.jpg'), title: 'Han Solo Blaster — top detail', short: 'Top detail', description: 'The top of the model, showing hard-surface details around the sight and receiver.', alt: 'Han Solo blaster 3D top detail' },
      { image: art('character-profile.jpg'), title: 'Han Solo Blaster — final side render', short: 'Final render', description: 'The complete blaster in profile, showing its finished modeling and materials.', alt: 'Finished Han Solo blaster 3D model in full side profile' }
    ]
  },
  {
    id: 'attic', title: 'The Attic', type: 'UNIVERSITY PROJECT / 3D ENVIRONMENT',
    intro: 'A university environment-modeling project: a detailed 3D attic interior, presented alongside its wireframe to show how the scene was built.',
    tools: ['Maya', 'Substance Painter'],
    featuredIndex: 1,
    slides: [
      { image: art('model-wireframe-1.jpg'), title: 'Attic — wireframe', short: 'Wireframe', description: 'The same scene with its polygon structure visible across the room and props.', alt: 'Attic environment with full wireframe overlay' },
      { image: art('model-wireframe-2.jpg'), title: 'Attic — finished environment', short: 'Final environment', description: 'The completed attic scene with its materials, lighting, props and room composition.', alt: 'Finished modeled attic room with furniture and a telescope' }
    ]
  },
  {
    id: 'suit', title: 'Spider-Man Fan Art', type: 'FAN ART / 3D CHARACTER',
    intro: 'A fan-art model of Spider-Man’s black suit, created in Maya, textured in Substance Painter and rendered in Marmoset Toolbag. Explore the costume from multiple angles.',
    tools: ['Maya', 'Substance Painter', 'Marmoset Toolbag (rendering)'],
    slides: [
      { image: art('model-view-2.jpg'), title: 'Spider-Man — front view', short: 'Front', description: 'The finished black-suit Spider-Man model, rendered in Marmoset Toolbag.', alt: 'Black-suit Spider-Man fan-art 3D model, front view' },
      { image: art('model-view-3.jpg'), title: 'Spider-Man — profile view', short: 'Profile', description: 'A side view of the Spider-Man fan-art model and its silhouette.', alt: 'Black-suit Spider-Man fan-art 3D model, side view' },
      { image: art('model-view-1.jpg'), title: 'Spider-Man — rear view', short: 'Back', description: 'A rear view showing the black suit design.', alt: 'Black-suit Spider-Man fan-art 3D model, rear view' }
    ]
  },
  {
    id: 'stylized', title: 'Peco Fan Art', type: 'ANIME FAN ART / 3D CHARACTER',
    intro: '3D fan art of Peco, a character from the anime NEW GAME!, modeled in Maya. Explore the finished character and alternate views.',
    tools: ['Maya'],
    slides: [
      { image: art('stylized-character.jpg'), title: 'Peco — final render', short: 'Peco render', description: 'Peco fan art from the anime NEW GAME!, modeled in Maya with a stylized, illustrative 3D finish.', alt: '3D fan art of Peco from the anime New Game' },
      { image: art('prop-render-1.jpg'), title: 'Peco — side view', short: 'Side view', description: 'An additional side view of the stylized Peco model.', alt: 'Peco fan-art model from the side' },
      { image: art('prop-render-2.jpg'), title: 'Peco — alternate view', short: 'Alternate view', description: 'Another angle of the finished Peco model.', alt: 'Peco fan-art model alternate view' }
    ]
  },
  {
    id: 'sword_fanart', title: 'Red Queen Fan Art', type: 'DEVIL MAY CRY 4 / FAN ART',
    intro: 'A 3D fan-art recreation of Red Queen, Nero’s sword from Devil May Cry 4. Modeled in Maya, textured in Substance Painter and rendered in Marmoset Toolbag.',
    tools: ['Maya', 'Substance Painter', 'Marmoset Toolbag (rendering)'],
    featuredIndex: 2,
    slides: [
      { image: art('fanart-sword-01.jpg'), title: 'Red Queen — handle detail', short: 'Handle detail', description: 'Close-up of Red Queen’s red grip, guard and metal fittings, rendered in Marmoset Toolbag.', alt: 'Red Queen sword from Devil May Cry 4, 3D handle detail' },
      { image: art('fanart-sword-03.jpg'), title: 'Red Queen — blade detail', short: 'Blade detail', description: 'A close-up of the blade geometry and Substance Painter textures.', alt: 'Red Queen sword fan art from Devil May Cry 4, blade close-up' },
      { image: art('fanart-sword-02.jpg'), title: 'Red Queen — final model', short: 'Full render', description: 'The complete Red Queen fan-art model: Nero’s sword from Devil May Cry 4, modeled in Maya and rendered in Marmoset Toolbag.', alt: 'Full side render of Red Queen from Devil May Cry 4' }
    ]
  },
  {
    id: 'pistol_fanart', title: 'Blue Rose Fan Art', type: 'DEVIL MAY CRY 5 / FAN ART',
    intro: 'A 3D fan-art recreation of Blue Rose, Nero’s revolver from Devil May Cry 5. Modeled in Maya, textured in Substance Painter and rendered in Marmoset Toolbag.',
    tools: ['Maya', 'Substance Painter', 'Marmoset Toolbag (rendering)'],
    featuredIndex: 2,
    slides: [
      { image: art('fanart-pistol-01.jpg'), title: 'Blue Rose — cylinder detail', short: 'Cylinder view', description: 'A detail of Nero’s Blue Rose revolver cylinder and grip, rendered in Marmoset Toolbag.', alt: 'Blue Rose from Devil May Cry 5, cylinder and grip detail' },
      { image: art('fanart-pistol-03.jpg'), title: 'Blue Rose — barrel detail', short: 'Front view', description: 'The front of the Blue Rose model, showing its distinctive double-barrel design.', alt: 'Blue Rose revolver from Devil May Cry 5, front barrel view' },
      { image: art('fanart-pistol-02.jpg'), title: 'Blue Rose — final model', short: 'Full render', description: 'The finished Blue Rose fan-art model from Devil May Cry 5, modeled in Maya and rendered in Marmoset Toolbag.', alt: 'Full side render of Blue Rose from Devil May Cry 5' }
    ]
  }
];

const picker = document.getElementById('project-picker');
const viewer = document.getElementById('project-viewer');
const stage = document.getElementById('project-stage');
const filmstrip = document.getElementById('project-filmstrip');
const projectType = document.getElementById('project-type');
const projectTitle = document.getElementById('project-title');
const projectIntro = document.getElementById('project-intro');
const projectTools = document.getElementById('project-tools');
const stageCounter = document.getElementById('stage-counter');
const stageTitle = document.getElementById('stage-title');
const stageDescription = document.getElementById('stage-description');
const filmstripCount = document.getElementById('filmstrip-count');
const projectLightbox = document.getElementById('lightbox');
let currentProject = projects[0];
let currentSlide = 0;

function showFullImage(slide) {
  if (!slide.image || !projectLightbox) return;
  const image = projectLightbox.querySelector('img');
  image.src = slide.image;
  image.alt = slide.alt;
  projectLightbox.querySelector('p').textContent = `${currentProject.title} — ${slide.title}`;
  projectLightbox.showModal();
}

function showSlide(index) {
  const slides = currentProject.slides;
  currentSlide = (index + slides.length) % slides.length;
  const slide = slides[currentSlide];
  stage.replaceChildren();
  stage.classList.toggle('has-video', Boolean(slide.video));

  if (slide.video) {
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${slide.video}?rel=0`;
    frame.title = slide.title;
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.allowFullscreen = true;
    stage.append(frame);
  } else {
    const image = document.createElement('img');
    image.src = slide.image;
    image.alt = slide.alt;
    stage.append(image);
    const expand = document.createElement('button');
    expand.type = 'button';
    expand.className = 'stage-expand';
    expand.textContent = 'VIEW FULL SIZE ↗';
    expand.setAttribute('aria-label', `Expand ${slide.title}`);
    expand.addEventListener('click', () => showFullImage(slide));
    stage.append(expand);
  }

  stageCounter.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  stageTitle.textContent = slide.title;
  stageDescription.textContent = slide.description;
  filmstrip.querySelectorAll('.filmstrip-tile').forEach((button, i) => {
    const active = i === currentSlide;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function selectProject(id, shouldScroll = false) {
  const selected = projects.find(project => project.id === id);
  if (!selected) return;
  currentProject = selected;
  projectType.textContent = selected.type;
  projectTitle.textContent = selected.title;
  projectIntro.textContent = selected.intro;
  projectTools.hidden = !selected.tools?.length;
  projectTools.textContent = selected.tools?.length ? `SOFTWARE  /  ${selected.tools.join('  ·  ')}` : '';
  picker.querySelectorAll('.project-option').forEach(button => {
    const active = button.dataset.project === id;
    button.classList.toggle('is-selected', active);
    button.setAttribute('aria-pressed', String(active));
  });
  filmstrip.replaceChildren();
  filmstripCount.textContent = `${String(selected.slides.length).padStart(2, '0')} ${selected.slides.some(slide => slide.video) ? 'IMAGES / VIDEOS' : 'IMAGES'}`;

  selected.slides.forEach((slide, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'filmstrip-tile';
    button.setAttribute('aria-label', `Show ${slide.title}`);
    button.setAttribute('aria-pressed', 'false');
    const thumbnail = document.createElement('img');
    thumbnail.src = slide.video ? `https://img.youtube.com/vi/${slide.video}/hqdefault.jpg` : slide.image;
    thumbnail.alt = '';
    thumbnail.loading = 'lazy';
    const label = document.createElement('span');
    label.textContent = slide.short;
    button.append(thumbnail, label);
    if (slide.video) {
      const play = document.createElement('b');
      play.className = 'filmstrip-play';
      play.textContent = '▶';
      play.setAttribute('aria-hidden', 'true');
      button.append(play);
    }
    button.addEventListener('click', () => showSlide(i));
    filmstrip.append(button);
  });
  filmstrip.scrollLeft = 0;
  showSlide(selected.featuredIndex ?? 0);
  if (shouldScroll) {
    viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
  }
}

picker.addEventListener('click', event => {
  const option = event.target.closest('.project-option');
  if (option) selectProject(option.dataset.project, true);
});
document.getElementById('stage-previous').addEventListener('click', () => showSlide(currentSlide - 1));
document.getElementById('stage-next').addEventListener('click', () => showSlide(currentSlide + 1));

const requestedProject = location.hash.slice(1);
selectProject(projects.some(project => project.id === requestedProject) ? requestedProject : 'rojin');
