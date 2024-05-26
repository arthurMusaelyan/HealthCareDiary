export default class Exercise {
    constructor(name, caloriesPerRep, reps) {
        this.name = name;
        this.caloriesPerRep = caloriesPerRep;
        this.reps = reps;
    }

    getTotalCalories() {
        return this.caloriesPerRep * this.reps;
    }
}
