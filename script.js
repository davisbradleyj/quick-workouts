
// establish a baseline group of calisthenics, and other constant variables throughout code
const EXERCISES = [
  'Pushups',
  'Clock Pushups',
  'Narrow Pushups',
  'Wide Pushups',
  'Situps',
  'Crunches',
  'Mountain Climbers',
  'Shoulder Touches',
  'Squats',
  'Lunges',
  'Triceps Dips'
]
const LIFT = document.querySelector('#exBtn');
const EXS = document.querySelectorAll('.ex');
const SETS = document.querySelectorAll('h3');

// hook into the Exercise button and create a click listener
LIFT.addEventListener('click', workout)

// create the function to select an exercise, repeatable for the 3 sets in some cases
function exercise() {
  return EXERCISES[Math.floor(Math.random() * EXERCISES.length)]
}

// write the workouts, plus a plank, to the page
function workout() {
  EXS.forEach(ex => ex.textContent = (Math.floor(Math.random() * 10) + 20) + ' ' + exercise())
  document.querySelector(".plank").textContent = (Math.floor(Math.random() * 15) + 45) + ' Seconds Plank';
  SETS.forEach(set => set.classList.remove('text-decoration-line-through'));
}

// Modify text to strikethrough the workout once complete
SETS.forEach(set => set.addEventListener('click', () => {
  set.classList.add('text-decoration-line-through');
}))

workout();