
// establish a baseline group of calisthenics, and other constant variables throughout code
const UPPER = [
  'Strict Pushups',
  'Clock Pushups',
  'Narrow Pushups',
  'Wide Pushups',
  'Clap Pushups',
]
const CORE = [
  'Situps',
  'Crunches',
  'Mountain Climbers',
  'Shoulder Touches',
  'Bicycle Crunches',
  'V Ups',
  'Toe Touches',
  'Russian Twist',
]
const LOWER = [
  'Squats',
  'Second Squat Hold',
  'Lunges',
  'Back Lunges',
  'Side Lunges',
  'Cossack Squat'
]
let counter = JSON.parse(localStorage.getItem('sets'));
const SETCOUNTER = document.querySelector('#set-counter');
const LIFT = document.querySelector('#exBtn');
const ADD = document.querySelector('#setBtn');
const RESET = document.querySelector('#resetBtn');
const UP = document.querySelector('.up');
const CO = document.querySelector('.co');
const LO = document.querySelector('.lo');
const SETS = document.querySelectorAll('h3');

// hook into the Exercise button and create a click listener
LIFT.addEventListener('click', workout)

// write the workouts, plus a plank, to the page
function workout() {
  SETCOUNTER.textContent = counter;
  UP.textContent = (Math.floor(Math.random() * 10) + 15) + ' ' + UPPER[Math.floor(Math.random() * UPPER.length)]
  CO.textContent = (Math.floor(Math.random() * 10) + 20) + ' ' + CORE[Math.floor(Math.random() * CORE.length)]
  LO.textContent = (Math.floor(Math.random() * 10) + 25) + ' ' + LOWER[Math.floor(Math.random() * LOWER.length)]
  document.querySelector(".plank").textContent = (Math.floor(Math.random() * 15) + 45) + ' Seconds Plank';
  SETS.forEach(set => set.classList.remove('text-decoration-line-through'));
}

// create click listener to access a counter function
ADD.addEventListener('click',completeSet)

// Add logic to keep count of completed sets
function completeSet() {
  counter++;
  SETCOUNTER.textContent = counter;
  localStorage.setItem('sets',JSON.stringify(counter));
  workout()
}

// create a listener to reset the set counter
RESET.addEventListener('click',resetCount)

// Add logic to reset the set counter
function resetCount() {
  counter = 0;
  SETCOUNTER.textContent = counter;
  localStorage.setItem('sets',JSON.stringify(counter));
}

// Modify text to strikethrough the workout once complete
SETS.forEach(set => set.addEventListener('click', () => {
  set.classList.add('text-decoration-line-through');
}))

// queue LMFAO - https://www.youtube.com/watch?v=wyx6JDQCslE
workout();