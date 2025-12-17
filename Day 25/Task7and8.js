const ages = [12, 17, 18, 21, 30, 15];
const adults = ages.filter((age) => age >= 18);
console.log("Adults >=18:", adults);

const students = [
  ["Kishorre", 85],
  ["Dinesh", 92],
  ["Anbu", 76],
];

students.forEach((student) => {
  const [name, marks] = student;
  console.log(`Name: ${name}, Marks: ${marks}`);
});
