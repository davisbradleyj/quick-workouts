
// establish a baseline group of calisthenics
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

// hook into the Exercise button and create a click listener
const LIFT = document.querySelector('#exBtn')
LIFT.addEventListener('click',workout)

// create the function to select an exercise, repeatable for the 3 sets in some cases
function exercise() {
  return EXERCISES[Math.floor(Math.random() * EXERCISES.length)]
}

// write the workouts, plus a plank, to the page
function workout() {
  document.getElementById("ex1").textContent = (Math.floor(Math.random() * 10) + 20) + ' ' + exercise();
  document.getElementById("ex2").textContent = (Math.floor(Math.random() * 10) + 20) + ' ' + exercise();
  document.getElementById("ex3").textContent = (Math.floor(Math.random() * 10) + 20) + ' ' + exercise();
  document.getElementById("ex4").textContent = (Math.floor(Math.random() * 15) + 45) + ' Seconds Plank';
}

workout();