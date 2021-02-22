
// establish a baseline group of calisthenics, and other constant variables throughout code
const UPPER = [
  'Pushups',
  'Clock Pushups',
  'Narrow Pushups',
  'Wide Pushups',
]
const CORE = [
  'Situps',
  'Crunches',
  'Mountain Climbers',
  'Shoulder Touches',
]
const LOWER = [
  'Squats',
  'Lunges',
  'Back Lunges',
]
const LIFT = document.querySelector('#exBtn');
const UP = document.querySelector('.up');
const CO = document.querySelector('.co');
const LO = document.querySelector('.lo');
const SETS = document.querySelectorAll('h3');

// hook into the Exercise button and create a click listener
LIFT.addEventListener('click', workout)

// write the workouts, plus a plank, to the page
function workout() {
  UP.textContent = (Math.floor(Math.random() * 10) + 15) + ' ' + UPPER[Math.floor(Math.random() * UPPER.length)]
  CO.textContent = (Math.floor(Math.random() * 10) + 20) + ' ' + CORE[Math.floor(Math.random() * CORE.length)]
  LO.textContent = (Math.floor(Math.random() * 10) + 25) + ' ' + LOWER[Math.floor(Math.random() * LOWER.length)]
  document.querySelector(".plank").textContent = (Math.floor(Math.random() * 15) + 45) + ' Seconds Plank';
  SETS.forEach(set => set.classList.remove('text-decoration-line-through'));
}

// Modify text to strikethrough the workout once complete
SETS.forEach(set => set.addEventListener('click', () => {
  set.classList.add('text-decoration-line-through');
}))

workout();