// JavaScript Object
const user = {
  name: "Kishorre R P",
  age: 21,
  skills: ["Java", "React", "Python"],
  isActive: true
};

//  TO JSON (string)
const jsonString = JSON.stringify(user);
console.log(jsonString);


//  FROM JSON (object)
const userBack = JSON.parse(jsonString);
console.log(userBack.name);
