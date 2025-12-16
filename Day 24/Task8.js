class student {
    constructor(name, roll_no) {
        this.name = name
        this.roll_no = roll_no
        
    }

    display(){
        console.log(`The name of the student is: ${this.name} and Roll No : ${this.roll_no}`);
        
    }
}

const std = new student("Kishorre", 28)
std.display()
const std1 = new student("Jeeva", 29)
std1.display()
const std2 = new student("Dinesh", 30)
std2.display()


student.prototype.sayHello = function () {
  console.log(`Hello, I am ${this.name}`);
};


std.sayHello(); 
std1.sayHello(); 
std2.sayHello(); 


const s4 = new student("Santhosh", 4);
s4.sayHello(); 