
function Vehicle(wheels) {
    this.wheels = wheels;
}
Vehicle.prototype.drive = function() {
    return `This vehicle is moving on ${this.wheels} wheels.`;
};


function Car(make, model) {
   
    Vehicle.call(this, 4); 
    this.make = make;
    this.model = model;
}


Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
    return "Beep beep!";
};



function ElectricCar(make, model, batteryCapacity) {
   
    Car.call(this, make, model);
    this.batteryCapacity = batteryCapacity;
}


ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar; 

ElectricCar.prototype.charge = function() {
    return `The ${this.make} ${this.model} is charging its ${this.batteryCapacity}kWh battery.`;
};




const nissanLeaf = new ElectricCar("Nissan", "Leaf", 40);

console.log(nissanLeaf);

console.log(nissanLeaf.charge()); 
console.log(nissanLeaf.honk());   
console.log(nissanLeaf.drive());  