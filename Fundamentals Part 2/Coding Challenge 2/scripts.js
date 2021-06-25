// Coding Challenge 

const infoMark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi
    },
}
const infoJohn = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}
infoMark.calcBmi();
infoJohn.calcBmi();
console.log(infoMark.bmi);
console.log(infoJohn.bmi);
if (infoMark.calcBmi() > infoJohn.calcBmi()) {
    console.log(`${infoMark.fullName}'s BMI is (${infoMark.bmi}) higher than ${infoJohn.fullName}`);
} else if (infoJohn.calcBmi() > infoMark.calcBmi()) {
    console.log(`${infoJohn.fullName}'s BMI is (${infoJohn.bmi}) higher than ${infoMark.fullName}`);
} else {
    console.log(" No data");
}
