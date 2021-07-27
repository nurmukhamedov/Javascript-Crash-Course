const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.carAcc = function() {
    this.speed += 10;
    console.log(`${this.make} is going to at ${this.speed}`);
}
Car.prototype.carbrake = function() {
    this.speed -= 10;
    console.log(`${this.make} is going to at ${this.speed}`);
}
bmw.carAcc();
mercedes.carAcc();
bmw.carbrake();
mercedes.carbrake();
