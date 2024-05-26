export default class Food {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }

    getTotalCalories() {
        return this.calories;
    }
}
