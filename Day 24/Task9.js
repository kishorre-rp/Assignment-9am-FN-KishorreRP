class Shape {
  constructor(color) {
    this.color = color;
  }

  
  describe() {
    console.log(`This is a ${this.color} shape.`);
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);          
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const c1 = new Circle(5, "red");
c1.describe();            
console.log(c1.area());