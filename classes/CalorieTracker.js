export default class CalorieTracker {
    constructor() {
        this.exercises = [];
        this.foods = [];
        this.totalCalories = 0;
    }

    addExercise(exercise) {
        this.exercises.push(exercise);
        this.updateTotalCalories();
    }

    addFood(food) {
        this.foods.push(food);
        this.updateTotalCalories();
    }

    updateTotalCalories() {
        const exerciseCalories = this.exercises.reduce((total, exercise) => total + exercise.getTotalCalories(), 0);
        const foodCalories = this.foods.reduce((total, food) => total + food.getTotalCalories(), 0);
        this.totalCalories = exerciseCalories - foodCalories;
    }

    getTotalCalories() {
        return this.totalCalories;
    }
}
