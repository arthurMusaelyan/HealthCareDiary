import Exercise from './classes/Exercise.js';
import Food from './classes/Food.js';
import CalorieTracker from './classes/CalorieTracker.js';

const calorieTracker = new CalorieTracker();

document.getElementById('add-exercise').addEventListener('click', () => {
    const name = document.getElementById('exercise-name').value;
    const caloriesPerRep = parseFloat(document.getElementById('exercise-calories').value);
    const reps = parseInt(document.getElementById('exercise-reps').value);

    if (name && !isNaN(caloriesPerRep) && !isNaN(reps)) {
        const exercise = new Exercise(name, caloriesPerRep, reps);
        calorieTracker.addExercise(exercise);
        updateTotalCalories();
    }
});

document.getElementById('add-food').addEventListener('click', () => {
    const name = document.getElementById('food-name').value;
    const calories = parseFloat(document.getElementById('food-calories').value);

    if (name && !isNaN(calories)) {
        const food = new Food(name, calories);
        calorieTracker.addFood(food);
        updateTotalCalories();
    }
});

function updateTotalCalories() {
    document.getElementById('total-calories').textContent = calorieTracker.getTotalCalories();
}
