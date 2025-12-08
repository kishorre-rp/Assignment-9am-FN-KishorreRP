
const attendance = {
  Arjun: true,
  Priya: false,
  Kiran: true,
  Meera: false
};

for (const student in attendance) {
  if (attendance[student]) {
    console.log(student, 'is Present');
  } else {
    console.log(student ,'is Absent');
  }
}
