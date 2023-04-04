const toggleBtn = document.getElementById('toggle-btn');
const svg1 = document.getElementById('svg1');
const svg2 = document.getElementById('svg2');
const sideDrawer = document.getElementById('side-drawer');

toggleBtn.addEventListener('click', () => {
  if (svg1.classList.contains('svg-active')) {
    svg1.classList.remove('svg-active');
    svg1.classList.add('hidden');
    svg2.classList.remove('hidden');
    svg2.classList.add('svg-active');
    sideDrawer.classList.remove('hidden');
  } else {
    svg1.classList.remove('hidden');
    svg1.classList.add('svg-active');
    svg2.classList.remove('svg-active');
    svg2.classList.add('hidden');
    sideDrawer.classList.add('hidden');
  }
});
